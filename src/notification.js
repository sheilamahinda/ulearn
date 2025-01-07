import React, { useState } from "react";

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "rideAccepted",
      message: "Your Ride Request has been accepted by Oluwatobi",
      time: "12:59pm Today",
      icon: "fa-motorcycle",
    },
    {
      id: 2,
      type: "orderCompleted",
      message: "Your order MAY2023230024 has been completed",
      time: "12:59pm Today",
      icon: "fa-check-circle",
    },
    {
      id: 3,
      type: "deposit",
      message: "N5,000 has been successfully deposited into your wallet.",
      time: "12:59pm Today",
      icon: "fa-wallet",
    },
    {
      id: 4,
      type: "rideCancelled",
      message: "Your Ride Request has been cancelled by Oluwatobi",
      time: "12:59pm Today",
      icon: "fa-times-circle",
    },
    {
      id: 5,
      type: "recharge",
      message: "You have successfully recharged 09289483903 with N2,000",
      time: "12:59pm Today",
      icon: "fa-mobile-alt",
    },
    {
      id: 6,
      type: "billPayment",
      message:
        "Your electricity bill payment of N3,500 has been credited to meter number 7493399209303988 successfully",
      time: "12:59pm Yesterday",
      icon: "fa-bolt",
    },
  ]);

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  };

  const backButtonStyle = {
    marginRight: "10px",
    fontSize: "20px",
    cursor: "pointer",
  };

  const headerTextStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const sectionHeaderStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "15px 0",
  };

  const notificationItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
  };

  const iconContainerStyle = {
    fontSize: "24px",
    marginRight: "15px",
    color: "#007bff",
  };

  const notificationContentStyle = {
    flex: 1,
  };

  const notificationMessageStyle = {
    fontSize: "16px",
    margin: "0",
  };

  const notificationTimeStyle = {
    fontSize: "12px",
    color: "gray",
    margin: "5px 0 0",
  };

  const renderNotification = (notification) => {
    return (
      <div style={notificationItemStyle} key={notification.id}>
        <div style={iconContainerStyle}>
          <i className={`fas ${notification.icon}`} aria-hidden="true"></i>
        </div>
        <div style={notificationContentStyle}>
          <p style={notificationMessageStyle}>{notification.message}</p>
          <p style={notificationTimeStyle}>{notification.time}</p>
        </div>
      </div>
    );
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <i className="fas fa-arrow-left" style={backButtonStyle}></i>
        <h1 style={headerTextStyle}>Notification</h1>
      </header>

      <section>
        <h2 style={sectionHeaderStyle}>This Week</h2>
        <div>
          {notifications.map((notification) => renderNotification(notification))}
        </div>
      </section>
    </div>
  );
};

export default NotificationScreen;
