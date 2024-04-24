import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileForm = ({ formIsDiabled }) => {
  useEffect(() => {
    setFormData({
      userName: 'Cordelia Ukpai',
      email: 'cordelia@gmail.com',
      location: 'UNN Campus',
      bloodGroup: 'O+',
      genotype: 'AA',
      allergies: 'None'
    });
  }, []);
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    location: '',
    bloodGroup: '',
    genotype: '',
    allergies: ''
  });
  const userDetails = [
    {
      label: 'Username',
      type: 'text',
      defaultData: formData.userName,
      name: 'userName'
    },
    {
      label: 'Email',
      type: 'email',
      defaultData: formData.email,
      name: 'email'
    },
    {
      label: 'Location',
      type: 'text',
      defaultData: formData.location,
      name: 'location'
    },
    {
      label: 'Blood Group',
      type: 'text',
      defaultData: formData.bloodGroup,
      name: 'bloodGroup'
    },
    {
      label: 'Genotype',
      type: 'text',
      defaultData: formData.genotype,
      name: 'genotype'
    },
    {
      label: 'Allergies',
      type: 'text',
      defaultData: formData.allergies,
      name: 'allergies'
    }
  ];
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigateTo('/profile');
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='px-5 mt-12'>
      {userDetails.map((input, index) => (
        <div key={index} className='mb-5'>
          <label htmlFor='' className='text-secondary mb-1'>
            {input.label}
          </label>
          <input
            type={input.type}
            value={input.defaultData}
            disabled={formIsDiabled}
            name={input.name}
            className='focus:outline-none w-full py-3 px-3 border rounded-lg text-[#313A51]'
            onChange={(e) => handleChange(e)}
          />
        </div>
      ))}
      {!formIsDiabled && (
        <button className='bg-primary text-white rounded-lg w-full py-3'>
          Save
        </button>
      )}
    </form>
  );
};

export default ProfileForm;
