import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EyeClose, EyeEmpty } from 'iconoir-react';
import { loginUser } from '../../state/user/userActions';

function SignUpForm() {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    jobRole: '',
    department: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    jobRole: '',
    department: '',
    address: '',
    gender: '',
    signUpError: '',
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

  const handleNext = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must have at least 2 characters';
    }

    if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must have at least 2 characters';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email cannot be empty';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password should include at least 6 characters';
    }


    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password should include at least 6 characters';
    }

    if (formData.jobRole.length < 2) {
      newErrors.jobRole = 'Job role must have at least 2 characters';
    }

    if (formData.department.length < 2) {
      newErrors.department = 'Department must have at least 2 characters';
    }

    if (formData.address.trim() === '') {
      newErrors.address = 'Address cannot be empty';
    }

    if (formData.gender === '') {
      newErrors.gender = 'Please select a gender';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch(loginUser(formData)); // Dummy action call
    }
  };

  return (
    <div className='flex justify-center align-center overflow-x-hidden my-12 md:my-8'>
      <div className='w-fit px-4 py-2 md:py-20 md:px-8'>
        <form onSubmit={handleSubmit} className='bg-[#2D3E40] shadow-lg rounded-xl px-12 pt-6 pb-8 mb-4'>
            <div className='my-4'>
              <h1 className='text-[20px] md:text-[24px] font-bold leading-9 text-[#E4F2E7]'>
                Create a User Account
              </h1>
              <p className='text-xs font-bold leading-9 text-[#E4F2E7]'>
                {step === 1 ? 'Step 1: Personal Information' : 'Step 2: Additional Information'}
              </p>
            </div>
          {step === 1 && (
            <>
              <div className='flex flex-col md:flex-row md:space-x-4'>
            <label className='block my-2'>
                <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                First Name:
                </span>
                <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                  <input
                  className='block w-full border-2 indent-4 py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] sm:text-sm'
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                    required
                  />
                  {errors.firstName && (
                    <div className='text-red-500 text-sm mt-1'>{errors.firstName}</div>
                    )}
                </div>
              </label>

            <label className='block my-2'>
                <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                Last Name:
                </span>
                <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                  <input
                  className='block w-full border-2 indent-4 py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] sm:text-sm'
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  />
              {errors.lastName && (
                <div className='text-red-500 text-sm mt-1'>{errors.lastName}</div>
              )}
              </div>
            </label>
          </div>

          <div className='flex flex-col md:flex-row md:space-x-4'>
            <label className='block my-2'>
                  <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                  Email:
                  </span>
                  <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                    <input
                    className='block w-full border-2 indent-4 py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] sm:text-sm'
                    type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                    required
                    />
                {errors.email && (
                  <div className='text-red-500 text-sm mt-1'>{errors.email}</div>
                )}
                </div>
            </label>
            <label className='block my-2'>
                <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                 Password:
                </span>
                <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                  <input
                  className='block w-full border-2 indent-4 py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] sm:text-sm'
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
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
            </>
          )}
         
          {step === 2 && (
            <>
               
          <div className='flex flex-col md:flex-row md:space-x-4'>
            <label className='block my-2'>
                    <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                    Job Role:
                    </span>
                    <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                      <input
                      className='block w-full border-2 indent-4 py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] sm:text-sm'
                      type='text'
                      id='jobRole'
                      name='jobRole'
                      value={formData.jobRole}
                      onChange={handleChange}
                      required
                      />
                  {errors.jobRole && (
                    <div className='text-red-500 text-sm mt-1'>{errors.jobRole}</div>
                  )}
                  </div>
              </label>
                
              <label className='block my-2'>
                    <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                    Department:
                    </span>
                    <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                      <input
                      className='block w-full border-2 indent-4 py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] sm:text-sm'
                      type='text'
                      id='department'
                      name='department'
                      value={formData.department}
                      onChange={handleChange}
                      required
                      />
                   {errors.department && (
                    <div className='text-red-500 text-sm mt-1'>{errors.department}</div>
                  )}
                  </div>
              </label>
              </div>

          <div className='flex flex-col md:flex-row md:space-x-4'>
          <label className='block my-2'>
                    <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                    Address:
                    </span>
                    <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                      <textarea
                      className='block w-full text-sm border-2 indent-1 py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] sm:text-sm'
                      id='address'
                      name='address'
                      value={formData.address}
                      onChange={handleChange}
                      required
                      />
                      {errors.address && (
                        <div className='text-red-500 text-sm mt-1'>{errors.address}</div>
                      )}
                  </div>
              </label> 
               <label className='block my-2'>
                    <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                    Gender:
                    </span>
                    <div className='mt-1 relative border-[6px] border-[#2D3E40] rounded-lg'>
                      <select
                      className='block w-full text-sm border-2 indent-1 py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] sm:text-sm'
                      id='gender'
                      name='gender'
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      >
                      <option value=''>Select Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='other'>Other</option>
                    </select>
                    {errors.gender && (
                      <div className='text-red-500 text-sm mt-1'>{errors.gender}</div>
                    )}
                  </div>
            </label>   
          </div>
            </>
          )}
          {errors.signUpError && (
            <div className='text-red-500 text-sm mt-1'>{errors.signUpError}</div>
          )}

      <div className='flex justify-center text-center mt-4'>
        {step === 1 && (
          <button
            type='button'
            onClick={handleNext}
            className='flex justify-center py-2 px-8  text-[#E4F2E7] border-[#387373] bg-[#387373] rounded-full hover:text-[#2D3E40]'
          >
            Next
          </button>
        )}

        {step === 2 && (
          <button
            type='submit'
            onClick={handleSubmit}
            className='flex justify-center py-2 px-8  text-[#E4F2E7] border-[#387373] bg-[#387373] rounded-full hover:text-[#2D3E40]'
          >
            Sign Up
          </button>
        )}
      </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
