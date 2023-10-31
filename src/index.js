import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import reportWebVitals from './reportWebVitals';
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar';
import Footer from './components/footer'
import Home from './page/home'
import Group from './page/group';

const supabase = createClient("https://yawmhotvqamxemeypkpj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhd21ob3R2cWFteGVtZXlwa3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4OTM1MzYsImV4cCI6MjAwNzQ2OTUzNn0.2cAZSC6oxl3JxUYMpKtAQUMRSbh8wyH9t9FFb2-GqiM");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <div className="h-screen bg-inherit dark:bg-gray-900">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group" element={<Group />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);

reportWebVitals();
