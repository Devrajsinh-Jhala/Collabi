import "./index.css";
import Header from "./containers/Header";
import SignUp from "./containers/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./containers/SignIn";
import OtpVerification from "./components/OtpVerification";
import ReferralPage from "./components/ReferralPage";
import SignInOtp from "./containers/SignInOtp";
import UserProfile from "./containers/UserProfile";
import Goals from "./containers/Goals";
import AboutUs from "./containers/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />

          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/sign-in-otp" element={<SignInOtp />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
