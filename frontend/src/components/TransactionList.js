import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await axios.get('/api/transactions');
        setTransactions(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      {transactions.map(transaction => (
        <div key={transaction.id}>
          <p>Sender: {transaction.senderName}</p>
          <p>Recipient: {transaction.recipientName}</p>
          <p>Amount: {transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
