const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.getProfile = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findByUsername(decoded.username);
  res.status(200).json(user);
};

exports.updateProfile = async (req, res) => {
  const { id } = req.user;
  await User.updateProfile(id, req.body);
  res.status(200).json({ message: 'Profile updated successfully' });
};
