import React, { useEffect } from 'react';
import { CheckCircle2, Sparkles, X, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ToastNotificationProps {
  show: boolean;
  title: string;
  message: string;
  pointsEarned?: number;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  show,
  title,
  message,
  pointsEarned,
  onClose,
}) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed top-5 right-4 sm:right-6 z-50 max-w-sm w-full bg-[#1C1917] text-white p-4 rounded-2xl shadow-2xl border border-amber-500/40 backdrop-blur-xl flex items-start gap-3.5"
        >
          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-title font-bold text-sm text-white flex items-center gap-1.5">
                <span>{title}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
              </h4>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              {message}
            </p>
            {pointsEarned && pointsEarned > 0 && (
              <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-[#FFC72C] text-xs font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>+{pointsEarned} Crete Loyalty Points Earned!</span>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
