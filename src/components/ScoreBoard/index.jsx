import logo from "./static/logo.svg";
export default Gamepad = (props) => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex justify-between items-center p-4 border rounded-lg min-w-3/4 md:min-w-1/2">
        <div className="">
          <img src={logo} alt="logo" className="w-1/2 md:w-full"></img>
        </div>
        <div className="flex items-stretch ">
          <div className="md:text-base bg-white rounded-lg flex flex-col justify-around items-center h-full py-4 px-8 md:px-12">
            <div
              className="text-xs md:text-base"
              style={{ color: "hsl(229, 64%, 46%)" }}
            >
              SCORE
            </div>
            <div
              className="text-2xl md:text-5xl font-bold"
              style={{ color: "hsl(229, 25%, 31%)" }}
            >
              {props.score}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
