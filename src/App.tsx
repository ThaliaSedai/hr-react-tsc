import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

//This is for registration form to show up 

// function App() {
//   return (
//     <div className="App">
//       <RegistrationForm />
//     </div>
//   );
// }

//This is for login form to show up 

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Handle login logic here
  };

  return (
    <div className="App">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
