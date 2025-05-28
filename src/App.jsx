import { Route, Routes } from "react-router-dom";
import {HomePage} from './HomePage';
import { Navbar } from "./Navbar";
import {Footer} from "./Footer";

function App() {
  return (
     <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
