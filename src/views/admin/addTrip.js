import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Attach from "../../assets/attach.png";
import { API } from "../../config/api";
import Swal from "sweetalert2";

export default function AddTrip() {
  const putClass =
    "border border-[#B1B1B1] bg-[#C4C4C480] w-full rounded-sm h-8";
  const [trip, setTrip] = useState({
    title: "",
    country: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    price: "",
    quota: "",
    current_quota: 0,
    quota: "",
    description: "",
    image: "",
  });
  // const handleSubmit = () => {
  //   localStorage.setItem("Trip", JSON.stringify(trip));
  // };
  const nav = useNavigate()
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("title", trip?.title);
      formData.set("id_country", trip?.country);
      formData.set("accomodation", trip?.accomodation);
      formData.set("transportation", trip?.transportation);
      formData.set("eat", trip?.eat);
      formData.set("day", trip?.day);
      formData.set("night", trip?.night);
      formData.set("date_trip", trip?.date_trip);
      formData.set("price", trip?.price);
      formData.set("quota", trip?.quota);
      formData.set("current_quota", trip?.current_quota);
      formData.set("description", trip?.description);
      formData.set("image", trip?.image[0], trip?.image[0].name);
   
      const response = await API.post("/trip", formData, config);
      console.log("Add Trip success : ", response);
      let timerInterval;
        Swal.fire({
          title: "DATA ADDED",
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      window.location.reload(nav('/in-trip'))
    } catch (error) {
      console.log("Add Trip failed : ", error);
      let timerInterval;
        Swal.fire({
          title: "GAGAL",
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
    }
  });

  const [james, jesica] = useState();
  const { data: User } = useQuery("t", async () => {
    const response = await API.get("/country");
    return jesica(response?.data?.data);
  });
  console.log(james);
  return (
    <>
      <div className="mx-[5%] mt-[5%] mb-80">
        <p className="text-4xl font-bold">Add Trip</p>
        <div className="mx-[2%] mt-[3%]">
          <form
            enctype="multipart/form-data"
            className="flex flex-col gap-5"
            onSubmit={(e) => handleSubmit.mutate(e)}
          >
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
                <option selected disabled value="placeholder">
                  SELECT COUNTRY
                </option>
                {james?.map((country, idx) => {
                  return (
                    <>
                      <option key={idx} value={country.id_country}>
                        {country.name_country}
                      </option>
                    </>
                  );
                })}
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
                    type="number"
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
                    type="number"
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
              <label className="font-bold text-lg">Date Trip</label>
              <input
                type="date"
                className={`${putClass}`}
                onChange={(e) => {
                  setTrip({ ...trip, date_trip: e.target.value });
                  console.log(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label className="font-bold text-lg">Price</label>
              <input
                type="number"
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
                type="number"
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
                    setTrip({ ...trip, image: e.target.files });
                    console.log(e.target.files);
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
