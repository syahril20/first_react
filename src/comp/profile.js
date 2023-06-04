import User from "../assets/name.png";
import Mail from "../assets/mail.png";
import Phone from "../assets/phone.png";
import Maps from "../assets/maps.png";
import Pic from "../assets/picProfile.png";
import Icon from "../assets/IconBlack.png";
import TF from "../assets/tf.png";
import QR from "../assets/qr-code.png";
import { Chip, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { UserContext } from "./context/context";
export default function Profile(props) {
  const persInfo = "flex items-center gap-4";
  const persH = "flex flex-col gap-1";
  const persName1 = "font-bold text-sm";
  const persName2 = "text-xs text-[#8A8C90]";
  const TABLE_HEAD = ["No", "Full Name", "Gender", "Phone", "", ""];
  console.log(props);
  const TABLE_ROWS = [
    {
      No: 1,
      FullName: "Radif Ganteng",
      Gender: "Male",
      Phone: "083896833112",
      Qty: "Qty",
      Jumlah: ": 1",
    },
    {
      No: "",
      FullName: "",
      Gender: "",
      Phone: "",
      Qty: "TOTAL",
      Jumlah: `IDR. ${props.data[0].price.toLocaleString("en-us")}`,
    },
  ];

  const [state] = useContext(UserContext);
  console.log(state?.user, "PROFILE");
  const classes = "p-4 border-t border-[#B7B7B780] text-[#FF0000]";
  const Trans = state?.user?.transaction
  const filterTrans = Trans.filter((trans) => trans.status === "Approve" )
  return (
    <>
      <div id="card" className="mt-[10%] mx-[20%] bg-white rounded-lg ">
        <div className="flex justify-between m-4 p-5">
          <div id="left">
            <div>
              <p className="text-3xl font-extrabold ">Personal Info</p>
            </div>

            <div className="mt-10 gap-4 flex flex-col">
              <div className={persInfo}>
                <div>
                  <img alt="waw" src={User} className="w-[25px]" />
                </div>
                <div className={persH}>
                  <p className={persName1}>{state?.user?.name}</p>
                  <p className={persName2}>Full Name</p>
                </div>
              </div>
              <div className={persInfo}>
                <div>
                  <img alt="waw" src={Mail} className="w-[25px]" />
                </div>
                <div className={persH}>
                  <p className={persName1}>{state?.user?.email}</p>
                  <p className={persName2}>Email</p>
                </div>
              </div>
              <div className={persInfo}>
                <div>
                  <img alt="waw" src={Phone} className="w-[25px]" />
                </div>
                <div className={persH}>
                  <p className={persName1}>{state?.user?.phone}</p>
                  <p className={persName2}>Mobile phone</p>
                </div>
              </div>
              <div className={persInfo}>
                <div>
                  <img alt="waw" src={Maps} className="w-[25px]" />
                </div>
                <div className={persH}>
                  <p className={persName1}>
                    {state?.user?.address}
                  </p>
                  <p className={persName2}>Address</p>
                </div>
              </div>
            </div>
          </div>
          <div id="right">
            <img alt="waw" src={Pic} className="rounded-lg" />
            <div className="">
              <button className="bg-[#FFAF00] w-full mt-2 rounded-lg py-2 text-white font-bold">
                Change Photo Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {filterTrans?.map((trans, idx) => {
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
                      <Chip
                          size="sm"
                          variant="ghost"
                          value={trans?.status}
                          color={trans?.status === "Approve"
                              ? "green"
                              : trans?.status === "Pending"
                              ? "yellow"
                              : "red"
                          }
                        />
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

      {/* <div className=" mb-60 mx-[10%]">
        <p className="text-3xl font-extrabold mb-10 mt-20">History Trip</p>
        <div className="border border-[#B7B7B7] rounded-lg py-4 bg-white">
          <div className="px-10">
            <div id="header" className="flex justify-between items-center mb-5">
              <div>
                <img src={Icon} alt="waw" />
              </div>
              <div className="">
                <p className="text-3xl font-extrabold text-end mb-2">Booking</p>
                <p className="text-xl text-[#878787]">
                  <b>Saturday</b>, 22 July 2020
                </p>
              </div>
            </div>
            <div id="content" className="flex gap-5 justify-between">
              <div>
                <p className="text-xl font-extrabold">{props.data[0].fTitle}</p>
                <p className="text-sm text-[#959595]">{props.data[0].place}</p>
                <p className="text-sm text-[#3CF71E] mt-8 w-[120px] text-center bg-[#3bf71e62]">
                  Approve
                </p>
              </div>
              <div className="flex flex-wrap w-[300px] gap-8">
                <div>
                  <div className="mb-6">
                    <label className="font-extrabold">Date Trip</label>
                    <p className="text-sm text-[#959595]">
                      {props.data[0].dateTrip}
                    </p>
                  </div>
                  <div>
                    <label className="font-extrabold">Accomodation</label>
                    <p className="text-sm text-[#959595]">
                      {props.data[0].acomodation}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mb-6">
                    <label className="font-extrabold">Duration</label>
                    <p className="text-sm text-[#959595]">
                      {props.data[0].duration}
                    </p>
                  </div>
                  <div>
                    <label className="font-extrabold">transportation</label>
                    <p className="text-sm text-[#959595]">
                      {props.data[0].transportation}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img alt="waw" src={QR} className="border-2 border-black" />
                <p className="text-sm text-[#959595] text-center">TCK0101</p>
              </div>
            </div>
          </div>
          <div id="footer">
            <table className="text-left w-full">
              <thead>
                <tr className="">
                  {TABLE_HEAD.map((head, idx) => (
                    <th key={idx} className="w-[100px] p-4">
                      <div
                        variant="small"
                        color="blue-gray"
                        className="leading-none text-lg font-bold"
                      >
                        {head}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  ({ No, FullName, Gender, Phone, Qty, Jumlah }, idx) => {
                    const isLast = idx === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4 border-t border-[#B7B7B780] text-[#FF0000] "
                      : "p-4 border-t border-[#B7B7B780] text-black text-lg";
                    return (
                      <tr key={idx}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-[#B1B1B1] text-lg"
                          >
                            {No}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-[#B1B1B1] text-lg"
                          >
                            {FullName}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-[#B1B1B1] text-lg"
                          >
                            {Gender}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-[#B1B1B1] text-lg"
                          >
                            {Phone}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            className="text-black text-lg font-bold"
                          >
                            {Qty}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            as="a"
                            className=" text-lg font-bold"
                          >
                            {Jumlah}
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </>
  );
}
