import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import HousePage from "./pages/HousePage/HousePage";
import Trips from "./pages/Trips/Trips";
import MyHouses from "./pages/MyHouses/MyHouses";
import Booking from "./pages/Booking/Booking";
import BookingSuccess from "./pages/Booking/Success";
import UserUpdate from "./pages/UserUpdate/UserUpdate";
import HouseUpdate from "./pages/HouseUpdate/HouseUpdate";
import AddHouseImage from "./pages/AddHouseImage/AddHouseImage";
import PhoneVerification from "./pages/Signup/PhoneVerification";
import TripsHistory from "./pages/Trips/TripsHistory";
import Enlist from "./pages/Enlist/Enlist";
import Footer from "./components/Footer/Footer";
import BookingPolicy from "./pages/InfoPages/BookingPolicy";
import Contacts from "./pages/InfoPages/Contacts";
import FAQ from "./pages/InfoPages/FAQ";
import AboutUs from "./pages/InfoPages/AboutUs";
import AddUserImage from "./pages/Signup/AddUserImage";

function App() {
  return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/verify" element={<PhoneVerification />} />
                  <Route path="/enlist" element={<Enlist />} />
                  <Route path="/housepage/id/:id" element={<HousePage />} />
                  <Route path="/userUpdate" element={<UserUpdate />} />
                  <Route path="/trips" element={<Trips />} />
                  <Route path="/tripsHistory" element={<TripsHistory />} />
                  <Route path="/myhouses" element={<MyHouses />} />
                  <Route path="/booking/id/:id" element={<Booking />} />
                  <Route path="/bookingSuccess" element={<BookingSuccess />} />
                  <Route path="/houseUpdate/id/:id" element={<HouseUpdate />} />
                  <Route path="/addHouseImage/id/:id" element={<AddHouseImage />} />
                  <Route path="/addUserImage/id/:id" element={<AddUserImage />} />
                  <Route path="/bookingPolicy" element={<BookingPolicy />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/about" element={<AboutUs />} />
              </Routes>
          </div>
          <Footer />
      </div>
  );
}


export default App;
