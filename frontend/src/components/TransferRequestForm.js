import React, { useState } from 'react';
import axios from 'axios';

const TransferRequestForm = () => {
  const [form, setForm] = useState({
    senderName: '',
    senderEmail: '',
    senderAddress: '',
    senderMobile: '',
    recipientName: '',
    recipientAddress: '',
    amount: '',
    currency: '',
    nationality: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/transactions/initiate', form);
      // Handle success notification or redirect
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="senderName"
        value={form.senderName}
        onChange={handleChange}
        placeholder="Sender Name"
      />
      <input
        type="email"
        name="senderEmail"
        value={form.senderEmail}
        onChange={handleChange}
        placeholder="Sender Email"
      />
      <input
        type="text"
        name="senderAddress"
        value={form.senderAddress}
        onChange={handleChange}
        placeholder="Sender Address"
      />
      <input
        type="text"
        name="senderMobile"
        value={form.senderMobile}
        onChange={handleChange}
        placeholder="Sender Mobile"
      />
      <input
        type="text"
        name="recipientName"
        value={form.recipientName}
        onChange={handleChange}
        placeholder="Recipient Name"
      />
      <input
        type="text"
        name="recipientAddress"
        value={form.recipientAddress}
        onChange={handleChange}
        placeholder="Recipient Address"
      />
      <input
        type="text"
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
      <input
        type="text"
        name="currency"
        value={form.currency}
        onChange={handleChange}
        placeholder="Currency"
      />
      <input
        type="text"
        name="nationality"
        value={form.nationality}
        onChange={handleChange}
        placeholder="Nationality"
      />
      <button type="submit">Initiate Transfer</button>
    </form>
  );
};

export default TransferRequestForm;
