const pool = require('../config/db');

class Transaction {
  static async create(transaction) {
    const query = 'INSERT INTO transactions SET ?';
    await pool.query(query, transaction);
  }

  static async findAll() {
    const query = 'SELECT * FROM transactions';
    return await pool.query(query);
  }

  static async updateStatus(id, status) {
    const query = 'UPDATE transactions SET status = ? WHERE id = ?';
    await pool.query(query, [status, id]);
  }
}

module.exports = Transaction;
