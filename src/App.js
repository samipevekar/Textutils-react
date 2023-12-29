import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} showAlert={showAlert} />
        </div>
      {/* <Router>
          <Routes>
            <Route exact path='/' element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} showAlert={showAlert} />} />
            <Route exact path='/about' element={<About mode={mode} />} />
          </Routes>
      </Router>  */}
    </>
  );
}

export default App;
