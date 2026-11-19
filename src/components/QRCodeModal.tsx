import React, { useState } from 'react';
import { X, QrCode, Smartphone, Copy, Check, ExternalLink, Download } from 'lucide-react';
import { Experience, Language } from '../types';

interface QRCodeModalProps {
  experience: Experience | null;
  currentLang: Language;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  experience,
  currentLang,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!experience) return null;

  const experienceUrl = `${window.location.origin}${window.location.pathname}#${experience.id}`;
  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
    experienceUrl
  )}&color=102552&bgcolor=ffffff&margin=10`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(experienceUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-sm glass-panel bg-white/95 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 text-stone-900 space-y-6 text-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon Header */}
        <div className="space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#102552] text-[#FFC72C] flex items-center justify-center mx-auto shadow-md">
            <QrCode className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-title font-bold text-[#102552]">
            {experience.title[currentLang]}
          </h3>
          <p className="text-xs text-stone-600">
            {currentLang === 'el' && 'Σαρώστε τον κωδικό QR με το κινητό σας για άμεση κράτηση'}
            {currentLang === 'de' && 'Scannen Sie den QR-Code mit Ihrem Handy für die Buchung'}
            {currentLang === 'en' && 'Scan this QR code with your mobile camera to book on phone'}
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-inner inline-block mx-auto relative group">
          <img
            src={qrCodeImageUrl}
            alt={`QR Code for ${experience.title[currentLang]}`}
            className="w-52 h-52 object-contain mx-auto rounded-lg"
          />
        </div>

        {/* Instructions */}
        <div className="flex items-center justify-center gap-2 text-xs text-stone-500 font-medium">
          <Smartphone className="w-4 h-4 text-[#C85A32]" />
          <span>Works with iOS Camera & Android Scanner</span>
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-2 border-t border-stone-200">
          <button
            onClick={handleCopyLink}
            className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-stone-600" />
                <span>Copy Direct Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
