import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LINKS } from '../utils/data';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = window.location;

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-28 left-0 z-10 hidden lg:flex w-full items-center justify-center py-4 lg:py-2 px-4 lg:px-10 bg-[#387373] border-white ${
          isScrolled
            ? 'bg-transparent after:bg-opacity-100 backdrop-blur-md'
            : 'bg-primary-100'
        }`}
      >
        {/* Navigation */}
        <div className='hidden lg:flex items-stretch gap-4 text-secondary-200 capitalize cursor-pointer font-medium font-inter'>
          {LINKS.map(({ id, to, link }) => (
            <NavLink
              key={id}
              to={to}
              smooth
              duration={500}
              className={`p-4 hover:text-black ${
                isScrolled
                  ? 'text-black hover:text-white '
                  : 'text-white hover:text-black '
              } ${pathname === to ? 'font-bold text-secondary' : ''}`}
              activeclassname='border-b-2 border-secondary-200 text-secondary'
            >
              {link}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
