import CountUpOnScroll from "./countUp";

const CountUpCard = ({end=100,start=0,name="Colleges",duration=5,suffix}) => {


    return (

        <div className="h-[150px] md:h-[280px] sm:h-[280px]  w-1/4 bg-black flex flex-col border-4 border-yellow-400 rounded-[10px] transition-all transform hover:scale-105 hover:shadow-2xl hover:border-yellow-500 hover:bg-yellow-500">
    <div className="h-3/4 pl-1 w-full bg-yellow-400 flex items-center justify-center text-4xl md:text-6xl semibold transition-colors duration-300 ease-in-out hover:bg-yellow-300">
        <CountUpOnScroll end={end} start={start} duration={duration} suffix={suffix}/>
    </div>
    <div className="h-1/4 w-full bg-black flex items-center justify-center text-2xl md:text-3xl font-bold font-robm text-yellow-300 transition-colors duration-300 ease-in-out px-1">
        {name}
    </div>
        </div>


        
    )
}

export default CountUpCard;