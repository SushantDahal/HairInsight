const Button = (props) =>{
    return(
        <>
        <button className="max-w-[140px] bg-[#009963] cursor-pointer text-white font-bold px-6 rounded-md p-2 hover:bg-[#bee1d5] hover:text-[#3d3a3a] duration-150">
            {props.button}
        </button>
        </>
    )
}
export default Button;