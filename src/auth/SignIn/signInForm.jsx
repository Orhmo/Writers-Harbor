import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EyeClose, EyeEmpty } from 'iconoir-react';
import { loginUser } from '../../state/user/userActions';
import { BASE_URL, SIGN_IN } from '../../constants/endpoints.constant';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function SignInForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    loginError: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = formData;
    const newErrors = {};

    if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (password.length < 5) {
      newErrors.password = 'Password should include at least 5 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(`${BASE_URL}${SIGN_IN}`, { email, password });
        if (response.status === 200) {
          toast.success('Welcome to writersHarbor');
          const user = response.data; 
          dispatch(loginUser(user));
        } else {
          toast.error('Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
        toast.error('An error occurred during login');
      }
    }
  };

  return (
    <div className='w-[80vw] md:w-[40vw]'>
    <div className='px-2 my-auto md:py-20 md:px-8'> 
        <form
          onSubmit={handleSubmit}
          className='bg-[#2D3E40] shadow-lg rounded-xl px-6 md:px-10 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <div className='my-4'>
              <h1 className='text-[20px] md:text-[24px] font-bold leading-9 text-[#E4F2E7]'>
                Login to your dashboard
              </h1>
              <p className='text-[#97A6A0] text-[12px] md:text-[16px] leading-6'>
                Provide details to login to your account{' '}
              </p>
            </div>

            <label className='block my-4 md:my-8'>
              <span className='text-[#E4F2E7] text-[12px] font-semibold md:text-[16px] leading-6 md:font-normal'>
                Email
              </span>
              <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                <input
                  className='block w-full border-2 text-xs indent-2 py-1 md:py-3 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] md:text-sm'
                  type='email'
                  name='email'
                  value={formData.email}
                  placeholder='user@email.com'
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className='text-red-500 text-sm mt-1'>{errors.email}</div>
                )}
              </div>
            </label>

            <label className='block mb-8'>
              <span className='text-[#E4F2E7] text-[12px] font-semibold md:text-[16px] leading-6 md:font-normal'>
                Password
              </span>
              <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                <input
                  className='block w-full border-2 text-xs indent-2 py-1 md:py-3 border-[#1A1A1A] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 md:text-sm'
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <span
                  className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-sm'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeClose /> : <EyeEmpty />}
                </span>
              </div>
              {errors.password && (
                <div className='text-red-500 text-sm mt-1'>{errors.password}</div>
              )}
            </label>

            {errors.loginError && (
              <div className='text-red-500 text-sm mt-1'>{errors.loginError}</div>
            )}
          </div>

          <button
            className='cursor-pointer w-full py-3 text-[#E4F2E7] text-sm md:text-base bg-[#387373] rounded-full hover:text-[#2D3E40] hover:bg-white hover:border-2 hover:border-[#1CC578]'
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
