import './App.css';
// import About from './components/About';  
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert , setAlert] =useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert('Dark mode enabled','success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode enabled','success');
    }
  }

  
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About />}/> */}
          {/* <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text below to analyze!!" mode={mode} />}/> */}
          <Textform showAlert={showAlert} heading="Enter the text below to analyze!!" mode={mode} />
        {/* </Routes> */}
        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
