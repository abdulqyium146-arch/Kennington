import { Star, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

export default function Testimonials() {
  const featured = REVIEWS.slice(0, 3);

  return (
    <section className="section-padding bg-white" aria-label="Customer testimonials">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">
            What Customers Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Real Reviews from
            <br />
            <span className="text-blue-700">Kennington Residents</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((review) => (
            <article
              key={review.id}
              className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white"
            >
              <Quote
                className="absolute top-4 right-4 h-10 w-10 text-white/10"
                aria-hidden="true"
              />
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-blue-100 text-sm leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-sm font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{review.name}</p>
                  <p className="text-blue-300 text-xs">{review.location} · {review.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
