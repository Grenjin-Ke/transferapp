import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import NotificationIcon from './NotificationIcon';

const Navbar = () => {
  const { setUser } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    await axios.post('/api/auth/logout');
    setUser(null);
    history.push('/login');
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <NotificationIcon />
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
