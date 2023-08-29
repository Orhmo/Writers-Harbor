import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoCloseOutline } from 'react-icons/io5';
import { subscribeToNewsletter } from '../state/newsletter/newsletterActions';

function NewsLetterModal({ handleModal, nextModal }) {
  const dispatch = useDispatch();
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
    dispatch(subscribeToNewsletter({ fullName, email }));
    nextModal();
  };

  return (
    <div className='mx-auto my-auto bg-white shadow-md w-[24rem] md:w-[34rem] h-auto py-4 px-2'>
      <span className='flex justify-end w-full p-2'>
        <IoCloseOutline
          className='cursor-pointer'
          onClick={handleModal}
          size={22}
        />
      </span>
      <form className='flex flex-col justify-evenly gap-6 px-4 py-6 h-full '>
        <p className='font-bold text-2xl text-center'>
          Subscribe to our Newsletter{' '}
        </p>
        <input
          className='input_field px-3 py-2 my-1 border rounded-md'
          type='text'
          name='fullname'
          id=''
          placeholder='Full name'
          value={fullName}
          onChange={handleFullNameChange}
        />
        <input
          className='input_field px-3 py-2 my-1 border rounded-md'
          type='text'
          name='email'
          id=''
          placeholder='Email address'
          value={email}
          onChange={handleEmailChange}
        />
        <button label='subscribe now' onClick={handleSubmit}>
          {' '}
          <p className='text-white bg-red-950 border rounded-lg p-4'>Next</p>
        </button>
      </form>
    </div>
  );
}

export default NewsLetterModal;
