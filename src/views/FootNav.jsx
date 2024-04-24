import InactiveHomeIcon from '../assets/InactiveHomeIcon';
import ActiveHomeIcon from '../assets/ActiveHomeIcon';
import ActiveContactsIcon from '../assets/ActiveContactsIcon';
import InactiveContactsIcon from '../assets/InactiveContactsIcon';
import InactiveProfileIcon from '../assets/InactiveProfileIcon';
import ActiveProfileIcon from '../assets/ActiveProfileIcon';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FootNav = () => {
  const [activeIcon, setActiveIcon] = useState('Home');
  const changeTab = (tab) => {
    setActiveIcon(tab);
  };
  return (
    <footer className='fixed bottom-0 left-0 right-0 p-4 bg-[#F5F5FA]'>
      <ul className='w-full flex justify-center bg-[#F5F5FA] py-3 .5 rounded-2xl border'>
        <li
          className={`basis-1/3 flex justify-center font-medium text-sm ${
            activeIcon === 'Home' ? 'text-secondary' : ' text-[#313A51]'
          }`}
        >
          <Link
            to='/user'
            className='flex flex-col items-center'
            onClick={() => {
              changeTab('Home');
            }}
          >
            <div className='mb-1.5'>
              {activeIcon !== 'Home' && <InactiveHomeIcon />}
              {activeIcon === 'Home' && <ActiveHomeIcon />}
            </div>
            <p>Home</p>
          </Link>
        </li>
        <li
          className={`basis-1/3 flex justify-center font-medium text-sm ${
            activeIcon === 'Contacts' ? 'text-secondary' : ' text-[#313A51]'
          }`}
        >
          <Link
            to='/user/contacts'
            className='flex flex-col items-center'
            onClick={() => {
              changeTab('Contacts');
            }}
          >
            <div className='mb-1.5'>
              {activeIcon !== 'Contacts' && <InactiveContactsIcon />}
              {activeIcon === 'Contacts' && <ActiveContactsIcon />}
            </div>
            <p>Contacts</p>
          </Link>
        </li>
        <li
          className={`basis-1/3 flex justify-center font-medium text-sm ${
            activeIcon === 'Profile' ? 'text-secondary' : ' text-[#313A51]'
          }`}
        >
          <Link
            to='/user/profile'
            className='flex flex-col items-center'
            onClick={() => {
              changeTab('Profile');
            }}
          >
            <div className='mb-1.5'>
              {activeIcon !== 'Profile' && <InactiveProfileIcon />}
              {activeIcon === 'Profile' && <ActiveProfileIcon />}
            </div>
            <p>Profile</p>
          </Link>
        </li>
        <li
          className={`basis-1/3 flex justify-center font-medium text-sm ${
            activeIcon === 'Profile' ? 'text-secondary' : ' text-[#313A51]'
          }`}
        >
          <Link
            to='/signup'
            className='flex flex-col items-center'
            onClick={() => {
              changeTab('signup');
            }}
          >
            <div className='mb-1.5'>
              {activeIcon !== 'Profile' && <InactiveProfileIcon />}
              {activeIcon === 'Profile' && <ActiveProfileIcon />}
            </div>
            <p>Profile</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default FootNav;
