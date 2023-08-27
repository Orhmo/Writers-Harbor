import React from 'react';
import { Link } from 'react-router-dom';

import Check from '../../assets/Login/check.svg';
import { Blob, Blob2 } from '../../utils/data';

const Welcome = () => {
  return (
    <div className='flex flex-col overflow-y-hidden mx-8 my-12 md:my-8'>
      <div className='align-center flex items-center justify-center pt-2'>
        <Link to='/' className='align-center flex items-center justify-center pt-2'>
          <p className='text-5xl leading-8 style text-white no-underline'>
            writersHarbor
          </p>
        </Link>
      </div>

       <div className='mt-8 mx-4'>
            <h1 className='text-3xl text-1A1A1A leading-10 tracking--0.5px'>
            Dive into the World of Words
            </h1>
            <p className='text-16 text-595959 leading-6 tracking-0.3px pt-2'>
                Discover a world of creativity and expression! 
            </p>
        </div>

        <div className='mt-8 bg-FFFFFF p-2 rounded-lg'>
          {Blob.map((item, index) => (
            <div className={`flex items-center pb-8`} key={index}>
              <div className={item.style}>
                <img
                  src={item.src}
                  alt=''
                  className='lg:w-full hover:animate-bounce hover:transition-transform hover:duration-300'
                />
              </div>
              <div className='pl-4'>
                <h2 className='text-858585 text-16 leading-8 tracking--0.3px'>
                  {item.head}
                </h2>
                <p className='text-73798C text-12 leading-5 font-500 pr-16'>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='bg-F8F8F6 p-2 rounded-lg'>
          {Blob2.map((item, index) => (
            <div className='flex items-center' key={index}>
              <div className={item.style}>
                <img
                  src={item.src}
                  alt=''
                  className='lg:w-full hover:animate-bounce hover:transition-transform hover:duration-300'
                />
              </div>
              <div className='pl-4'>
                <h2 className='text-858585 text-16 leading-8 tracking--0.3px'>
                  {item.head}
                </h2>
                <p className='text-73798C text-12 leading-5 font-500'>{item.des}</p>
              </div>
              <img src={Check} alt='' />
            </div>
          ))}
        </div>
      </div>
  );
};

export default Welcome;
