import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/Abouts';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

 
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is enabled");
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode is disabled");
    }
  }
  const showAlert =(message) =>{
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  return (
    <>
    
     
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <div className="container my-3">
   
  
  
   
   
         

      <Router>
      <Routes>
        <Route exact path="/" element={<TextForm heading="Try - Text Utils - Word Counter | Character Counter" mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode={mode}/> } />
      </Routes>
    </Router>
      
      
      
    </div>
    
    </>
   
  );
}

export default App;
