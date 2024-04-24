import { Outlet } from 'react-router-dom';
import '../index.css';
import FootNav from './FootNav';

const Home = () => {
  return (
    <div>
      <Outlet />
      <FootNav />
    </div>
  );
};

export default Home;
