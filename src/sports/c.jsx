const Dcricket = () => {
    return(
        <div className="h-screen w-screen flex flex-col justify-center items-center">
                    <img src="./Vn.png" className="mx-auto w-1/2 " />
            <div className="w-3/4 bg-white-100/25 mx-auto flex flex-col items-center font-mono text-[#09fbd3] sm:gap-4 pb-4">

                <div className="w-1/2 uppercase text-center text-[3rem] ">
                    Cricket
                </div>
                <div className="text-[1.5rem] text-center uppercase italic ">
                    Let the crowd roar, as you smash boundaries and annihilate wickets!
                </div>
                <div className="text-[1.5rem] text-left uppercase  ">
                    Register and Lead your team to glory
                </div>
                <div className="text-[1.5rem]">
                    Team Registration Fee : INR 5000
                </div>
                <div className="text-[1.5rem]">
                    Prize Money : INR 50000
                </div>

                <div className="flex justify-between items-center gap-4">
                    <div className="">
                        For more details contact
                        <ul className="list-decimal">
                            <li>7304</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="">
                        <a href="" className="hover:text-red-700 underline bg-blue-800 px-4 py-2" > Rule Book</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dcricket;