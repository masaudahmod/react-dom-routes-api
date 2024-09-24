import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AllCountries from "./pages/AllCountries";
import About from "./pages/About";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/registration" element={<Registration />} /> */}

          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/all-countries" element={<AllCountries />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:code" element={<CountryDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
