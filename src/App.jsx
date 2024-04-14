import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Page4 from "./Components/Page4/Page4";
import Home from "./Components/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
