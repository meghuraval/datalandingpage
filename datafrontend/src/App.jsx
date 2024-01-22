import "./App.css";
import Analytics from "./components/Analytics";
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
    </div>
  );
}

export default App;
