import { useContext, useEffect, useState } from "react";
import Icon from "../assets/IconBlack.png";
import TF from "../assets/tf.png";
import { Typography } from "@material-tailwind/react";

import { UserContext } from "./context/context";
export default function Pay(props) {
  // const [User, setUser] = useState({});
  // const [Trans, setTrans] = useState({});
  const [state] = useContext(UserContext)
  // useEffect(() => {
  //   setTrans(Users);
  // }, []);

  //   console.log(Trans, "JANGAN MAS");
  //   let t = Trans.map((element)=>{
  //     return `${element.total}`;
  // })

  const Trans = state?.user?.transaction
  
  console.log(state?.user, "CEK");
  console.log(Trans, "Trans");
  const classes = "p-4 border-t border-[#B7B7B780] text-[#FF0000]";
  return (
    <>
      {Trans?.map((trans, idx) => {
        return (
          <div key={idx} className="mt-[10%] mx-[10%] mb-32">
            <div className=" bg-white">
              <div className="border border-[#B7B7B7] rounded-lg py-4 bg-white">
                <div className="px-10">
                  <div
                    id="header"
                    className="flex justify-between items-center mb-5"
                  >
                    <div>
                      <img src={Icon} alt="waw" />
                    </div>
                    <div className="">
                      <p className="text-3xl font-extrabold text-end mb-2">
                        Booking
                      </p>
                      <p className="text-xl text-[#878787]">
                        <b>Saturday</b>, 22 July 2020
                      </p>
                    </div>
                  </div>
                  <div id="content" className="flex gap-5 justify-between">
                    <div>
                      <p className="text-xl font-extrabold">
                        {trans?.trip?.title}
                      </p>
                      <p className="text-sm text-[#959595]">
                        {trans?.trip?.country?.name_country}
                      </p>
                      <p className="text-sm text-[#FF9900] mt-8 w-[120px] text-center bg-[#ff990070]">
                        {trans?.status}
                      </p>
                    </div>
                    <div className="flex flex-wrap w-[300px] gap-8">
                      <div>
                        <div className="mb-6">
                          <label className="font-extrabold">Date Trip</label>
                          <p className="text-sm text-[#959595]">
                            {trans?.trip?.date_trip}
                          </p>
                        </div>
                        <div>
                          <label className="font-extrabold">Accomodation</label>
                          <p className="text-sm text-[#959595]">
                            {trans?.trip?.accomodation}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-6">
                          <label className="font-extrabold">Duration</label>
                          <p className="text-sm text-[#959595]">
                            {trans?.trip?.day} Day {trans?.trip?.night} Night 
                          </p>
                        </div>
                        <div>
                          <label className="font-extrabold">
                            transportation
                          </label>
                          <p className="text-sm text-[#959595]">
                            {trans?.trip?.transportation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        alt="waw"
                        src={TF}
                        className="border-2 border-black"
                      />
                      <p className="text-sm text-[#959595] text-center">
                        upload payment proof
                      </p>
                    </div>
                  </div>
                </div>
                <div id="footer">
                  <table className="text-left w-full">
                    <thead>
                      <tr className="">
                        <th className="w-[100px] p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="leading-none text-lg font-bold"
                          >
                            No
                          </div>
                        </th>

                        <th className="w-[100px] p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="leading-none text-lg font-bold"
                          >
                            Full Name
                          </div>
                        </th>

                        <th className="w-[100px] p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="leading-none text-lg font-bold"
                          >
                            Gender
                          </div>
                        </th>

                        <th className="w-[100px] p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="leading-none text-lg font-bold"
                          >
                            Phone
                          </div>
                        </th>

                        <th className="w-[100px] p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="leading-none text-lg font-bold"
                          ></div>
                        </th>

                        <th className="w-[100px] p-4">
                          <div
                            variant="small"
                            color="blue-gray"
                            className="leading-none text-lg font-bold"
                          ></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-[#B1B1B1] text-lg"
                          >
                            1
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-[#B1B1B1] text-lg"
                          >
                            {state?.user?.name}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-[#B1B1B1] text-lg"
                          >
                            Male
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-[#B1B1B1] text-lg"
                          >
                            {state?.user?.phone}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-black text-lg font-bold"
                          >
                            Qty
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            as="a"
                            className=" text-lg font-bold"
                          >
                            :{trans?.counter_qty}
                          </Typography>
                        </td>
                      </tr>

                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-black text-lg font-bold"
                          >
                            Total
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            as="a"
                            className=" text-lg font-bold"
                          >
                            : IDR. {trans?.total.toLocaleString("en-us")}
                            
                          </Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
