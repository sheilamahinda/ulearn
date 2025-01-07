import React, { useState } from 'react';

const DeliveryHistoryScreen = () => {
  const [pendingOrders, setPendingOrders] = useState([
    {
      id: 1,
      orderNumber: 'MAY23230024',
      pickUpLocation: 'Pick up location',
      destination: 'Destination',
      deliveryPerson: {
        name: 'Moses',
        image: '/gig.png',  // Direct path to the image in the public folder
      },
      deliveryTime: '23/05 12:59pm',
    },
    {
      id: 2,
      orderNumber: 'MAY23230024',
      pickUpLocation: 'Pick up location',
      destination: 'Destination',
      deliveryPerson: {
        name: 'Ibrahim',
        image: '/gig.png',  // Direct path to the image in the public folder
      },
      deliveryTime: '23/05 12:59pm',
    },
    // Add more pending orders as needed
  ]);

  const [completedOrders, setCompletedOrders] = useState([
    {
      id: 1,
      orderNumber: 'MAY23230024',
      pickUpLocation: 'Pick up location',
      destination: 'Destination',
      deliveryPerson: {
        name: 'Jeremiah',
        image: '/gig.png',  // Direct path to the image in the public folder
      },
      deliveryTime: '23/05 12:59pm',
    },
    {
      id: 2,
      orderNumber: 'MAY23230024',
      pickUpLocation: 'Pick up location',
      destination: 'Destination',
      deliveryPerson: {
        name: 'Moses',
        image: '/gig.png',  // Direct path to the image in the public folder
      },
      deliveryTime: '23/05 12:59pm',
    },
    {
      id: 3,
      orderNumber: 'MAY23230024',
      pickUpLocation: 'Pick up location',
      destination: 'Destination',
      deliveryPerson: {
        name: 'Moses',
        image: '/gig.png',  // Direct path to the image in the public folder
      },
      deliveryTime: '23/05 12:59pm',
    },
    // Add more completed orders as needed
  ]);

  const renderOrder = (order) => (
    <div style={styles.orderContainer} key={order.id}>
      <div style={styles.orderInfo}>
        <h4 style={styles.orderNumber}>Order {order.orderNumber}</h4>
        <div style={styles.locationContainer}>
          <p style={styles.locationText}>{order.pickUpLocation}</p>
          <p style={styles.locationText}>{order.destination}</p>
        </div>
      </div>
      <div style={styles.deliveryPersonInfo}>
        <img src={order.deliveryPerson.image} alt={order.deliveryPerson.name} style={styles.deliveryPersonImage} />
        <p style={styles.deliveryPersonName}>{order.deliveryPerson.name}</p>
        <p style={styles.deliveryTime}>{order.deliveryTime}</p>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Pending</h2>
      {pendingOrders.map(renderOrder)}

      <h2 style={styles.sectionTitle}>Completed</h2>
      {completedOrders.map(renderOrder)}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  orderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    borderBottom: '1px solid #ccc',
  },
  orderInfo: {
    flex: 1,
  },
  orderNumber: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  locationText: {
    fontSize: '14px',
    color: 'gray',
    marginLeft: '5px',
  },
  deliveryPersonInfo: {
    textAlign: 'center',
  },
  deliveryPersonImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  deliveryPersonName: {
    fontSize: '14px',
    marginTop: '5px',
  },
  deliveryTime: {
    fontSize: '12px',
    color: 'gray',
  },
};

export default DeliveryHistoryScreen;
