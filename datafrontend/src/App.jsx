import "./App.css";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newletter from "./components/Newletter";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <Newletter />
    </div>
  );
}

export default App;
