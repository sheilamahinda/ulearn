import React from 'react';

const SuccessScreen = () => {
  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#fff',
    },
    icon: {
      fontSize: '100px',
      color: '#4263eb',
      marginBottom: '40px',
    },
    message: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#4263eb',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '15px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#3451b0',
    },
  };

  return (
    <div style={styles.container}>
      {/* Placeholder for the icon */}
      <div style={styles.icon}>
        <span role="img" aria-label="package">
          📦
        </span>
      </div>
      <p style={styles.message}>You have successfully placed your delivery order</p>
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        View Details
      </button>
    </div>
  );
};

export default SuccessScreen;
