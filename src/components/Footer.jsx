import React from 'react';
import { CompanyLogo } from '../utils/svg';
import { Link } from 'react-router-dom';
import Newsletter from '../layouts/footer/NewsletterSection';

export default function Footer() {
  return (
    <>
      <Newsletter />
      <div className='bg-[#387373]'>
        <section className=' pt-10'>
          <div className=' text-md-start mt-5 '>
            <div className='mt-3 mx-8 md:mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 md:gap-8'>
              <div className='space-y-6 mx-auto mb-4'>
                <Link
                  to='/'
                  className='align-center flex items-center justify-center pt-2'
                >
                  <p className='text-5xl leading-8 style text-white no-underline'>
                    writersHarbor
                  </p>
                </Link>
                <p className='text-gray-200 my-4 mx-4'>
                  "Unveile, Discover, Write, Engage: Your Safe Haven to an Ocean of Stories"
                </p>
              </div>

              <div className='space-y-2 mb-4 capitalise'>
                <h6 className=' font-bold mb-4 text-gray-400 inline-block'>
                  Categories
                </h6>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    International
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Regional
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Political
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Business
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Sport
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Health
                  </a>
                </p>
              </div>

              <div className='space-y-2 mb-4 capitalise'>
                <h6 className='font-bold mb-4 text-gray-400 inline-block'>
                  Company
                </h6>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Careers
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Terms of Services{' '}
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Contact us
                  </a>
                </p>
              </div>

              <div className='space-y-2 mb-md-0 mb-4 capitalise'>
                <h6 className='font-bold mb-4 text-gray-400 inline-block'>
                  Contact
                </h6>
                <p className='text-gray-200 leading-5'>
                  Writers Harbor, Lagos state, NG
                </p>
                <p className='text-gray-200'>articles@writersharbor.com</p>
                <p className='text-gray-200'>+ 234 816 235 6789</p>
                <p className='text-gray-200'>+ 234 915 223 2457</p>
              </div>

              <div className='space-y-2 mb-4 capitalise'>
                <h6 className='font-bold mb-4 text-gray-400 inline-block'>
                  Socials
                </h6>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Facebook
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Twitter
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    Intagram
                  </a>
                </p>
                <p>
                  <a
                    href='#!'
                    className='flex text-gray-200 hover:text-gray-400 transition'
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className='text-center p-4 text-gray-200'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          © 2023 Copyright:
          <a className='px-2 font-bold' href='https://mdbootstrap.com/'>
            writersHarbor
          </a>
        </div>
      </div>
    </>
  );
}
