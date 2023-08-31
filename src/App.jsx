import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Classes, LoginPage, RegisterPage, WelcomePage } from './Pages';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<WelcomePage />}/>
      <Route path="/myclass" element={<Classes />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
    </Routes>
  </div>
);

export default App;