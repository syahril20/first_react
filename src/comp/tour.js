import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Hotel from "../assets/hotel.png";
import Plane from "../assets/plane.png";
import Meal from "../assets/meal.png";
import Time from "../assets/time.png";
import Calendar from "../assets/calendar.png";
import React from "react";
import Login from "./modals/login";
import Register from "./modals/register";
import { useNavigate } from "react-router-dom";
function Tour(props) {
  const [logOpen, setLogOpen] = React.useState(false);
  const [regOpen, setRegOpen] = React.useState(false);
  const pay = useNavigate();
  const handleLogin = () => {
    setLogOpen((log) => !log);
    setRegOpen(false);
  };
  const handleRegister = () => {
    setRegOpen((reg) => !reg);
    setLogOpen(false);
  };
  const paym = () => {
    pay("/payment");
  };

  return (
    <>
      <div className="my-10 mx-[15%]">
        <p className="text-4xl font-bold">{props.data.fTitle}</p>
        <p className="text-[#A8A8A8] text-xl">{props.data.place}</p>
        <div className="my-10">
          <Carousel
            className="rounded-xl"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 -translate-y-2/4 left-4"
              >
                <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 -translate-y-2/4 !right-4"
              >
                <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
              </IconButton>
            )}
          >
            <img
              src={props.data.caro1}
              alt="image1"
              className="h-full w-full object-cover"
            />
            <img
              src={props.data.caro1}
              alt="image2"
              className="h-full w-full object-cover"
            />
            <img
              src={props.data.caro1}
              alt="image3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
        <div className="items-center">
          <p className="font-bold mb-5 text-lg">Information Trip</p>
          <div className="flex justify-between">
            <div>
              <label className="text-[#A8A8A8] text-sm ">Accomodation</label>
              <div className="flex items-center">
                <img
                  src={Hotel}
                  alt="waw"
                  className="w-[24px] h-[24px]  mr-3"
                />
                <p className="font-bold">{props.data.acomodation}</p>
              </div>
            </div>
            <div>
              <label className="text-[#A8A8A8] text-sm ">transportation</label>
              <div className="flex items-center">
                <img
                  src={Plane}
                  alt="waw"
                  className="w-[24px] h-[24px]  mr-3"
                />
                <p className="font-bold">{props.data.transportation}</p>
              </div>
            </div>
            <div>
              <label className="text-[#A8A8A8] text-sm ">Eat</label>
              <div className="flex items-center">
                <img src={Meal} alt="waw" className="w-[24px] h-[24px]  mr-3" />
                <p className="font-bold">{props.data.eat}</p>
              </div>
            </div>
            <div>
              <label className="text-[#A8A8A8] text-sm ">Duration</label>
              <div className="flex items-center">
                <img src={Time} alt="waw" className="w-[24px] h-[24px]  mr-3" />
                <p className="font-bold">{props.data.duration}</p>
              </div>
            </div>
            <div>
              <label className="text-[#A8A8A8] text-sm ">Eat</label>
              <div className="flex items-center">
                <img
                  src={Calendar}
                  alt="waw"
                  className="w-[24px] h-[24px]  mr-3"
                />
                <p className="font-bold">{props.data.dateTrip}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold mt-10 text-lg">Description</p>
          <p className="text-[#A8A8A8]">
            <b>{props.place}</b> {props.data.desc}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="mt-10 flex gap-2">
            <p className="text-[#FFAF00] text-2xl font-bold">
              {props.data.price}
            </p>
            <p className="text-2xl font-bold"> / Person</p>
          </div>
          <div className="mt-10 flex gap-7">
            <button className="text-white bg-[#FFAF00] rounded-lg w-[26px] h-[26px] text-3xl font-bold">
              -
            </button>
            <p className="text-2xl font-bold"> {props.data.qty}</p>
            <button className="text-white bg-[#FFAF00] rounded-md w-[26px] h-[26px] text-3xl font-bold">
              +
            </button>
          </div>
        </div>
        <div>
          <div className="border border-[#B7B7B780] mt-5 mb-5" />
          <div className="flex justify-between">
            <p className="text-2xl font-bold">Total :</p>
            <p className="text-[#FFAF00] text-2xl font-bold">
              {props.data.price}
            </p>
          </div>
          <div className="border border-[#B7B7B780] my-5" />
        </div>
        <div className="flex justify-end mb-32">
          <button
            // onClick={handleLogin}
            onClick={props.isLogin === true ? paym : handleLogin}
            className="text-white font-semibold border border-[#FFAF00] rounded px-12 py-3 ml-2 bg-[#FFAF00]"
          >
            BOOK NOW
          </button>
          <Login
            logOpen={logOpen}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
          />
          <Register regOpen={regOpen} handleRegister={handleRegister} />
        </div>
      </div>
      {props.f}
    </>
  );
}
export default Tour;
