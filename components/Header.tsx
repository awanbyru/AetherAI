
import React from 'react';
import { NAV_LINKS } from '../constants';
import { Logo } from './icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <Logo className="h-8 w-8" />
              <span className="text-2xl font-bold text-content">Aether</span>
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-content-secondary hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <a
              href="#"
              className="hidden md:inline-block text-content-secondary font-medium hover:text-primary mr-4"
            >
              Log in
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-focus"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
