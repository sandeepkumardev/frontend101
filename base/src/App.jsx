import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Tasks from "./pages/Tasks";
import Docs from "./pages/Docs";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" Component={Tasks} />
            <Route path="/docs" Component={Docs} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
