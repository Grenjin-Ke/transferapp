const express = require('express');
const { initiateTransfer, getTransactions, updateTransaction } = require('../controllers/transactionController');

const router = express.Router();

router.post('/initiate', initiateTransfer);
router.get('/', getTransactions);
router.put('/update', updateTransaction);

module.exports = router;
