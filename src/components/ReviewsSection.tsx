import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { Language } from '../types';
import { REVIEWS } from '../data/experiences';
import { UI_STRINGS } from '../data/translations';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  return (
    <section className="py-16 sm:py-20 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/20 text-[#C85A32] text-xs font-bold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Verified Travelers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
            {UI_STRINGS.reviewsHeader[currentLang]}
          </h2>
          <p className="text-stone-400 text-sm font-light">
            Genuine experiences shared by guests who explored Crete with Manos Michalitsis.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-stone-800/80 border border-stone-700/80 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-600" />
                </div>

                <p className="text-stone-300 text-xs sm:text-sm italic leading-relaxed mb-6">
                  "{review.comment[currentLang]}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-700/60">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {review.author}
                  </h4>
                  <p className="text-xs text-stone-400">
                    {review.location} • {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
