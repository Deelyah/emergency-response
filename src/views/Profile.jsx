import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
// import '../App.css';
const Profile = () => {
  useEffect(() => {
    const { data } = JSON.parse(localStorage.getItem('profile'));
    console.log(data);
    setProfile(data);
  }, []);
  const location = useLocation();
  const { pathname } = location;
  const isEditing = pathname.includes('edit');
  const [profile, setProfile] = useState({});
  return (
    <div className='h-[88vh] overflow-auto'>
      <div className='w-full mb-12'>
        <div className='w-full h-16 bg-[#F5F5FA] flex items-center justify-center border-b shadow-sm'>
          <p className='text-secondary font-semibold w-full text-xl px-5 flex items-center'>
            {isEditing ? 'Edit Profile' : 'Profile'}
            {isEditing ? (
              <Link
                to='/user/profile'
                className='text-[#313A51] font-semibold ml-auto text-sm p-2 rounded-lg border'
              >
                Cancel
              </Link>
            ) : (
              <Link
                to='/user/profile/edit'
                className='text-[#313A51] font-semibold ml-auto text-sm p-2 rounded-lg border'
              >
                Edit
              </Link>
            )}
          </p>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Profile;
