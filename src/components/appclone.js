import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";
import Alert from "./components/Alert";
function App() {
  const [info, setinfo] = useState("light")
  let infoMode = ()=>{
    if(info==="light"){
      setMode('info');
      setinfo('info');
      document.body.style.backgroundColor='pink';
      showAlert("success","info mode has been enabled");
    }else{
      setinfo('light');
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("success","light mode has been enabled");
    }
  }
  let [mode,setMode]=useState("light");
  let [alert,newAlert]=useState(null);
  let enableMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("dark","Dark mode has been enabled");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("success","light mode has been enabled");
    }
  }
  let showAlert = (type,message) => {
       newAlert({
        type:type,
        msg :message
       })
       setTimeout(()=>{
        newAlert(null)
       },2000)
  }
  
  return (
    <>
      <Navbar title="TextUtils" link="About" mode={mode} info={infoMode} toggle={enableMode} />
      <Alert alert={alert}/>
      <TextForm title="Enter text Here" alert={showAlert} mode={mode} />
      {/* <Navbar /> */}
      {/* <About /> */}
    </>
  );
}

export default App;
