import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://yawmhotvqamxemeypkpj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhd21ob3R2cWFteGVtZXlwa3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4OTM1MzYsImV4cCI6MjAwNzQ2OTUzNn0.2cAZSC6oxl3JxUYMpKtAQUMRSbh8wyH9t9FFb2-GqiM");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
