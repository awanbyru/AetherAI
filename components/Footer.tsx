
import React from 'react';
import { FOOTER_LINKS } from '../constants';
import { Logo, TwitterIcon, GithubIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-100 border-t border-base-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <Logo className="h-10 w-10" />
              <span className="text-3xl font-bold text-content">Aether</span>
            </div>
            <p className="text-content-secondary text-base">
              The all-in-one solution for modern teams.
            </p>
            <div className="flex space-x-6">
                <a href="#" className="text-content-secondary hover:text-content">
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon className="h-6 w-6" />
                </a>
                <a href="#" className="text-content-secondary hover:text-content">
                    <span className="sr-only">GitHub</span>
                    <GithubIcon className="h-6 w-6" />
                </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-content tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {FOOTER_LINKS.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-content-secondary hover:text-content">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-content tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {FOOTER_LINKS.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-content-secondary hover:text-content">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-content tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {FOOTER_LINKS.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-content-secondary hover:text-content">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-content tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {FOOTER_LINKS.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-content-secondary hover:text-content">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-base-300 pt-8">
          <p className="text-base text-content-secondary text-center">
            &copy; {new Date().getFullYear()} Aether, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
