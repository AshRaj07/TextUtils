import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [sumText, setSumText] = useState(" ");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled!", "success");
    }
  };

  const SummaryUpdate = (txt) => {
    setSumText(txt);
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1750);
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About"
      />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <TextForm
            heading="Enter Text to Analyse"
            onSummaryUpdate={SummaryUpdate}
            mode={mode}
            showAlert={showAlert}
          />
          <Summary textSum={sumText} mode={mode} />
        </Route>
      </Switch>

      {/* <About /> */}
    </Router>
    </>
  );
}

export default App;
