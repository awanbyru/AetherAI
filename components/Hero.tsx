
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 text-center lg:py-32">
          <h1 className="text-4xl font-extrabold tracking-tight text-content sm:text-5xl md:text-6xl">
            <span className="block">Elevate Your Workflow with</span>
            <span className="block text-primary">Aether Platform</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-content-secondary sm:max-w-3xl">
            Streamline your projects, enhance collaboration, and unlock powerful insights. Aether is the all-in-one solution designed for modern teams to achieve more.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-focus md:py-4 md:text-lg md:px-10"
              >
                Get started free
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-base-100 px-8 py-3 text-base font-medium text-primary shadow-sm hover:bg-base-300 md:py-4 md:text-lg md:px-10"
              >
                Watch demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
