
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-base-200 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-content tracking-tight sm:text-4xl">
            Loved by Teams Worldwide
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="bg-base-100 p-8 rounded-lg shadow-md">
              <blockquote className="flex flex-col h-full">
                <p className="text-lg text-content-secondary flex-grow">
                  "{testimonial.quote}"
                </p>
                <footer className="mt-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-content">{testimonial.name}</div>
                      <div className="text-base text-content-secondary">{testimonial.title}</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
