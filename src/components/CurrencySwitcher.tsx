import React from 'react';
import { Currency } from '../types';

interface CurrencySwitcherProps {
  currentCurrency: Currency;
  onSelectCurrency: (currency: Currency) => void;
  className?: string;
}

export const CurrencySwitcher: React.FC<CurrencySwitcherProps> = ({
  currentCurrency,
  onSelectCurrency,
  className = '',
}) => {
  const currencies: { code: Currency; symbol: string; name: string }[] = [
    { code: 'EUR', symbol: '€', name: 'Euro (€)' },
    { code: 'USD', symbol: '$', name: 'US Dollar ($)' },
    { code: 'GBP', symbol: '£', name: 'British Pound (£)' },
  ];

  return (
    <div className={`inline-flex items-center p-1 rounded-xl bg-stone-100/90 border border-stone-200/90 shadow-2xs ${className}`}>
      {currencies.map((curr) => {
        const isSelected = currentCurrency === curr.code;
        return (
          <div key={curr.code} className="relative group">
            <button
              type="button"
              onClick={() => onSelectCurrency(curr.code)}
              aria-label={`Display prices in ${curr.name}`}
              className={`px-2 py-1 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1 ${
                isSelected
                  ? 'bg-white text-[#102552] shadow-xs border border-stone-200/80 font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
              title={`Display prices in ${curr.name}`}
            >
              <span className="font-extrabold text-[11px]">{curr.symbol}</span>
              <span className="text-[10px] uppercase tracking-wide font-sans">{curr.code}</span>
            </button>
            {/* Subtle hover tooltip */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 hidden group-hover:block px-2 py-1 rounded-md bg-stone-900 text-white text-[10px] font-medium whitespace-nowrap shadow-lg pointer-events-none z-50 animate-fadeIn">
              {curr.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

