import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Contacts from './views/Contacts';
import SosScreen from './views/SosScreen';
import Profile from './views/Profile';
import EditProfile from './views/EditProfile';
import ProfileIndex from './components/profile';
import Login from './views/Login';
import Auth from './views/Auth';
import Signup from './views/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [{ index: true, element: <Login /> }, {path: 'signup', element: <Signup />}]
  },
  {
    path: '/user',
    element: <Home />,
    children: [
      { index: true, element: <SosScreen /> },
      { path: 'contacts', element: <Contacts /> },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          { index: true, element: <ProfileIndex /> },
          { path: 'edit', element: <EditProfile /> }
        ]
      }
    ]
  }
]);

export default router;
