import CloseIcon from '../assets/CloseIcon';
import { useState } from 'react';

const AddContact = ({ closeModal, saveContact }) => {
  const [formData, setFormData] = useState({});
  const [id, setId] = useState(Math.round(Math.random() * 50));
  const handleChange = (e) => {
    setId(Math.round(Math.random() * 50));
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value, id: id };
    });
  };
  const handleSubmit = (e) => {
    // try {

    // } catch (error) {

    // }
    e.preventDefault();
    saveContact(formData);
    closeModal();
  };
  return (
    <div className='fixed inset-0 bg-[#00000046] backdrop-blur-sm z-10 flex justify-center items-center px-5'>
      <div className='rounded-lg bg-white w-fit px-5 pt-3 pb-10 shadow'>
        <div className=''>
          <div className='mb-8 flex'>
            <button
              className='p-2 rounded-lg flex justify-center items-center backdrop-blur-lg shadow-sm ml-auto'
              onClick={closeModal}
            >
              <CloseIcon />
            </button>
          </div>
          <h2 className='text-xl font-semibold mb-2 text-[#313A51] text-center'>
            Add New Contact
          </h2>
          <form onSubmit={(e) => handleSubmit(e)} className='py-5 px-3'>
            <div className='mb-4'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Dad'
                className='rounded-lg border border-gray-300 py-2 pl-3 focus:border-primary text-[#313A51] w-full focus:outline-none px-3 focus:bg-transparent'
                onChange={(e) => handleChange(e)}
              />
            </div>

            <label htmlFor='phone'>Phone</label>
            <input
              type='number'
              id='phone'
              name='phone'
              placeholder='09012345678'
              className='rounded-lg border border-gray-300 py-2 pl-3 focus:border-primary text-[#313A51] w-full focus:outline-none px-3 focus:bg-transparent'
              onChange={(e) => handleChange(e)}
            />
            <button className='bg-primary text-white w-full mt-10 py-3 rounded-lg'>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
