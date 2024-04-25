import { useState } from 'react';
import addContactIcon from '../assets/add-contact.png';
import AddContact from '../components/AddContact';
import DeleteIcon from '../assets/DeleteIcon';

const Contacts = () => {
  const [allContacts, setAllContacts] = useState([
    { name: 'Sopulu', phone: '09167631887', id: 1 },
    { name: 'Aunty UC', phone: '09167631887', id: 2 },
    { name: '2nd S', phone: '09167631887', id: 3 },
    { name: 'Mum', phone: '09198631887', id: 4 },
    { name: 'Uncle Nnanna', phone: '09167631887', id: 5 }
  ]);
  //   const success = (position) => {
  //     console.log(position.coords);
  //   };
  //   const error = (msg) => {
  //     console.log(msg);
  //   };
  //   const checkUp = () => {
  //     navigator.geolocation.getCurrentPosition(success, error);
  //   };
  const [openContactModal, setContactModalIsVisible] = useState(false);
  const toggleContactModal = (val) => {
    setContactModalIsVisible(val);
  };
  const saveContact = (formData) => {
    setAllContacts((prevData) => {
      return [...prevData, formData];
    });
  };
  const deleteContact = (id) => {
    setAllContacts(() => allContacts.filter((contact) => contact.id !== id));
  };
  return (
    <div>
      <div className='w-full mb-12'>
        <div className='w-full h-16 bg-[#F5F5FA] flex items-center justify-center border-b shadow-sm'>
          <p className='text-secondary font-semibold w-full text-xl px-5 flex'>
            Emergency Circle
            <button
              onClick={() => toggleContactModal(true)}
              className='text-[#313A51] font-semibold ml-auto text-sm flex items-end border rounded-lg p-2'
            >
              <img src={addContactIcon} alt='img' className='mr-1 mb-1' />
              <p>Add</p>
            </button>
          </p>
        </div>
      </div>

      {!allContacts.length ? (
        <div>No contacts found</div>
      ) : (
        <ul className='px-4'>
          {allContacts.map((contact) => (
            <li
              key={contact.id}
              className='bg-[#F5F5FA] border shadow-sm my-2 p-3 text-secondary rounded-lg flex items-center'
            >
              <div className='w-12 h-12 rounded-full flex justify-center items-center mr-2 border bg-primary text-xl text-white font-semibold'>
                {contact.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p>{contact.name}</p>
                <p className='text-xs text-[#313A51] font-semibold'>
                  {contact.phone}
                </p>
              </div>
              <div className='ml-auto'>
                <button
                  className='p-1.5'
                  onClick={() => deleteContact(contact.id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {openContactModal && (
        <AddContact
          closeModal={() => toggleContactModal(false)}
          saveContact={saveContact}
        />
      )}
    </div>
  );
};

export default Contacts;
