import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';
import type { NavLink } from '../types';

const NavLinkItem: React.FC<{ link: NavLink; onClick?: () => void; isMobile?: boolean }> = ({ link, onClick, isMobile }) => (
    <RouterNavLink
        to={link.path}
        onClick={onClick}
        className={({ isActive }) =>
            isMobile 
            ? `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-brand-blue text-white' : 'text-gray-700 hover:bg-gray-100'}`
            : `relative px-1 py-2 text-sm font-medium text-brand-dark transition-colors duration-300 hover:text-brand-blue ${
                isActive ? 'text-brand-blue' : ''
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-blue after:transition-transform after:duration-300 ${
                isActive ? 'after:scale-x-100' : 'after:scale-x-0'
              } hover:after:scale-x-100 after:origin-center`
        }
    >
        {link.name}
    </RouterNavLink>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px]">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
             <RouterNavLink to="/" className="flex items-center space-x-3">
                <svg className="h-10 w-10 text-brand-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.78 6.36C19.53 6.11 19.2 6 18.86 6H11V5C11 3.9 10.1 3 9 3S7 3.9 7 5V6H5.14C4.8 6 4.47 6.11 4.22 6.36L2.36 8.22C2.11 8.47 2 8.8 2 9.14V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9.14C22 8.8 21.89 8.47 21.64 8.22L19.78 6.36ZM13.95 15.32L10.05 11.41L12.17 9.29L16.08 13.2L13.95 15.32Z" />
                  <path d="M9 8H15V16H9V8Z" opacity="0.4" />
                </svg>
                <span className="font-bold text-xl text-brand-dark tracking-tight">PWMOI BANYUWANGI</span>
            </RouterNavLink>
          </div>
          <div className="hidden md:flex items-center space-x-6">
              {NAVIGATION_LINKS.map((link) => (
                <NavLinkItem key={link.name} link={link} />
              ))}
            <Link to="/kontak" className="bg-brand-green hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105">
                Gabung Sekarang
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-dark hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 flex flex-col justify-around">
                    <span className={`block w-full h-0.5 bg-brand-dark transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-brand-dark transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-full h-0.5 bg-brand-dark transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
                </div>
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden absolute w-full bg-white shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} 
        id="mobile-menu"
      >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <NavLinkItem key={link.name} link={link} onClick={() => setIsOpen(false)} isMobile />
            ))}
             <div className="mt-4 px-2">
                <Link to="/kontak" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-green hover:bg-green-700 text-white font-bold py-3 px-5 rounded-lg transition-all duration-300">
                    Gabung Sekarang
                </Link>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;