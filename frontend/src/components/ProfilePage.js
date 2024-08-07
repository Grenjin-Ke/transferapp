import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const ProfilePage = () => {
  const { user, setUser } = useAuth();
  const [details, setDetails] = useState(user);

  useEffect(() => {
    setDetails(user);
  }, [user]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/profile', details);
      setUser(details);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={details.username || ''}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={details.password || ''}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfilePage;
