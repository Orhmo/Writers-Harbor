import React, { useState } from 'react';
import { LINKS } from '../../../utils/data';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Logo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => setIsOpen((state) => !state);
  return (
    <div className='justify-between '>
      <nav
        className={`fixed top-6 lg:top-12 left-0 z-10 flex w-full lg:items-center lg:justify-center justify-between py-6 lg:py-4 px-4 lg:px-10 bg-[#387373] z-1 ${
          isScrolled
            ? 'bg-white after:bg-opacity-100 backdrop-blur-md'
            : 'bg-primary-100 text-black'
        }`}
      >
        <div>
          {/* LOGO */}
          <Link
            to='/'
            className='align-center flex items-center justify-center pt-2'
          >
            <p className='text-5xl leading-8 style text-white no-underline hover:opacity-80'>
             writersHarbor
            </p>
          </Link>
        </div>
        {/* Mobile menu button */}
        <div
          onClick={toggleSideBar}
          className='flex cursor-pointer pr-4 my-auto opacity-75 transform hover:opacity-100 lg:hidden items-end z-10 text-[#93BFB7]'
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        {isOpen && (
          <ul className='flex flex-col absolute top-2 bottom-0 right-0 w-1/2 md:w-[20vw] h-screen  text-black lg:hidden z-1'>
            {LINKS.map(({ id, to, link }) => (
              <li key={id}>
                <Link
                  to={to}
                  smooth
                  duration={500}
                  className='no-underline border border-[#93BFB7] flex flex-row px-4 pr-4 cursor-pointer capitalize py-6 text-md text-[#387373]  bg-white w-full  hover:[#2D3E40] hover:bg-white'
                  onClick={toggleSideBar}
                >
                  {link}
                </Link>
              </li>
            ))}
            <li>
            {/* Sign In Button */}
            <div className='items-center no-underline border border-[#93BFB7] flex flex-row px-4 pr-4 cursor-pointer capitalize py-6 text-md text-white bg-white w-full  hover:[#2D3E40] hover:bg-white'>
              <Link to='/signin' className='lg:inline-block'>
                <button
                  className={`text-center py-2 text-sm font-medium hover:text-white border-2 bg-[#387373] hover:bg-[#2D3E40] rounded-lg transition-all  px-6 ${
                    isScrolled ? 'text-black' : 'text-white'
                  }`}
                >
                  Sign in
                </button>
              </Link>
            </div>
            </li>
            <li>
            {/* Sign Up Button */}
            <div className='no-underline border border-[#93BFB7] flex flex-row px-4 pr-4 cursor-pointer capitalize py-6 text-md text-white  bg-white w-full  hover:[#2D3E40] hover:bg-white'>
              <Link to='/signup' className='lg:inline-block'>
                <button
                 className={`text-center py-2 text-sm font-medium hover:text-white border-2 bg-[#387373] hover:bg-[#2D3E40] rounded-lg transition-all  px-3 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
                >
                  Get started
                </button>
              </Link>
            </div>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
