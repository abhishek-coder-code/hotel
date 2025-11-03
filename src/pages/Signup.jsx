import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { IoLockClosedOutline } from 'react-icons/io5'
import { Link } from 'react-router'


const Signup = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("formData", formData)

  }



  return (
    <div className='h-screen flex justify-center items-center bg-gray-100 '>
      <form onSubmit={submitHandler} className='max-w-96 w-full mx-auto text-center  border  border-gray-300 rounded-2xl px-8 bg-white shadow'>
        <h1 className='text-heaading text-3xl mt-10 font-medium cursor-pointer hover:text-indigo-500'>SignUp</h1>
        <p className='text-paragraph text-gray-500 text-sm mt-2'>Please signUp to continue</p>


         <div className='flex items-center mt-10 w-full bg-white border border-gray-300 h-12 rounded-full overflow-hidden pl-6 gap-2'>
          <CiUser className='w-5 h-5'/>
          <input type='text' placeholder='write name here...' name='name' value={formData.name}
            onChange={onChangeHandler}
            className='bg-transparent text-gray-500 placeholder-gray-500 outline-none text-medium w-full h-full'>
          </input>
        </div>

        <div className='flex items-center mt-4 w-full bg-white border border-gray-300 h-12 rounded-full overflow-hidden pl-6 gap-2'>
          <AiOutlineMail className='w-5 h-5' />
          <input type='email' placeholder='Email id' name='email' value={formData.email}
            onChange={onChangeHandler}
            className='bg-transparent text-gray-500 placeholder-gray-500 outline-none text-medium w-full h-full'>
          </input>
        </div>



        <div className='flex items-center mt-4 w-full border border-gray-300 bg-white h-12 rounded-full overflow-hidden pl-6 gap-2'>
          <IoLockClosedOutline className='w-5 h-5' />
          <input type="password" placeholder='password' name='password' value={formData.password}
            onChange={onChangeHandler}
            className='bg-transparent text-gray-500 placeholder-gray-500 outline-none text-medium w-full h-full'
          />
        </div>

        <div className='mt-4 text-left text-indigo-500'>
          <a href="#" className='text-sm'>Forgot Password?</a>
        </div>

        <button type='submit'
          className='w-full mt-2 h-11 rounded-full border text-white bg-indigo-500'>
          Signup
        </button>

        <p className='text-gray-500 text-sm mt-5 mb-11'>
          Already have an account?{' '}
          <Link to={'/login'} className=' text-indigo-500'>Login</Link>
        </p>





      </form>

    </div>
  )
}

export default Signup
