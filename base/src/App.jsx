import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
