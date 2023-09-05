import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Enlist from "./pages/Enlist/Enlist";
import HouseList from "./pages/HouseList/HouseList";
import HousePage from "./pages/HousePage/HousePage";


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
                  <Route path="/houselist" element={<HouseList />} />
                  <Route path="/housepage" element={<HousePage />} />
              </Routes>
          </div>
      </div>
  );
}


export default App;
