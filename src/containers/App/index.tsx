import React from "react";
<<<<<<< HEAD
import logo from "../../assets/logo.svg";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-MainLogo" alt="logo" />
      </header>
      <p>Coming soon</p>
    </div>
  );
}
=======
import SignUps from "@/containers/SignUps";
import "./index.css";

export const App = () => {
  return (
    <div className="App">
      <SignUps />
    </div>
  );
};
>>>>>>> 9f08bb0 (Initial commit)

export default App;
