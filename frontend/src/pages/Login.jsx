import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const url = currentState === 'Login' 
      ? `${backendUrl}/api/user/login` 
      : `${backendUrl}/api/user/register`;
      
    const payload = currentState === 'Login'
      ? { email: data.email, password: data.password }
      : data;

    try {
      const response = await axios.post(url, payload);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        toast.success(currentState === 'Login' ? "Logged in successfully!" : "Account created successfully!");
        navigate('/'); // Navigate to home page on success
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      // It's better to show the backend's message if available
      const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }

  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'Sign Up' && (
        <input 
          name='name' 
          onChange={onChangeHandler} 
          value={data.name} 
          type="text" 
          className='w-full px-3 py-2 border border-gray-800' 
          placeholder='Name' 
          required 
        />
      )}
      
      <input 
        name='email' 
        onChange={onChangeHandler} 
        value={data.email} 
        type="email" 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='Email' 
        required 
      />
      <input 
        name='password' 
        onChange={onChangeHandler} 
        value={data.password} 
        type="password" 
        className='w-full px-3 py-2 border border-gray-800' 
        placeholder='Password' 
        required 
      />
      
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forgot Your Password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        )}
      </div>
      
      <button type="submit" className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState}
      </button>
    </form>
  );
};

export default Login;