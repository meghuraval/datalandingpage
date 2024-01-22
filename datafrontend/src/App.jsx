import "./App.css";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newletter from "./components/Newletter";
import PaymentCards from "./components/PaymentCards";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <Newletter />
      <PaymentCards />
      <Footer />
    </div>
  );
}

export default App;
