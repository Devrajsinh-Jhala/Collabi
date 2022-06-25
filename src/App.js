import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Tagline from "./components/Tagline";
import Companies from "./containers/Companies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Tagline />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
