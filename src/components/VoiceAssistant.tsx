import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Search, Sparkles, Volume2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language, Experience } from '../types';
import { EXPERIENCES } from '../data/experiences';

interface VoiceAssistantProps {
  currentLang: Language;
  onSearchQuery: (query: string) => void;
  onAutoBookExperience: (experience: Experience) => void;
}

export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({
  currentLang,
  onSearchQuery,
  onAutoBookExperience,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    // Check for browser Web Speech API SpeechRecognition
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = true;

      const langMap: Record<Language, string> = {
        el: 'el-GR',
        de: 'de-DE',
        en: 'en-US',
      };
      rec.lang = langMap[currentLang] || 'el-GR';

      rec.onstart = () => {
        setIsListening(true);
        setStatusMessage(
          currentLang === 'el'
            ? 'Ακούω... Πείτε π.χ. "Ψάξε παραλίες" ή "Κάνε κράτηση για Σαμαριά"'
            : currentLang === 'de'
            ? 'Zuhören... Sagen Sie "Strände" oder "Buchen Elafonisi"'
            : 'Listening... Say "Search beaches" or "Book Samaria Gorge"'
        );
      };

      rec.onresult = (event: any) => {
        let currentText = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentText += event.results[i][0].transcript;
        }
        setTranscript(currentText);

        // Process command
        processVoiceCommand(currentText.toLowerCase());
      };

      rec.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
        setStatusMessage('Voice recognition error. Try again.');
      };

      rec.onend = () => {
        setIsListening(false);
      };

      setRecognition(rec);
    }
  }, [currentLang]);

  const processVoiceCommand = (command: string) => {
    onSearchQuery(command);

    // Check if the user mentioned a booking keyword
    const isBookIntent =
      command.includes('book') ||
      command.includes('κράτηση') ||
      command.includes('κράτησε') ||
      command.includes('buchen') ||
      command.includes('reserv');

    // Match experience
    let matchedExp: Experience | null = null;
    if (command.includes('elafonisi') || command.includes('ελαφονήσι') || command.includes('pink')) {
      matchedExp = EXPERIENCES.find((e) => e.id === 'elafonisi-beach') || null;
    } else if (command.includes('samaria') || command.includes('σαμαριά') || command.includes('gorge') || command.includes('φαράγγι')) {
      matchedExp = EXPERIENCES.find((e) => e.id === 'samaria-gorge') || null;
    } else if (command.includes('knossos') || command.includes('κνωσός') || command.includes('wine') || command.includes('κρασί')) {
      matchedExp = EXPERIENCES.find((e) => e.id === 'knossos-wine') || null;
    } else if (command.includes('balos') || command.includes('μπάλος') || command.includes('chania') || command.includes('χανιά')) {
      matchedExp = EXPERIENCES.find((e) => e.id === 'balos-chania') || null;
    }

    if (isBookIntent && matchedExp) {
      setStatusMessage(`✨ Triggering booking for ${matchedExp.title[currentLang]}!`);
      setTimeout(() => {
        onAutoBookExperience(matchedExp!);
      }, 800);
    }
  };

  const toggleListening = () => {
    if (!recognition) {
      alert(
        currentLang === 'el'
          ? 'Η φωνητική αναγνώριση δεν υποστηρίζεται από τον περιηγητή σας. Παρακαλώ χρησιμοποιήστε Chrome ή Safari.'
          : 'Speech recognition is not supported in this browser. Please use Chrome or Safari.'
      );
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setTranscript('');
      recognition.start();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel rounded-3xl p-4 sm:p-6 border border-white/40 shadow-2xl space-y-4 relative overflow-hidden backdrop-blur-2xl">
      {/* Background glow accent */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-pair opacity-20 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Title & Description */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#102552] to-[#32292F] flex items-center justify-center text-white shadow-lg shrink-0">
            <Sparkles className="w-6 h-6 text-[#FFC72C] animate-spin-slow" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-title font-bold text-[#0C0C0C] flex items-center gap-2">
              <span>Φωνητικός Βοηθός Εκδρομών</span>
              <span className="px-2 py-0.5 rounded-full bg-[#102552]/10 text-[#102552] text-[10px] font-extrabold uppercase">
                AI Voice
              </span>
            </h3>
            <p className="text-xs text-stone-600 font-light">
              {currentLang === 'el' && 'Πείτε π.χ. "Ψάξε παραλίες" ή "Κάνε κράτηση για Ελαφονήσι"'}
              {currentLang === 'de' && 'Sprechen Sie z.B. "Strände" oder "Buchen Elafonisi"'}
              {currentLang === 'en' && 'Speak e.g. "Search beaches" or "Book Samaria Gorge"'}
            </p>
          </div>
        </div>

        {/* Mic Toggle Button */}
        <button
          onClick={toggleListening}
          className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2.5 shadow-xl transition-all duration-300 ${
            isListening
              ? 'bg-rose-600 text-white ring-4 ring-rose-300 animate-pulse'
              : 'bg-[#102552] hover:bg-[#1a3875] text-white'
          }`}
        >
          {isListening ? (
            <>
              <MicOff className="w-5 h-5 animate-spin" />
              <span>Listening Voice...</span>
            </>
          ) : (
            <>
              <Mic className="w-5 h-5 text-[#FFC72C]" />
              <span>Voice Search & Book</span>
            </>
          )}
        </button>
      </div>

      {/* Transcript & Status Display Box */}
      {(isListening || transcript || statusMessage) && (
        <div className="p-4 rounded-2xl bg-stone-900/90 text-white border border-stone-800 space-y-2 animate-fadeIn text-xs sm:text-sm">
          <div className="flex items-center justify-between text-stone-400 text-xs">
            <span className="flex items-center gap-1.5 font-bold text-[#99E1D9]">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Real-time Voice Assistant Feedback:</span>
            </span>
            {isListening && <span className="text-rose-400 font-bold animate-pulse">● Recording</span>}
          </div>

          <div className="text-sm font-medium text-amber-200 italic min-h-[20px]">
            {transcript ? `"${transcript}"` : statusMessage || 'Waiting for voice input...'}
          </div>
        </div>
      )}
    </div>
  );
};
