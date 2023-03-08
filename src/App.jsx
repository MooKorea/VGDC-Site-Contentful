import "./styles/main.scss";
import Navbar from "./Navbar"
import BlogExample from "./blogExample";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<BlogExample />} />
        </Routes>
      </div>
        

    </>

  );
}

export default App;
