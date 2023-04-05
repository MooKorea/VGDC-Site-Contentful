import "./styles/main.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/HomePage";
import BlogExample from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import SubmitGames from "./pages/SubmitGames/SubmitGames";
import Games from "./pages/Games/Games";
import About from "./pages/About";
import Faq from "./pages/Faq";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>Video Game Development Club</title>
        <meta name="title" content="Video Game Development Club" />
        <meta
          name="description"
          content="We are actors, artists, designers, musicians, programmers, writers, and more! All skill levels are welcome, and we’re always willing to teach."
        />
        <meta
          name="keywords"
          content="video game, club, University of Minnesota, student group, student, game, Minnesota, UMN, UMN student group, UMN club, art, programming, coding, game development, game dev, dev"
        />
      </Helmet>
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
