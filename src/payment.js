import React, { useState } from 'react';
import { IoIosArrowBack, IoMdCalendar } from 'react-icons/io'; // Import specific icons

const TransactionHistoryScreen = () => {
  const [transactions] = useState([
    { id: 1, type: 'Airtime', number: '09177666699', amount: -1500, date: '29/05/2023', time: '09:19pm' },
    { id: 2, type: 'Electricity', number: '234509177666899', amount: -6500, date: '29/05/2023', time: '04:59pm' },
    { id: 3, type: 'Airtime', number: '09177666699', amount: -1500, date: '29/05/2023', time: '12:59pm' },
    { id: 4, type: 'Deposit', number: '', amount: 30000, date: '29/05/2023', time: '09:00am' },
    { id: 5, type: 'GOTV', number: '2236677666899', amount: -3500, date: '29/05/2023', time: '12:59pm' },
    { id: 6, type: 'Airtime', number: '09177666699', amount: -1500, date: '26/05/2023', time: '09:19pm' },
    { id: 7, type: 'Airtime', number: '09177666699', amount: -1500, date: '26/05/2023', time: '09:19pm' },
  ]);

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleFromDateChange = (event) => setFromDate(event.target.value);
  const handleToDateChange = (event) => setToDate(event.target.value);

  const renderTransaction = (transaction) => (
    <div key={transaction.id} style={styles.transactionItem}>
      <div style={styles.transactionDetails}>
        <p style={styles.transactionType}>{transaction.type}</p>
        <p style={styles.transactionNumber}>{transaction.number}</p>
        <p style={styles.transactionAmount}>{transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}</p>
      </div>
      <div style={styles.transactionTime}>
        <p style={styles.transactionDate}>{transaction.date}</p>
        <p style={styles.transactionTimeText}>{transaction.time}</p>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backButton}>
          <IoIosArrowBack size={24} color="#000" /> {/* Updated icon */}
        </button>
        <h2 style={styles.headerText}>Transaction History</h2>
      </div>

      <div style={styles.dateRange}>
        <div style={styles.dateInputContainer}>
          <input
            type="date"
            style={styles.dateInput}
            value={fromDate}
            onChange={handleFromDateChange}
          />
          <IoMdCalendar size={20} color="#000" /> {/* Updated icon */}
        </div>
        <div style={styles.dateInputContainer}>
          <input
            type="date"
            style={styles.dateInput}
            value={toDate}
            onChange={handleToDateChange}
          />
          <IoMdCalendar size={20} color="#000" /> {/* Updated icon */}
        </div>
      </div>

      <div style={styles.transactionList}>
        {transactions.map((transaction) => renderTransaction(transaction))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  backButton: {
    marginRight: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  headerText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  dateRange: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  dateInputContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '5px',
  },
  dateInput: {
    flex: '1',
    marginRight: '5px',
  },
  transactionItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  transactionDetails: {
    flex: '1',
  },
  transactionType: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  transactionNumber: {
    fontSize: '14px',
    color: 'gray',
  },
  transactionAmount: {
    fontSize: '16px',
    color: 'green',
  },
  transactionTime: {
    textAlign: 'right',
  },
  transactionDate: {
    fontSize: '12px',
    color: 'gray',
  },
  transactionTimeText: {
    fontSize: '12px',
    color: 'gray',
  },
  transactionList: {
    marginTop: '20px',
  },
};

export default TransactionHistoryScreen;
