import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import { Navbar } from "./Navbar";

function App() {
  return (
     <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
