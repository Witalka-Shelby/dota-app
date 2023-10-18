import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import TimingsList from "./components/TimingsList";

function App() {
  return (
    <div className="App">
      <h1 className="title">Dota 2 Timer</h1>
      <div className="card">
        <div className="timer">
          <Timer />
        </div>
        <div className="timings">
          <TimingsList />
        </div>
      </div>
    </div>
  );
}

export default App;
