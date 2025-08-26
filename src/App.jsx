import "./App.css";
import Clock from "./components/Clock";

// ? ===== ROOT COMPONENT =======
function App() {
  return (
    <>
      <div>
        <Clock locale="bn-BD" />
      </div>
    </>
  );
}

export default App;
