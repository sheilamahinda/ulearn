// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CommunicationPage from "./CommunicationPage"; // Import CommunicatePage component
import LoginPage from "./LoginPage";
import Pdash, { Dashboard } from "./pdash"; // Import Pdash component
import Teacher from "./Teacher";
import Conference from "./Conference";
import Pay from "./pay";
import Resources from "./resources";
import SignUp from "./SignUp";
import "./App.css";
import DashboardLayout from "./components/Layout";
import NotFound from "./components/NotFound";
// import ProfileCard from "./ProfileCard"; // Import ProfileCard component
import ContactForm from "./ContactForm"; // Import ContactForm component
import Profiles from "./ProfileCard";
import { Grade } from "./Grade";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />{" "}
        {/* Route for LoginPage */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/communicate"
          element={
            <DashboardLayout>
              <CommunicationPage />
            </DashboardLayout>
          }
        />{" "}
        {/* Add CommunicatePage Route */}
        <Route
          path="/teacher"
          element={
            <DashboardLayout>
              <Teacher />
            </DashboardLayout>
          }
        />
        <Route
          path="/Conference"
          element={
            <DashboardLayout>
              <Conference />
            </DashboardLayout>
          }
        />
        <Route
          path="/pay"
          element={
            <DashboardLayout>
              <Pay />
            </DashboardLayout>
          }
        />
        <Route
          path="/resources"
          element={
            <DashboardLayout>
              <Resources />
            </DashboardLayout>
          }
        />
         <Route
          path="/grades"
          element={
            <DashboardLayout>
              <Grade />
            </DashboardLayout>
          }
        />
        <Route
          path="/SignUp"
          element={
              <SignUp />
          }
        />
        {/* Add Route for ProfileCard */}
        <Route
          path="/profiles"
          element={
            <Profiles />
              // <div className="profile-cards">
              //   <ProfileCard
              //     name="Dave Wood"
              //     image="/std.png" // Replace with actual path
              //     description="Student"
              //   />
              //   <ProfileCard
              //     name="Joe Miller"
              //     image="/tch.png" // Replace with actual path
              //     description="Lecturer"
              //   />
              // </div>
          }
        />
        {/* Add Route for ContactForm */}
        <Route
          path="/contact"
          element={
            <DashboardLayout>
              <ContactForm />
            </DashboardLayout>
          }
        />
        <Route
          path="*"
          element={
            <DashboardLayout>
              <NotFound />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;



