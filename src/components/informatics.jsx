import ThreeScene from "./football";
import CountUpCard from "./countUpCard";

const Informatics = () =>
  {
    return (
        <main className="h-fit w-screen bg-black flex flex-col lg:flex-row pb-10">
        <div className="w-full three-scene-container justify-center mx-auto lg:w-1/2 h-[45vh] md:h-full  bg-black">
          <ThreeScene />
        </div>
        <div className="sm:h-[50vh] md:h-[80vh] lg:h-screen w-screen lg:w-1/2 bg-black flex flex-col items-center justify-evenly">
          <div 
            className="py-2 text-[43px] font-bold md:text-6xl font-robm text-yellow-300 flex flex-col items-center justify-center" 
            style={{ minHeight: '100px' }} 
          >
            <span>Past Year Metrics</span>
          </div>
          <div className="h-[30vh] md:h-[60vh] w-full flex flex-row items-center justify-evenly mt-2">
            <CountUpCard name={"FootFall"} start={0} end={500} duration={5}  />      
            <CountUpCard name={"Events"} start={0} end={20} duration={5}/>      
            <CountUpCard name={"Colleges"} start={0} end={3} duration={5}/>      
          </div>
        </div>
      </main>
      
    );
  };
  
export default Informatics;
