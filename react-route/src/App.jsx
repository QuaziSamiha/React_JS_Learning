import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import PhoneBars from "./components/PhoneBars/PhoneBars";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <>
      <Navbar />
      <PriceList />
      <Dashboard />
      <PhoneBars />
    </>
  );
}

export default App;
