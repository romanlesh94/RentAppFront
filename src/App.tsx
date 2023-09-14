import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Enlist from "./pages/Enlist/Enlist";
import HousePage from "./pages/HousePage/HousePage";
import UserUpdate from "./pages/UserUpdate/UserUpdate";
import Trips from "./pages/Trips/Trips";
import MyHouses from "./pages/MyHouses/MyHouses";
import Booking from "./pages/Booking/Booking";
import BookingSuccess from "./pages/Booking/Success";


function App() {
  return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/enlist" element={<Enlist />} />
                  <Route path="/housepage" element={<HousePage />} />
                  <Route path="/userUpdate" element={<UserUpdate />} />
                  <Route path="/trips" element={<Trips />} />
                  <Route path="/myhouses" element={<MyHouses />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/bookingSuccess" element={<BookingSuccess />} />
              </Routes>
          </div>
      </div>
  );
}


export default App;
