import "./gallery.css";
import {motion} from "framer-motion"
import {
  G1, 
G2,
G3,
G4, 
G5 ,
G6 ,
G7,
G8,
G9 ,
G10,
G11,
G12,
G13,
G14,
G15,
G16,
G17,
G18,
G19,
G20,
} from "../assets";


const Gallery = () => {
  return (
    <main
      className="m-0 p-0 h-fit pb-48 bg-black">
      <div className="ml-3 md:ml-32 sm:ml-32  text-5xl md:text-6xl sm:text-6xl text-yellow-300 mb-10 md:mb-4 sm:mb-4 font-bold font-robm">
        Gallery
      </div>
      <p className="text-white ml-4 text-left md:ml-32 mb-0 md:mb-4 sm:mb-4 text-xl font-robm">
        Relive the action and capture the spirit of <span className="text-yellow-400">Sangram</span> through
        {window.innerWidth > 768 ? <br /> : " "}
        unforgettable moments frozen in time!
      </p>
      <div className="slider mt-20" style={{
        "--width": "500px",
        "--height": "400px",
        "--quantity": "12"
      }}>
        <div className="list">
            <motion.img  src={G1} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 1 }}/>
            <motion.img  src={G2} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item"  style={{ "--position": 2 }}/>
            <motion.img  src={G3} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 3 }} />
            {/* <img  src="/gallery/G4.jpg" alt="" className="h-[18rem] w-96" /> */}
            <motion.img  src="/gallery/G5.jpg" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 4 }} />
            {/* <img  src="/gallery/G6.jpg" alt="" className="h-[18rem] w-96" /> */}
            <motion.img src={G7} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 5 }} />
            <motion.img src={G8} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 6 }} />
            <motion.img src={G9} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 7 }} />
            <motion.img src={G10} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 8 }} />
            <motion.img src={G11} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 9 }} />
            <motion.img src={G12} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item" style={{ "--position": 10 }} />
            {/* <img  src="/gallery/G13.jpg" alt="" className="h-[18rem] w-96" /> */}}
            {/* <img  src="/gallery/G14.jpg" alt="" className="h-[18rem] w-96" /> */}
            {/* <img  src="/gallery/G15.jpg" alt="" className="h-[18rem] w-96" /> */}
            <motion.img  src={G16} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item"  style={{ "--position": 11 }}/>
            <motion.img  src={G17} alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24 item"  style={{ "--position": 12 }}/>
            {/* <img  src="/gallery/G18.jpg" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24"  /> */}
            {/* <img  src="/gallery/G19.jpg" alt="" className="h-[18rem] w-96" /> */}
            {/* <img  src="/gallery/G20.jpg" alt="" className="sm:h-[18rem] sm:w-96 w-24 h-24" /> */}
          </div>
      </div>
    </main>
  );
};
export default Gallery;