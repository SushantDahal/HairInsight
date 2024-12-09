const Button = (props) =>{
    return(
        <>
        <button className="max-w-[140px] bg-[#009963] text-white font-bold px-6 rounded-md p-2">
            {props.button}
        </button>
        </>
    )
}
export default Button;