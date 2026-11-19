import React, { useState, useEffect } from 'react';
import { Mic, MicOff, X, Volume2, Sparkles, CheckCircle2, Search, Info } from 'lucide-react';
import { Language, Experience } from '../types';
import { EXPERIENCES } from '../data/experiences';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSearchQuery: (query: string) => void;
  onAutoBookExperience: (experience: Experience) => void;
}

export const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSearchQuery,
  onAutoBookExperience,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [recognition, setRecognition] = useState<any>(null);

  // Trigger TTS voice whenever modal opens
  useEffect(() => {
    if (isOpen) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        const speakText =
          currentLang === 'el'
            ? 'Πείτε μου αυτό που θέλετε και θα σας πάμε αμέσως εκεί!'
            : currentLang === 'de'
            ? 'Sagen Sie mir, was Sie möchten, und wir bringen Sie sofort dorthin!'
            : 'Tell me what you wish for, and we will take you there right away!';

        const utterance = new SpeechSynthesisUtterance(speakText);
        const langMap: Record<Language, string> = { el: 'el-GR', de: 'de-DE', en: 'en-US' };
        utterance.lang = langMap[currentLang] || 'el-GR';
        utterance.rate = 0.95;
        utterance.pitch = 1.1;

        // Try to pick a gentle female voice if available in browser
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(
          (v) =>
            v.lang.startsWith(utterance.lang.slice(0, 2)) &&
            (v.name.includes('Female') ||
              v.name.includes('Google') ||
              v.name.includes('Natural') ||
              v.name.includes('Samantha') ||
              v.name.includes('Monica'))
        );
        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }

        setTimeout(() => {
          window.speechSynthesis.speak(utterance);
        }, 300);
      }
    }
  }, [isOpen, currentLang]);

  // Speech Recognition Listener
  useEffect(() => {
    if (!isOpen) return;

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
        processVoiceCommand(currentText.toLowerCase());
      };

      rec.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
        setStatusMessage(
          currentLang === 'el'
            ? 'Σφάλμα φωνητικής αναγνώρισης. Παρακαλώ δοκιμάστε ξανά.'
            : 'Voice recognition error. Please try again.'
        );
      };

      rec.onend = () => {
        setIsListening(false);
      };

      setRecognition(rec);
    }
  }, [isOpen, currentLang]);

  if (!isOpen) return null;

  const processVoiceCommand = (command: string) => {
    onSearchQuery(command);

    const isBookIntent =
      command.includes('book') ||
      command.includes('κράτηση') ||
      command.includes('κράτησε') ||
      command.includes('buchen') ||
      command.includes('reserv');

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
      setStatusMessage(`✨ Ανοίγει η κράτηση για: ${matchedExp.title[currentLang]}!`);
      setTimeout(() => {
        onAutoBookExperience(matchedExp!);
        onClose();
      }, 1000);
    }
  };

  const toggleListening = () => {
    if (!recognition) {
      alert(
        currentLang === 'el'
          ? 'Η φωνητική αναγνώριση δεν υποστηρίζεται από τον περιηγητή σας. Παρακαλώ χρησιμοποιήστε Chrome ή Safari.'
          : 'Speech recognition is not supported in this browser. Please use Google Chrome or Safari.'
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel-dark text-white rounded-3xl shadow-2xl border border-white/20 overflow-hidden my-auto max-h-[90vh] flex flex-col p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C85A32] flex items-center justify-center text-white shadow-md">
              <Mic className="w-5 h-5 text-[#FFC72C]" />
            </div>
            <div>
              <h3 className="text-lg font-title font-bold text-white flex items-center gap-2">
                <span>Φωνητική Αναζήτηση & Κράτηση</span>
              </h3>
              <p className="text-xs text-stone-400">
                {currentLang === 'el' && 'Έξυπνος φωνητικός βοηθός εκδρομών'}
                {currentLang === 'de' && 'Intelligenter Sprachassistent für Touren'}
                {currentLang === 'en' && 'Smart voice tour navigation assistant'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Detailed User Guidance */}
        <div className="space-y-3 bg-stone-900/80 p-4 rounded-2xl border border-stone-800 text-xs text-stone-300">
          <div className="flex items-center gap-2 text-amber-300 font-bold">
            <Info className="w-4 h-4" />
            <span>Οδηγίες Χρήσης Φωνητικών Εντολών:</span>
          </div>
          <p className="text-amber-200/90 italic font-medium">
            "Πείτε μου αυτό που θέλετε και θα σας πάμε αμέσως εκεί!"
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-stone-300 font-light leading-relaxed">
            <li>
              <strong>Αναζήτηση Εκδρομής:</strong> Πείτε π.χ. <span className="text-white font-semibold">"Ψάξε παραλίες"</span>, <span className="text-white font-semibold">"Ελαφονήσι"</span> ή <span className="text-white font-semibold">"Σαμαριά"</span>.
            </li>
            <li>
              <strong>Απευθείας Κράτηση:</strong> Πείτε <span className="text-white font-semibold">"Κάνε κράτηση για Σαμαριά"</span> ή <span className="text-white font-semibold">"Book Elafonisi"</span> για να ανοίξει αυτόματα η φόρμα κράτησης.
            </li>
          </ul>
        </div>

        {/* Main Microphone Button */}
        <div className="text-center space-y-3 py-2">
          <button
            type="button"
            onClick={toggleListening}
            className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer ${
              isListening
                ? 'bg-rose-600 ring-8 ring-rose-500/30 animate-pulse text-white scale-110'
                : 'bg-gradient-to-tr from-[#102552] to-[#C85A32] hover:scale-105 text-white border-2 border-amber-300/40'
            }`}
          >
            {isListening ? (
              <MicOff className="w-10 h-10 animate-bounce" />
            ) : (
              <Mic className="w-10 h-10 text-[#FFC72C]" />
            )}
          </button>

          <p className="text-xs font-bold text-stone-300">
            {isListening ? 'Πατήστε ξανά για διακοπή' : 'Πατήστε το μικρόφωνο και μιλήστε'}
          </p>
        </div>

        {/* Live Feedback Box */}
        {(isListening || transcript || statusMessage) && (
          <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-1 text-xs">
            <div className="flex items-center justify-between text-stone-400">
              <span className="flex items-center gap-1 font-bold text-[#99E1D9]">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Αποτέλεσμα Φωνής:</span>
              </span>
              {isListening && <span className="text-rose-400 font-bold animate-pulse">● Ακούει...</span>}
            </div>
            <div className="text-sm font-medium text-amber-200 italic min-h-[24px]">
              {transcript ? `"${transcript}"` : statusMessage || 'Περιμένω φωνητική εντολή...'}
            </div>
          </div>
        )}

        {/* Close Modal CTA */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs transition-colors cursor-pointer"
        >
          Έκλεισε
        </button>
      </div>
    </div>
  );
};
