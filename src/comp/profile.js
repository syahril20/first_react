import User from "../assets/name.png";
import Mail from "../assets/mail.png";
import Phone from "../assets/phone.png";
import Maps from "../assets/maps.png";
import Pic from "../assets/picProfile.png";
import Icon from "../assets/IconBlack.png";
import QR from "../assets/qr-code.png";
import {
  Button,
  Card,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/context";
import { useMutation } from "react-query";
import { API, setAuthToken } from "../config/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const persInfo = "flex items-center gap-4";
  const persH = "flex flex-col gap-1";
  const persName1 = "font-bold text-sm";
  const persName2 = "text-xs text-[#8A8C90]";

  const [state] = useContext(UserContext);
  console.log(state?.user, "PROFILE");
  const classes = "p-4 border-t border-[#B7B7B780] text-[#FF0000]";
  const Trans = state?.user?.transaction;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [data, setData] = useState({});
  const [pp, setPp] = useState(null);

  useEffect(() => {
    setData(state?.user);
  }, []);
  console.log(data, "INI DATA");
  const nav = useNavigate();
  const handleUpdate = useMutation(async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("name", data?.name);
      formData.set("email", data?.email);
      formData.set("phone", data?.phone);
      formData.set("address", data?.address);
      if (pp) {
        formData.set("image", data?.image[0], data?.image[0]?.name);
      }else{
        
      }
      console.log(data?.image[0], data?.image[0]?.name);

      const response = await API.patch(`/users/${data?.id}`, formData, config);
      console.log("Edit User success : ", response);
      Swal.fire("DATA EDITED !");
      window.location.reload(nav("/profile"));
    } catch (error) {
      console.log("Edit User failed : ", error);
      Swal.fire("FAILED !");
    }
  });

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
                  <p className={persName1}>{state?.user?.address}</p>
                  <p className={persName2}>Address</p>
                </div>
              </div>
            </div>
          </div>
          <div id="right">
            <img
              alt="waw"
              src={state?.user?.image}
              className="rounded-lg w-[300px]"
            />
            <div className="">
              <button
                onClick={handleOpen}
                className="bg-[#FFAF00] w-full mt-2 rounded-lg py-2 text-white font-bold"
              >
                Edit Profile
              </button>
            </div>

            <Dialog
              size="md"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none"
            >
              <Card className="mx-auto w-full max-w-[24rem]">
                <div className="relative w-full max-w-sm max-h-full">
                  <DialogHeader>Edit Profile.</DialogHeader>
                  {/* <!-- Modal content --> */}
                  <div className="bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="p-6 space-y-6 overflow-scroll no-scrollbar">
                      <div className="h-[300px]">
                        <form onSubmit={(e) => handleUpdate.mutate(e)}>
                          <DialogBody
                            divider
                            className="mx-auto w-full max-w-[24rem] flex flex-col gap-4"
                          >
                            <Input
                              label="Full Name"
                              value={data?.name}
                              onChange={(e) => {
                                setData({ ...data, name: e.target.value });
                                console.log(e.target.value);
                              }}
                            />
                            <Input
                              label="Email"
                              value={data?.email}
                              onChange={(e) => {
                                setData({ ...data, email: e.target.value });
                                console.log(e.target.value);
                              }}
                            />
                            <Input
                              label="Phone"
                              value={data?.phone}
                              onChange={(e) => {
                                setData({ ...data, phone: e.target.value });
                                console.log(e.target.value);
                              }}
                            />
                            <Input
                              label="Address"
                              value={data?.address}
                              onChange={(e) => {
                                setData({ ...data, address: e.target.value });
                                console.log(e.target.value);
                              }}
                            />
                            <Input
                              type="file"
                              onChange={(e) => {
                                let url = URL.createObjectURL(
                                  e.target.files[0]
                                );
                                if (data?.image) {
                                  setPp(data?.image);
                                }
                                setPp(url);
                                setData({ ...data, image: e.target.files });
                                console.log(pp, "INI PHOTO");
                              }}
                            />
                            <img
                              alt="waw"
                              src={pp ? pp : state?.user?.image}
                              className="rounded-lg w-[350px] h-[100%] border border-black"
                            />
                          </DialogBody>
                          <DialogFooter>
                            <Button
                              variant="text"
                              color="red"
                              onClick={handleOpen}
                              className="mr-1"
                            >
                              <span>Cancel</span>
                            </Button>
                            <Button
                              variant="gradient"
                              color="green"
                              onClick={handleOpen}
                              type="submit"
                            >
                              <span>Confirm</span>
                            </Button>
                          </DialogFooter>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Dialog>
          </div>
        </div>
      </div>

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
                  <div id="content" className="flex gap-2 justify-between">
                    <div className="w-[30%]">
                      <p className="text-xl font-extrabold">
                        {trans?.trip?.title}
                      </p>
                      <p className="text-sm text-[#959595]">
                        {trans?.trip?.country?.name_country}
                      </p>
                      <p className="text-sm text-[#FF9900] mt-8 w-[120px] text-center ">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={trans?.status}
                          color={
                            trans?.status === "success"
                              ? "green"
                              : trans?.status === "pending"
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
                    <div className="flex flex-col justify-center">
                      <img alt="waw" src={QR} className="" />
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
