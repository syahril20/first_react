
import TourData from "../../comp/tourData";
import { useNavigate } from "react-router-dom";
const Trip = JSON.parse(localStorage.getItem("Trip"));
console.log(Trip);
export default function InTrip(props) {

  const add = useNavigate();

  return (
    <>
      <div className="flex justify-end mx-[5%] mt-[5%]">
        <button
          onClick={() => {
            add("/add-trip");
          }}
          // onClick={props.isLogin === true ? paym : handleLogin}
          className="mt-5 text-white font-semibold border border-[#FFAF00] rounded px-12 py-3 ml-2 bg-[#FFAF00]"
        >
          Add Trip
        </button>
      </div>
      <div className="mt-5 mb-[20%]">
        <TourData isTrip={true} />
      </div>
      
    </>
  );
}
