const Transaction = require('../models/Transaction');
const Notification = require('../utils/notifications');

exports.initiateTransfer = async (req, res) => {
  await Transaction.create(req.body);
  Notification.notifyEmployees(req.body);
  res.status(201).json({ message: 'Transfer initiated successfully' });
};

exports.getTransactions = async (req, res) => {
  const transactions = await Transaction.findAll();
  res.status(200).json(transactions);
};

exports.updateTransaction = async (req, res) => {
  const { id, status } = req.body;
  await Transaction.updateStatus(id, status);
  Notification.notifyExecutives(id);
  res.status(200).json({ message: 'Transaction updated successfully' });
};
