import "./styles/main.scss";
import Navbar from "./components/Navbar"
import Home from "./pages/HomePage"
import BlogExample from "./pages/BlogExample";
import ContactUs from "./pages/ContactUs";
import SubmitGames from "./pages/SubmitGames/SubmitGames";
import Games from "./pages/Games/Games";
import About from "./pages/About"
import Faq from "./pages/Faq"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogExample />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/submit-games" element={<SubmitGames />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
        

    </>

  );
}

export default App;
