import "./index.css";
import Header from "./containers/Header";
import SignUp from "./containers/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./containers/SignIn";
import OtpVerification from "./components/OtpVerification";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />

          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
