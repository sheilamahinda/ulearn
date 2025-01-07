import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const CreateOrderScreen = () => {
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: '',
    destination: '',
    date: '',
  });

  const handleChange = (field, value) => {
    setOrderDetails({ ...orderDetails, [field]: value });
  };

  const navigate = useNavigate(); // Get navigation function

  const handleSubmit = () => {
    // Add form submission logic here (optional)
    console.log('Order Created:', orderDetails);

    // Navigate to SuccessScreen after form submission
    navigate('/success'); // Replace '/success' with actual success route path
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create New Order</h1>

      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Order Number:</label>
          <input
            type="text"
            value={orderDetails.orderNumber}
            onChange={(e) => handleChange('orderNumber', e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Destination:</label>
          <input
            type="text"
            value={orderDetails.destination}
            onChange={(e) => handleChange('destination', e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            value={orderDetails.date}
            onChange={(e) => handleChange('date', e.target.value)}
            style={styles.input}
          />
        </div>

        <button type="button" onClick={handleSubmit} style={styles.button}>
          Submit Order
        </button>
      </form>
    </div>
  );
};

const styles = {
  // ... your styles here
};

export default CreateOrderScreen;