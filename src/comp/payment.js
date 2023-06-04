import { useContext, useEffect, useState } from "react";
import Icon from "../assets/IconBlack.png";
import TF from "../assets/tf.png";
import { Card, Dialog, Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { UserContext } from "./context/context";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
const Trans = JSON.parse(localStorage.getItem("Trans"));

function Payment(props) {
  const [james1, jesica1] = useState();
  const [james2, jesica2] = useState();

  console.log(james1, james2, "COBAIN");
  useEffect(() => {
    jesica1(Trans?.qty);
    jesica2(Trans?.total);
  }, [Trans?.qty, Trans?.total]);

  const [state] = useContext(UserContext);
  console.log(state?.user, "INI DATA");

  const TABLE_HEAD = ["No", "Full Name", "Gender", "Phone", "", ""];
  console.log(props);
  const TABLE_ROWS = [
    {
      No: 1,
      FullName: Trans?.user?.name,
      Gender: "Male",
      Phone: Trans?.user?.phone,
      Qty: "Qty",
      Jumlah: `: ${james1}`,
    },
    {
      No: "",
      FullName: "",
      Gender: "",
      Phone: "",
      Qty: "TOTAL",
      Jumlah: `: IDR. ${james2?.toLocaleString("en-us")}`,
    },
  ];

  const [payOpen, setPayOpen] = useState(false);
  const handlePay = () => {
    setPayOpen((pay) => !pay);
  };

  const par = useParams();
  console.log(par, "INI DATAPERTE");

  const [Trip, setTrips] = useState();
  const { data: Trips } = useQuery("t", async () => {
    const response = await API.get(`/trip/${par.id}`);
    return setTrips(response?.data?.data);
  });

  console.log(Trip, "INI ANJAY");

  const [trip, setTrip] = useState({
    counter_qty: "",
    total: "",
    status: "",
    attachment: "",
    id_trip: "",
  });
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.set("counter_qty", trip?.counter_qty);
      formData.set("total", trip?.total);
      formData.set("status", trip?.status);
      formData.set("attachment", trip?.attachment);
      formData.set("id_trip", trip?.id_trip);
      // setTrip({
      //   title: "",
      //   country: "",
      //   accomodation: "",
      //   transportation: "",
      //   eat: "",
      //   day: "",
      //   night: "",
      //   price: "",
      //   quota: "",
      //   description: "",
      //   image: "",
      // });
      const response = await API.post("/transaction", formData, config);
      console.log("Add Trip success : ", response);
      alert("Data Added");
    } catch (error) {
      console.log("Add Trip failed : ", error);
      alert("gagal");
    }
  });

  useEffect(() => {
    setTrip({ 
      ...Trip,
      counter_qty: Trans?.qty,
      total: Trans?.total,
      status: "Waiting Approve",
      attachment: "kosong",
      id_trip: Trans?.trip?.id_trip,
    });
  }, [Trans]);
  console.log(Trip, "OTW TRANSACTION");

  return (
    <>
      <div className="my-[10%] mx-[10%]">
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
                    <b>{Trans?.day_now}</b>, {Trans?.date_now}
                  </p>
                </div>
              </div>
              <div id="content" className="flex gap-5 justify-between">
                <div>
                  <p className="text-xl font-extrabold">{Trans?.trip?.title}</p>
                  <p className="text-sm text-[#959595]">
                    {Trans?.trip?.country?.name_country}
                  </p>
                  <p className="text-sm text-[#EC7A7A] mt-8 w-[120px] text-center bg-[#ec7a7a67]">
                    {Trans?.status}
                  </p>
                </div>
                <div className="flex flex-wrap w-[300px] gap-8">
                  <div>
                    <div className="mb-6">
                      <label className="font-extrabold">Date Trip</label>
                      <p className="text-sm text-[#959595]">
                        {Trans?.trip?.date_trip}
                      </p>
                    </div>
                    <div>
                      <label className="font-extrabold">Accomodation</label>
                      <p className="text-sm text-[#959595]">
                        {Trans?.trip?.accomodation}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-6">
                      <label className="font-extrabold">Duration</label>
                      <p className="text-sm text-[#959595]">
                        {Trans?.trip?.day} Day {Trans?.trip?.night} Night
                      </p>
                    </div>
                    <div>
                      <label className="font-extrabold">transportation</label>
                      <p className="text-sm text-[#959595]">
                        {Trans?.trip?.transportation}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <img alt="waw" src={TF} className="border-2 border-black" />
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
        </div>

        <div className="flex justify-end">
          <button
            onClick={(e) => handleSubmit.mutate(e)}
            // onClick={handlePay}
            // onClick={props.isLogin === true ? paym : handleLogin}
            className="mt-5 text-white font-semibold border border-[#FFAF00] rounded px-12 py-3 ml-2 bg-[#FFAF00]"
          >
            PAY
          </button>
        </div>
      </div>
      <Dialog
        size="lg"
        open={payOpen}
        handler={handlePay}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full">
          <div className=" max-h-full px-28">
            <p className="text-center text-2xl text-black">
              Your payment will be confirmed within 1 x 24 hours To see orders
              click{" "}
              <a href="/pay" className="underline font-bold">
                Here
              </a>{" "}
              thank you
            </p>
          </div>
        </Card>
      </Dialog>
    </>
  );
}
export default Payment;
