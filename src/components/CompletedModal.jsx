import { IoCloseOutline } from 'react-icons/io5';
import mailIcon from '../assets/mailIcon.svg';

function CompletedModal({ handleModal, nextModal }) {
  return (
    <div className='mx-auto my-auto bg-white shadow-md w-[24rem] md:w-[34rem] h-auto py-4 px-2'>
      <span className='flex justify-end w-full'>
        <IoCloseOutline
          className='cursor-pointer'
          size={22}
          onClick={handleModal}
        />
      </span>
      <div className='flex flex-col justify-evenly gap-6 px-4 py-6 h-full'>
        <img className='mx-auto' src={mailIcon} alt='wallet' />
        <p className='font-bold text-2xl text-center'>
          You've subscribed to our newsletter
        </p>
        <button label='close' onClick={nextModal}>
          <p className='text-white bg-red-950 border rounded-lg p-4 font-bold text-lg'>
            Close
          </p>
        </button>
      </div>
    </div>
  );
}
export default CompletedModal;
