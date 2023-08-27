import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeClose, EyeEmpty } from 'iconoir-react';
function AdminLoginForm() {
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

  const navigate = useNavigate();

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = formData;
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (email.length < 2) {
      newErrors.email = 'Name must have at least 2 letters';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password should include at least 6 characters';
    }

    if (email.trim() && password.trim() && (email !== 'admin@writersharbor.com' || password !== 'secret')) {
      newErrors.loginError = 'Email or password is incorrect';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate('/admin/dashboard');
    }
  };
  return (
    <div className='flex w-[100%] align-center mx-auto justify-center items-center h-screen bg-cover bg-center' style={{ backgroundImage: 'url("../../assets/background.jpg")' }}>
      <div className='shadow-lg shadow-[#E4F2E7] p-10 bg-[#E4F2E7] bg-opacity-80 rounded-xl'>
      <form
          onSubmit={handleSubmit}
          className='bg-[#2D3E40] shadow-lg rounded-xl px-10 pt-6 pb-8 mb-4 w-full'
        >
          <>
          <div className='align-center flex items-center justify-center pt-2'>
            <Link
            to='/'
            className='align-center flex items-center justify-center pt-2'
          >
            <p className='text-5xl leading-8 style text-white no-underline'>
              writersHarbor
            </p>
          </Link>
        </div>
        <h3 className='text-center font-semibold text-base my-2'>
          Admin Panel
        </h3>

          </>
          <div className='mb-4 relative'>
          <label className='block my-8'>
              <span className='text-[#E4F2E7] text-[10px] md:text-[16px] leading-6 font-normal'>
                Email:
              </span>
              <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                <input
                  className='block w-full border-2 indent-4 py-3 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] sm:text-sm'
                  type='email'
                  name='email'
                  value={formData.email}
                  placeholder='user@email.com'
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className='text-red-500 text-sm mt-1'>{errors.email}</div>
                )}
              </div>
            </label>
            </div>
          <div className='mb-4 relative'>
          <label className='block mb-8'>
              <span className='text-[#E4F2E7] text-[10px] md:text-[16px] leading-6 font-normal'>
                Password:
              </span>
              <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                <input
                  className='block w-full border-2 indent-4 py-3 border-[#1A1A1A] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  placeholder='password'
                  value={formData.password}
                  onChange={handleChange}
                />

                <span
                  className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeClose /> : <EyeEmpty />}
                </span>
              </div>
              {errors.password && (
                <div className='text-red-500 text-sm mt-1'>{errors.password}</div>
              )}
            </label>
           
          </div>

          {errors.loginError && (
            <div className='text-red-500 text-sm my-2'>{errors.loginError}</div>
          )}
          <div className='text-center'>
          <button
            className='cursor-pointer w-full py-3 text-[#E4F2E7] text-sm md:text-base bg-[#387373] rounded-full hover:text-[#2D3E40] hover:bg-white hover:border-2 hover:border-[#1CC578]'
            type='submit'
          >
            Login
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginForm;
