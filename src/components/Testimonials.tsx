import React from "react";
import { testimonials } from "../data/cars";
import { StarIcon } from "./Icons";

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-4xl font-bold text-slate-900 mb-4">
            Kata Pelanggan Kami
          </p>
          <p className="text-slate-600">
            Dipercaya oleh warga Parepare dan sekitarnya untuk perjalanan
            wisata, bisnis, dan keluarga
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
