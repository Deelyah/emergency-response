import { Link, useLocation } from 'react-router-dom';
import LogoutIcon from '../assets/LogoutIcon';
import ProfileIcon from '../assets/ProfileIcon';
import ContactsIcon from '../assets/ContactsIcon';
import HomeIcon from '../assets/HomeIcon';
import { useState } from 'react';
import ConfirmLogout from '../components/ConfirmLogout';

const FootNav = () => {
  const { pathname } = useLocation();
  const [showLogotModal, setShowLogoutModal] = useState(false);
  const toggleLogoutPrompt = (val) => {
    setShowLogoutModal(val);
  };
  return (
    <footer className='fixed bottom-0 left-0 right-0 p-4 bg-[#F5F5FA]'>
      <ul className='w-full flex justify-center bg-[#F5F5FA] py-3 .5 rounded-2xl border'>
        <li
          className={`basis-1/3 flex justify-center font-medium text-sm ${
            pathname === '/user' ? 'text-secondary' : ' text-[#313A51]'
          }`}
        >
          <Link to='/user' className='flex flex-col items-center'>
            <div className='mb-1.5'>
              <HomeIcon color={pathname === '/user' ? '#AD404D' : '#313A51'} />
            </div>
            <p>Home</p>
          </Link>
        </li>
        <li
          className={`basis-1/3 flex justify-center font-medium text-sm ${
            pathname.includes('contacts') ? 'text-secondary' : ' text-[#313A51]'
          }`}
        >
          <Link to='/user/contacts' className='flex flex-col items-center'>
            <div className='mb-1.5'>
              <ContactsIcon
                color={pathname.includes('contacts') ? '#AD404D' : '#313A51'}
              />
            </div>
            <p>Contacts</p>
          </Link>
        </li>
        <li
          className={`basis-1/3 flex justify-center font-medium text-sm ${
            pathname.includes('profile') ? 'text-secondary' : ' text-[#313A51]'
          }`}
        >
          <Link to='/user/profile' className='flex flex-col items-center'>
            <div className='mb-1.5'>
              <ProfileIcon
                color={pathname.includes('profile') ? '#AD404D' : '#313A51'}
              />
            </div>
            <p>Profile</p>
          </Link>
        </li>
        <li
          className={`basis-1/3 flex justify-center font-medium text-sm ${
            pathname === '' ? 'text-secondary' : ' text-[#313A51]'
          }`}
        >
          <button
            className='flex flex-col items-center'
            onClick={() => toggleLogoutPrompt(true)}
          >
            <div className='mb-1.5'>
              <LogoutIcon color={pathname === '' ? '#AD404D' : '#313A51'} />
            </div>
            <p>Log out</p>
          </button>
        </li>
      </ul>
      {showLogotModal && (
        <ConfirmLogout closeModal={() => toggleLogoutPrompt(false)} />
      )}
    </footer>
  );
};

export default FootNav;
