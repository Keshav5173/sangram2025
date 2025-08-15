// import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Footer_1 from '../components/Footer_1'
// import Disclaimer from "../components/disclaimer";
// import CollegeModel from "../components/CollegeModel";
import ParticleSlider from "../components/particleSlider";
import Informatics from "../components/informatics";
import {motion} from "framer-motion"
import { useAnimationControls,useInView } from "framer-motion";
import { useEffect,useRef, useState } from "react";
import logo from  '../assets/logo.png'
import Skeleton from "react-loading-skeleton";
import { iic_logo_white, nss_logo_white, uem_logo_white } from "../assets";
// import ThreeScene from "../components/football";
const Home = () => {
    
    const ref1 = useRef();
    const [isSmall,setIsSmall] = useState(true);
    useEffect(()=>{
        const handleResize = () => {
            if(window.innerWidth<=768){
                setIsSmall(true);
            }else{
                setIsSmall(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    const controls1 = useAnimationControls();
    const isInView1 = useInView(ref1);

    useEffect(()=>{
        if(isInView1){
            controls1.start({opacity:1,transition:{duration:2}});
        }
    },[isInView1,controls1]);

    const ref2 = useRef();
    const controls2 = useAnimationControls();
    const isInView2 = useInView(ref2);

    useEffect(()=>{
        if(isInView2){
            controls2.start({opacity:1,transition:{duration:2}});
        }
    },[isInView2,controls2]);

    const ref3 = useRef();
    const controls3 = useAnimationControls();
    const isInView3 = useInView(ref3);

    useEffect(()=>{
        if(isInView3){
            controls3.start({opacity:1,transition:{duration:2}});
        }
    },[isInView3,controls3]);
    return (
        <main  className="min-h-screen w-screen bg-black flex flex-col scroll-smooth"> {/* Updated here */}
            <motion.div 
                initial = {{opacity: 0}}
                animate={controls1}
                ref={ref1}
                className="h-fit flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 h-1/2">
                    {!isSmall ? <ParticleSlider /> : <img src={logo} className="mx-auto mt-20 h-full sm:w-full" />}
                </div>
                <div className="z-0 w-full lg:w-1/2 max-h-screen flex flex-col items-center justify-center">
                    <img src={uem_logo_white} alt="" className="w-1/3" />
                    <div className="w-full flex justify-center gap-20">
                        <img src={iic_logo_white} className="w-1/4" />
                        <img src={nss_logo_white} className="w-1/5" />
                    </div>
                </div>


            </motion.div>

            <motion.div 
                initial = {{opacity: 0}}
                animate={controls2}
                ref={ref2}
            >
                <About />
            </motion.div>

            <motion.div
                initial = {{opacity: 0}}
                animate={controls3}
                ref={ref3}
            >
                <Informatics />
            </motion.div>
            
            <motion.div
                initial = {{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 2}}
            >
                <Gallery />
            </motion.div>
            
            <motion.div
                initial = {{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 2}}
            >
                <Footer_1 />
            </motion.div>
        </main>
    )
}

export default Home;

