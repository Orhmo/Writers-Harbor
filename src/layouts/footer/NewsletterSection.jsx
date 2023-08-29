import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeToNewsletter } from '../../state/newsletter/newsletterActions';
import CompletedModal from '../../components/Footer/CompletedModal';

export default function NewsletterSection() {
  const [stage, setStage] = useState(1);
  const [newsLetter, setNewsLetter] = useState(false);

  const handleNewsLetterModal = () => {
    if (stage !== 1) {
      return setStage(stage + 1);
    }
    setNewsLetter(!newsLetter);
    setStage(1);
  };

  const dispatch = useDispatch();
  const isSubscribed = useSelector((state) => state.newsletter.isSubscribed);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subscribeToNewsletter({ email, fullName }));
  };

  return (
    <>
      <div className='flex flex-col relative '>
        {newsLetter && (
          <div className='backdrop-blur-sm fixed inset-0 flex items-center justify-center z-50'>
            {stage === 1 && (
              <CompletedModal
                handleModal={() => setNewsLetter(!newsLetter)}
                nextModal={handleNewsLetterModal}
              />
            )}
          </div>
        )}
        <section className='mt-16'>
          <div className='p-8 md:p-24 my-8 rounded-md  w-[80%] mx-auto shadow-lg shadow-[#387373]'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center px-8 mb-8'>
              <div>
                <p className='text-lg md:text-4xl text-center md:text-start space-8 font-bold capitalize text-black md:w-3/4'>
                  Subscribe to get the latest news!
                </p>
              </div>
              <div className=' text-black text-center md:text-end p-4 rounded'>
                <p className='text-xs font-bold'>
                  "Stay informed, stay entertained!"
                </p>
              </div>
            </div>
            {isSubscribed ? (
              <p className='text-green-600 text-sm md:text-base'>
                You are already subscribed!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className='flex'>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='w-full py-2 px-4 border border-black rounded-s-xl mb-4 text-sm md:text-base'
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  type='submit'
                  onClick={() => setNewsLetter(!newsLetter)}
                  className='md:w-1/5 py-2 px-4 mb-4 bg-[#387373] text-white font-bold rounded-e-xl hover:bg-[#2D3E40] '
                >
                  <p className='text-sm md:text-base'>Subscribe</p>
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
