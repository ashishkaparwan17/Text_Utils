import Form from './components/Form';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const switchMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c3e50";
      showAlert("info", "Dark mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("info", "Light mode has been enabled");
    }
  }
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  return (
    <Router>
      <Navbar title="My Navbar" mode={mode} switchMode={switchMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Form heading="Enter text to analyze" showAlert={showAlert} mode={mode} />}/>
        <Route path="/about" element={<About mode={mode}/>}/>
      </Routes>
    </Router>
  );
}

//export default App;
