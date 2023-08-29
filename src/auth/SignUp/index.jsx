import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Welcome from './welcome';
import SignUpForm from './signUpForm'; 

const SignUp = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='flex h-[100%] md:h-screen tracking-tighter '>
      <div className='hidden md:block md:w-[45%] bg-cover bg-center bg-[#2D3E40]'>
        <div data-aos='fade-right' data-aos-easing='ease-in-sine' data-aos-duration={1000}>
          <Welcome/>
        </div>
      </div>
      <div className='w-full md:w-[55%] bg-[#E4F2E7] px-16 py-8 md:px-16 flex justify-center items-center'>
        <div data-aos='fade-left' data-aos-easing='ease-in-sine' data-aos-duration={2000}>
            <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
