
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { CheckCircleIcon } from './icons';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-content tracking-tight sm:text-4xl">
            The Right Plan for Your Team
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-content-secondary">
            Simple, transparent pricing that scales with your needs. No hidden fees.
          </p>
        </div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-base-100 border ${plan.popular ? 'border-primary' : 'border-base-300'} rounded-2xl shadow-sm flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 py-1.5 px-4 bg-primary rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-content">{plan.name}</h3>
              <p className="mt-4 text-content-secondary">{plan.description}</p>
              <div className="mt-6">
                <p className="text-5xl font-extrabold text-content">
                  {plan.price}
                  <span className="text-lg font-medium text-content-secondary">{plan.frequency}</span>
                </p>
              </div>

              <ul role="list" className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex space-x-3">
                    <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-secondary" />
                    <span className="text-base text-content-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-focus'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
