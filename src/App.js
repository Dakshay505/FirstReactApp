import "./App.css";
import AlertClone from "./components/AlertClone";
import FormClone from "./components/FormClone";
import NavClone from "./components/NavClone";
import About from "./components/About";
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {  
  const [alert,setAlert]=useState(null);
  let showAlert=(type,text)=>{
      setAlert({
        type:type,
        text:text
      })
      setTimeout(()=>{
        setAlert(null);
      },2000)
  }
  const clearing= ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    console.log("clearing")
  }
  const [mode,setMode] = useState("light");
  let darkMode =(cls)=>{
     clearing();
     document.body.classList.add("bg-"+cls);
     if(mode==="light"){
       setMode("dark");
       document.body.style.backgroundColor="grey";
       showAlert(mode,"Dark mode has been enabled"); 
     }else{
      setMode("light");
       document.body.style.backgroundColor="white";
       showAlert(mode,"light mode has been enabled");  
     }
  }
  return (
    <Router>
      <NavClone dark={darkMode} mode={mode}/>
      <AlertClone alert={alert}/>
      <Routes>
           <Route exact path="/about" element={<About/>}/>
           
          <Route exact path="/" element={<FormClone alert={showAlert}/>}/>
        </Routes>
      </Router>
  );
}

export default App;
