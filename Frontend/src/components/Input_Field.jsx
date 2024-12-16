const InputField = (props) => {
  return (
    <>
      <div className="flex items-center bg-[#efecec] p-1 w-full  rounded-xl px-2 my-4">
        <div>{<props.icon className="text-black" size={20} />}</div>
        <input
          type={props.type}
          className="w-full bg-transparent outline-none py-2  px-4 text-xl"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};
export default InputField;
