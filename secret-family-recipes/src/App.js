import React from 'react';
import LoginForm from "./components/LoginForm";
import './App.css';
import LoginNav from "./components/LoginNav";

function App() {
  return (
    <div className="App">
      <LoginNav />
      <LoginForm /> 
    </div>
  );
}

export default App;
