import "./App.css";
import HomePage from "./customer/pages/HomePage/HomePage.jsx";
import Navigation from "./customer/components/navigation/Navigation.jsx";
import Footer from "../src/customer/components/footer/Footer.jsx"

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <HomePage />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
