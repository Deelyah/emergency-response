import { Link, useNavigate } from 'react-router-dom';
import BackIcon from '../assets/BackIcon';
import MailIcon from '../assets/MailIcon';
import PasswordIcon from '../assets/PasswordIcon';
import { useState } from 'react';

const Login = () => {
  const navigateTo = useNavigate();
  const [passwordIsText, setPasswordType] = useState(false);
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  const togglePassword = () => {
    setPasswordType(!passwordIsText);
  };
  const handleSubmit = (e) => {
    // try {

    // } catch (error) {

    // }
    e.preventDefault();
    console.log(formData);
    navigateTo('/user');
  };
  return (
    <div className=''>
      <div className='p-5'>
        <button className='p-3 rounded-lg flex justify-center items-center backdrop-blur-lg border shadow-sm'>
          <BackIcon />
        </button>
      </div>
      <div className='h-[80vh] flex flex-col items-center justify-center'>
        <div className='mb-5'>
          <div className='flex flex-col items-center'>
            <p className='text-primary shadow-sm font-extrabold text-5xl flex items-center justify-center w-16 h-16 border-2 rounded-full mb-3'>
              A
            </p>
          </div>
          <h3 className='text-xl font-semibold mb-2 text-[#313A51] text-center'>
            Welcome Back!
          </h3>
          <p className='text-center text-sm text-[#313A51]'>
            Please Login to continue
          </p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className='py-5 px-7'>
          <div className=''>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              required
              placeholder='example@email.com'
              className='rounded-lg border-2 border-gray-300 py-2 mb-3 text-[#313A51] w-full focus:outline-none px-3'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className=''>
            <label htmlFor='password'>Password</label>
            <div className='flex items-center rounded-lg border-2 border-gray-300 py-2 pl-3'>
              <input
                type={passwordIsText ? 'text' : 'password'}
                id='password'
                name='password'
                required
                placeholder='Password'
                className='text-[#313A51] w-full focus:outline-none px-3 focus:bg-transparent'
                onChange={(e) => handleChange(e)}
              />
              <div className='ml-auto pr-2' onClick={togglePassword}>
                <PasswordIcon />
              </div>
            </div>
          </div>
          <div className='flex mt-2 items-center'>
            <div>
              <input
                type='checkbox'
                name='remember'
                id='remember'
                className='text-xs'
                onChange={(e) => handleChange(e)}
              />
              <label
                htmlFor='remember'
                className='text-xs ml-1 font-medium text-[#313A51]'
              >
                Remember me
              </label>
            </div>

            <Link
              to='/'
              className='font-medium text-xs ml-auto text-right text-primary'
            >
              Forgot password
            </Link>
          </div>
          <button className='bg-primary text-white w-full mt-10 py-3 rounded-lg'>
            Login
          </button>
          <p className='text-center mt-5 text-xs font-medium text-[#313A51]'>
            Not a member?{' '}
            <Link
              to='/signup'
              className='underline text-xs text-primary fonr-medium'
            >
              Sign Up
            </Link>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
