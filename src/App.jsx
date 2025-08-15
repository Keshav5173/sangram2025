import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import { useState,useRef } from "react";
const App = () => {
  const ref = useRef(null);
  const [sk_disply,setSkDisply] = useState('flex');
  const handleLoad = ()=>{
    ref.current.style.display = "flex";
    setSkDisply('hidden');
  }
  return (

    <div>
      {/* <div className={`h-screen bg-black ${sk_disply}`}>
        <Loader1/>
      </div> */}
      <div   ref={ref}   className="relative z-0 bg-black bg-cover bg-no-repeat bg-center overflow-x-hidden overflow-y-hidden">
        <Router basename="/sangram2025">
          <div className="">
            <Navbar />

          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />

          

            
          </Routes>
        </Router>
      </div >
    </div>
  );
  
};

export default App;
