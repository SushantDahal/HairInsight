import HeroImg from  "../assets/hairfall.png"

const Hero = () =>{
    return(
        <div className="max-w-full bg-grey md:pt-10 md:mt-10 my-4 py-4">
            <div className="max-w-[1240px] mx-auto bg-white grid  md:grid-cols-2 md:gap-4" >
               
                <div className="p-4 px-8 flex flex-col items-center md:items-start gap-0">
                    <h1 className="text-[65px]   leading-tight font-extrabold">LET'S</h1>
                    <h1 className="text-[65px]   leading-tight font-extrabold w-[330px] relative right-10 px-6 bg-black  ml-5  -rotate-6 text-white">REVIVE</h1>
                    <h1 className="text-[65px]   leading-tight font-extrabold">Your Hair's</h1>
                    <h1 className="text-[65px]   leading-tight font-extrabold">HEALTH.</h1>
                </div>
                <div className=" p-1">
                    <img src={HeroImg} alt="" className="rounded-t-2xl " />
                </div>
            </div>
        </div>
    )
}
export default Hero;