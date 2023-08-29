import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EyeClose, EyeEmpty } from 'iconoir-react';
import { loginUser } from '../../state/user/userActions';
import { BASE_URL, CREATE_USER } from '../../constants/endpoints.constant';
import { useFetch } from '../../hooks/useFetch';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

function SignUpForm() {
  const dispatch = useDispatch();
  const { sendRequest, isLoading } = useFetch();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    gender: '',
    job_role: '',
    department: '',
    address: '',
    role: '',
  });

  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    job_role: '',
    department: '',
    address: '',
    role: '',
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

    if (formData.first_name.length < 2) {
      newErrors.first_name = 'First name must have at least 2 characters';
    }

    if (formData.last_name.length < 2) {
      newErrors.last_name = 'Last name must have at least 2 characters';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email cannot be empty';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password should include at least 6 characters';
    }

    if (formData.role.trim() === '') {
      newErrors.role = 'Role cannot be empty';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1);
    }
  };

  const submitDetails = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}${CREATE_USER}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // User creation successful
        toast.success('User created successfully!');
        const token = response.data.token;
          setItem('token', token);

      } else {
        toast.error('Failed to create user.');
      }
    } catch (error) {
      // Handle errors
      console.error('Error creating user:', error);
      toast.error('An error occurred while creating the user.');
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

    if (formData.job_role.length < 2) {
      newErrors.job_role = 'Job role must have at least 2 characters';
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
      dispatch(loginUser(formData));
      submitDetails()// Dummy action call
    }
  };

  return (
    <div className='w-[80vw] md:w-[40vw] my-12 md:my-8'>
      <div className='mx-auto px-4 py-2 md:py-20 md:px-8'>
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
              <div className=''>
              <label className='block my-2'>
                  <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                    Role:
                  </span>
                  <div className='mt-1'>
                    <select
                      className='block w-full indent-1 text-xs md:text-sm border-2 py-1 md:py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2]'
                      id='role'
                      name='role'
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value=''>Select Role</option>
                      <option value='male'>Admin</option>
                      <option value='female'>Employee</option>
                    </select>
                    {errors.role && (
                      <div className='text-red-500 text-sm mt-1'>{errors.role}</div>
                    )}
                  </div>
                </label>
              </div>
              <div className='flex flex-col md:flex-row md:space-x-2'>
                <label className='block my-2 w-full'>
                  <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                  First Name:
                  </span>
                  <div className='mt-1 w-full relative border-[6px] border-[#2D3E40] rounded-lg'>
                    <input
                    className='block border-2 w-full indent-1 md:indent-4 py-1 md:py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] text-xs md:text-sm'
                    type='text'
                    id='first_name'
                    name='first_name'
                    value={formData.first_name}
                    onChange={handleChange}
                      required
                    />
                    {errors.first_name && (
                      <div className='text-red-500 text-sm mt-1'>{errors.first_name}</div>
                      )}
                  </div>
                </label>

                <label className='block my-2 w-full'>
                    <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                    Last Name:
                    </span>
                    <div className='mt-1 w-full relative border-[6px] border-[#2D3E40] rounded-lg'>
                      <input
                      className='block w-full border-2 indent-1 md:indent-4 py-1 md:py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] text-xs md:text-sm'
                      type='text'
                      id='last_name'
                      name='last_name'
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      />
                  {errors.last_name && (
                    <div className='text-red-500 text-sm mt-1'>{errors.last_name}</div>
                  )}
                  </div>
                </label>
              </div>

          <div className='flex flex-col md:flex-row md:space-x-2'>
            <label className='block my-2 w-full'>
                  <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                  Email:
                  </span>
                  <div className='mt-1 w-full relative border-[6px] border-[#2D3E40] rounded-lg'>
                    <input
                    className='block border-2 w-full indent-1 md:indent-4 py-1 md:py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] text-xs md:text-sm'
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
            <label className='block my-2 w-full'>
                <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                 Password:
                </span>
                <div className='mt-1 w-full relative border-[6px] border-[#2D3E40] rounded-lg'>
                  <input
                  className='block border-2 w-full indent-1 md:indent-4 py-1 md:py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] text-xs md:text-sm'
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  />
                 <span
                    className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-xs md:text-sm'
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
            <label className='block my-2 w-full'>
                    <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                    Job Role:
                    </span>
                    <div className='mt-1 w-full relative border-[6px] border-[#2D3E40] rounded-lg'>
                      <input
                      className='block border-2 w-full indent-1 md:indent-4 py-1 md:py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] text-xs md:text-sm'
                      type='text'
                      id='job_role'
                      name='job_role'
                      value={formData.job_role}
                      onChange={handleChange}
                      required
                      />
                  {errors.job_role && (
                    <div className='text-red-500 text-sm mt-1'>{errors.job_role}</div>
                  )}
                  </div>
              </label>
                
              <label className='block my-2 w-full'>
                    <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                    Department:
                    </span>
                    <div className='mt-1 w-full relative border-[6px] border-[#2D3E40] rounded-lg'>
                      <input
                      className='block border-2 w-full indent-1 md:indent-4 py-1 md:py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] text-xs md:text-sm'
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

          <div className='flex flex-col md:flex-row md:space-x-4 w-full'>
          <label className='block my-2 w-full'>
                    <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                    Address:
                    </span>
                    <div className='mt-1 w-full relative border-[6px] border-[#2D3E40] rounded-lg'>
                      <textarea
                      className='block border-2 w-full indent-1 py-1 md:py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] text-xs md:text-sm'
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
               <label className='block my-2 w-full'>
                    <span className='text-[#E4F2E7] text-sm leading-6 font-normal'>
                    Gender:
                    </span>
                    <div className='mt-1 w-full relative border-[6px] border-[#2D3E40] rounded-lg'>
                      <select
                      className='block w-full border-2 indent-1 py-1 md:py-2 border-[#1A1A1A] rounded-md shadow-sm focus:ring-[#FEF0F2] focus:border-[#FEF0F2] text-xs md:text-sm'
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
            className='flex justify-center py-2 px-8 text-sm md:text-base text-[#E4F2E7] border-[#387373] bg-[#387373] rounded-full hover:text-[#2D3E40]'
          >
            Next
          </button>
        )}

        {step === 2 && (
          <button
            type='submit'
            onClick={handleSubmit}
            className='flex justify-center py-2 px-8 text-sm md:text-base text-[#E4F2E7] border-[#387373] bg-[#387373] rounded-full hover:text-[#2D3E40]'
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
