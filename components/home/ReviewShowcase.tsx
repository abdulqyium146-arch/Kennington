import { Star, Quote } from "lucide-react";
import { BUSINESS, REVIEWS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewShowcase() {
  return (
    <section className="section-padding gradient-section" aria-label="Customer reviews">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            Verified Google Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Trusted by Kennington Residents
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — here&apos;s what our local customers
            say about Lockstar Locksmith Kennington.
          </p>

          {/* Aggregate rating display */}
          <div className="inline-flex items-center gap-4 mt-6 bg-white px-6 py-4 rounded-2xl shadow-card border border-amber-100">
            <div className="text-center">
              <p className="text-4xl font-black text-slate-900">
                {BUSINESS.socialProof.rating}
              </p>
              <StarRating rating={5} />
              <p className="text-xs text-slate-500 mt-1">Overall Rating</p>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center">
              <p className="text-4xl font-black text-slate-900">
                {BUSINESS.socialProof.reviewCount}+
              </p>
              <p className="text-sm font-semibold text-slate-700">Google Reviews</p>
              <p className="text-xs text-slate-500 mt-0.5">Verified</p>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center">
              <p className="text-4xl font-black text-slate-900">
                {BUSINESS.socialProof.yearsTrading}+
              </p>
              <p className="text-sm font-semibold text-slate-700">Years Serving</p>
              <p className="text-xs text-slate-500 mt-0.5">Kennington</p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:shadow-lg transition-shadow duration-200"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <StarRating rating={review.rating} />
                  <p
                    className="font-bold text-slate-900 mt-2"
                    itemProp="author"
                  >
                    {review.name}
                  </p>
                  <p className="text-sm text-slate-500">{review.location}</p>
                </div>
                <Quote className="h-8 w-8 text-blue-100 flex-shrink-0" />
              </div>
              <blockquote>
                <p
                  className="text-slate-700 text-sm leading-relaxed"
                  itemProp="reviewBody"
                >
                  &ldquo;{review.text}&rdquo;
                </p>
              </blockquote>
              <p className="text-xs text-slate-400 mt-4">{review.date} · Google Review</p>
            </article>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm">
            View all {BUSINESS.socialProof.reviewCount}+ reviews on{" "}
            <span className="font-semibold text-slate-700">Google Business Profile</span>
          </p>
        </div>
      </div>
    </section>
  );
}
