import addContact from '../assets/add-contact.png';

const Contacts = () => {
  const allContacts = [
    { name: 'Uncle Nnanna', phone: '09167631887', id: 1 },
    { name: 'Aunty Mary', phone: '09167631887', id: 2 },
    { name: 'Uncle Frank', phone: '09167631887', id: 3 },
    { name: 'Mum', phone: '09198631887', id: 4 },
    { name: 'Sopulu', phone: '09167631887', id: 5 }
  ];
  const success = (position) => {
    console.log(position.coords);
  };
  const error = (msg) => {
    console.log(msg);
  };
  const checkUp = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };
  return (
    <div>
      <div className='w-full mb-12'>
        <div className='w-full h-16 bg-[#F5F5FA] flex items-center justify-center'>
          <p className='text-secondary font-semibold w-full text-xl px-5 flex'>
            Emergency Circle
            <button
              onClick={checkUp}
              className='text-[#313A51] font-semibold ml-auto text-sm flex items-end border rounded-lg p-2'
            >
              <img src={addContact} alt='img' className='mr-1 mb-1' />
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
              className='bg-[#F5F5FA] my-2 p-3 text-secondary rounded-lg flex items-center'
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contacts;
