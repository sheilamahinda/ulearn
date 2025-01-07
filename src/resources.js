import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '20px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '18px',
    cursor: 'pointer',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  boxContainer: {
    border: '1px solid #ccc',
    padding: '15px',
    borderRadius: '5px',
  },
  boxText: {
    fontSize: '16px',
  },
};

const DeliveryScreen = () => {
  const navigate = useNavigate();

  const navigateToCreateOrder = () => {
    navigate('/create-order'); // Corrected function call
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Delivery</h1>

      <div style={styles.button} onClick={navigateToCreateOrder}>
        Create New Delivery
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Pending Delivery</h2>
        <div style={styles.boxContainer}>
          <p style={styles.boxText}>You currently have no pending order</p>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Recent Delivery</h2>
        <div style={styles.boxContainer}>
          <p style={styles.boxText}>
            You have not ordered any delivery yet. Would you like to change that today?
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryScreen;







    
   