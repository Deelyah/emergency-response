import { Link, useNavigate } from 'react-router-dom';
import BackIcon from '../assets/BackIcon';
import PasswordIcon from '../assets/PasswordIcon';
import { useState } from 'react';

// import { useMutation } from '@tanstack/react-query';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { fireAuth } from '../firebase';

const Signup = () => {
  //   const mutation = useMutation({
  //     mutationFn: (email, password) => {
  //       return createUserWithEmailAndPassword(fireAuth, email, password);
  //     }
  //   });
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({});
  const [passwordIsText, setPasswordType] = useState(false);
  const userDetails = [
    {
      label: 'Full Name',
      type: 'text',
      name: 'fullName',
      required: true
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      required: true
    },
    {
      label: 'Age',
      type: 'number',
      name: 'age',
      required: true
    },
    {
      label: 'Blood Group',
      type: 'text',
      name: 'bloodGroup',
      required: true
    },
    {
      label: 'Genotype',
      type: 'text',
      name: 'genotype',
      required: true
    },
    {
      label: 'Allergies',
      type: 'text',
      name: 'allergies',
      required: true
    },
    {
      label: 'weight',
      type: 'text',
      name: 'weight',
      required: false
    }
  ];
  const togglePassword = () => {
    setPasswordType(!passwordIsText);
  };
  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        fireAuth,
        formData.email,
        formData.password
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    // navigateTo('/user');
  };
  const goToLogin = () => {
    navigateTo('/');
  };
  return (
    <div className='h-screen overflow-auto mb-10'>
      <div className='p-5'>
        <button
          className='p-3 rounded-lg flex justify-center items-center backdrop-blur-lg border shadow-sm'
          onClick={goToLogin}
        >
          <BackIcon />
        </button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='mb-5'>
          <div className='flex flex-col items-center'>
            <p className='text-primary shadow-sm font-extrabold text-5xl flex items-center justify-center w-16 h-16 border-2 rounded-full mb-3'>
              A
            </p>
          </div>
          <h3 className='text-xl font-semibold mb-2 text-[#313A51] text-center'>
            Hello There!
          </h3>
          <p className='text-center text-sm text-[#313A51]'>
            Signup and get started.
          </p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className='py-5 px-7'>
          {userDetails.map((input, index) => (
            <div key={index} className='mb-5'>
              <label htmlFor='' className='text-[#313A51] mb-1'>
                {input.label}
              </label>
              <input
                type={input.type}
                name={input.name}
                required={input.required}
                className='focus:outline-none w-full py-3 px-3 border-2 rounded-lg text-[#313A51] focus:border-primary'
                onChange={(e) => handleChange(e)}
              />
            </div>
          ))}

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
          <button className='bg-primary text-white w-full mt-10 py-3 rounded-lg'>
            Signup
          </button>
          <p className='text-center mt-5 text-xs font-medium text-[#313A51]'>
            Already a member?{' '}
            <Link to='/' className='underline text-xs text-primary fonr-medium'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
