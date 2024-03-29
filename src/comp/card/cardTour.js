import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/context";

// import CardDetail from './cardDetail'
const login = JSON.parse(localStorage.getItem("login"));
console.log(login, "CardTour");

function Card(props) {
  const [state] = useContext(UserContext);
  const Nav = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-3 rounded  w-[330px] relative">
        {props.current_quota === props.quota ? (
          <img src={props.image} className="h-[300px] object-cover" alt="waw" />
        ) : (
          <Link to={`/detail/${props.id}`}>
            <img
              src={props.image}
              className="h-[300px] object-cover"
              alt="waw"
            />
          </Link>
        )}

        <p className="bg-white absolute rounded-l-lg w-[60px] py-1 top-5 left-[260px] flex justify-center">
          {props.current_quota === props.quota
            ? "Booked"
            : props.current_quota + " / " + props.quota}
        </p>

        {props.isTrip === true ? (
          <p className="text-2xl font-semibold mt-5 truncate">{props.title}</p>
        ) : state.user.role_id === 1 ? (
          <Link
            to={`/in-trip`}
            className="text-2xl font-semibold cursor-pointer mt-5 truncate"
          >
            <h5 className="truncate">{props.title}</h5>
          </Link>
        ) : props.current_quota === props.quota ? (
          <div className="text-2xl font-semibold">
            <h5 className="truncate">{props.title}</h5>
          </div>
        ) : (
          <Link
            to={`/detail/${props.id}`}
            className="text-2xl font-semibold cursor-pointer "
          >
            <h5 className="truncate">{props.title}</h5>
          </Link>
        )}

        <div className="flex justify-between">
          <p className="text-[#FFAF00] font-bold">
            IDR. {props.price.toLocaleString("en-us")}
          </p>
          <p className="text-[#878787] font-semibold">{props.place}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
