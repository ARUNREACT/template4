import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/dashboard/home/Dashboard";
import { Footer } from "../view/dashboard/footer/Footer";
import { Header } from "../view/dashboard/header/Header";
import { Bankaccount } from "../view/dashboard/consumers/Bankaccount";
import { Payments } from "../view/dashboard/consumers/Payments";
import { Loans } from "../view/dashboard/consumers/Loans";
import { Investment } from "../view/dashboard/consumers/Investment";
import { Insurances } from "../view/dashboard/consumers/Insurances";
import { Microatm } from "../view/dashboard/dbos/Microatm";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bankaccount" element={<Bankaccount />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/insurances" element={<Insurances />} />
        <Route path="/microatm" element={<Microatm />} />

        <Route path="header" element={<Header />} />
        <Route path="footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
