import { useState } from "react";
import Attach from "../../assets/attach.png";

export default function AddTrip() {
  const putClass =
    "border border-[#B1B1B1] bg-[#C4C4C480] w-full rounded-sm h-8";
  const [trip, setTrip] = useState();
  const handleSubmit = () => {
    localStorage.setItem("Trip", JSON.stringify(trip));
  };

  return (
    <>
      <div className="mx-[5%] mt-[5%] mb-80">
        <p className="text-4xl font-bold">Add Trip</p>
        <div className="mx-[2%] mt-[3%]">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label className="font-bold text-lg">Title Trip</label>
              <input
                type="text"
                className={`${putClass} `}
                onChange={(e) => {
                  setTrip({ ...trip, title: e.target.value });
                  console.log(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label className="font-bold text-lg">Country</label>
              <select
                className={`${putClass}`}
                onChange={(e) => {
                  setTrip({ ...trip, country: e.target.value });
                  console.log(e.target.value);
                }}
              >
                <option disabled selected>
                  Select Country
                </option>
                <option value="Jakarta">Jakarta</option>
                <option value="Australia">Australia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="Japan">Japan</option>
                <option value="South Korea">South Korea</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-lg">Accommodation</label>
              <input
                type="text"
                className={`${putClass}`}
                onChange={(e) => {
                  setTrip({ ...trip, accomodation: e.target.value });
                  console.log(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label className="font-bold text-lg">Transportation</label>
              <input
                type="text"
                className={`${putClass}`}
                onChange={(e) => {
                  setTrip({ ...trip, transportation: e.target.value });
                  console.log(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label className="font-bold text-lg">Eat</label>
              <input
                type="text"
                className={`${putClass}`}
                onChange={(e) => {
                  setTrip({ ...trip, eat: e.target.value });
                  console.log(e.target.value);
                }}
              ></input>
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-lg">Duration</label>
              <div className="flex gap-5">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className={`${putClass}`}
                    onChange={(e) => {
                      setTrip({ ...trip, day: e.target.value });
                      console.log(e.target.value);
                    }}
                  />
                  <label>Day</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className={`${putClass}`}
                    onChange={(e) => {
                      setTrip({ ...trip, night: e.target.value });
                      console.log(e.target.value);
                    }}
                  />
                  <label>Night</label>
                </div>
              </div>
            </div>
            <div>
              <label className="font-bold text-lg">Price</label>
              <input
                type="text"
                className={`${putClass}`}
                onChange={(e) => {
                  setTrip({ ...trip, price: e.target.value });
                  console.log(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label className="font-bold text-lg">Quota</label>
              <input
                type="text"
                className={`${putClass}`}
                onChange={(e) => {
                  setTrip({ ...trip, quota: e.target.value });
                  console.log(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label className="font-bold text-lg">Description</label>
              <textarea
                type="text"
                className={`${putClass} h-20 resize-none`}
                onChange={(e) => {
                  setTrip({ ...trip, description: e.target.value });
                  console.log(e.target.value);
                }}
              ></textarea>
            </div>
            <div>
              <label className="font-bold text-lg">Image</label>
              <div className="relative w-[200px]">
                <img
                  alt="waw"
                  src={Attach}
                  className="absolute right-0 w-[25px] top-[10%] cursor-pointer"
                ></img>
                <input
                  type="file"
                  className="w-[200px] relative custom-file-input bg-[#C4C4C480] border border-[#B1B1B1] text-[#FFAF00]"
                  onChange={(e) => {
                    setTrip({ ...trip, img: e.target.value });
                    console.log(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="flex justify-end mx-[5%] mt-[5%]">
              <button
                type="submit"
                // onClick={props.isLogin === true ? paym : handleLogin}
                className="mt-5 text-white font-semibold border border-[#FFAF00] rounded px-12 py-3 ml-2 bg-[#FFAF00]"
              >
                Add Trip
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
