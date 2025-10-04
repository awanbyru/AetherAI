
import React from 'react';

const CTA: React.FC = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-content sm:text-4xl">
              Ready to Dive In?
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-content-secondary">
              Start your free 14-day trial today. No credit card required. Unleash your team's potential with Aether.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:justify-self-end">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center py-3 px-6 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-focus"
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
