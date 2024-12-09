import HeroImg from  "../assets/hairfall.png"

const Hero = () =>{
    return(
        <div className="max-w-full bg-grey md:pt-10 md:mt-10 my-4 py-4">
            <div className="max-w-[1280px] mx-auto bg-white grid  md:grid-cols-2 md:gap-4" >
               
                <div className="p-4 px-8 flex flex-col items-center gap-0">
                    <h1 className="md:text-[65px] text-[40px]   leading-tight font-extrabold">LET'S</h1>
                    <h1 className="md:text-[65px] text-[40px]  text-center leading-tight font-extrabold md:w-[310px] w-[200px] relative right-10 px-6 bg-black  ml-5  -rotate-6 text-white">REVIVE</h1>
                    <h1 className="md:text-[65px] text-[40px]   leading-tight font-extrabold">Your Hair's</h1>
                    <h1 className="md:text-[65px] text-[40px]   leading-tight font-extrabold">HEALTH.</h1>
                </div>
                <div className=" p-1 px-4">
                    <img src={HeroImg} alt="" className="rounded-t-2xl " />
                </div>
            </div>
        </div>
    )
}
export default Hero;