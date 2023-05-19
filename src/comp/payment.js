import { useState } from "react";
import Icon from "../assets/IconBlack.png";
import TF from "../assets/tf.png";
import { Card, Dialog, Typography } from "@material-tailwind/react";
function Payment(props) {
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
      Jumlah: ": " + props.data.price,
    },
  ];

  const [payOpen, setPayOpen] = useState(false);
  const handlePay = () => {
    setPayOpen((pay) => !pay);
  };
  return (
    <>
      <div className="my-[10%] mx-[10%]">
        <div className=" bg-white">
          <div className="border border-black rounded-lg py-4">
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
                  <p className="text-xl font-extrabold">{props.data.title}</p>
                  <p className="text-sm text-[#959595]">{props.data.place}</p>
                  <p className="text-sm text-[#EC7A7A] pt-8">
                    {props.data.isStatus}
                  </p>
                </div>
                <div className="flex flex-wrap w-[300px] gap-8">
                  <div>
                    <div className="mb-6">
                      <label className="font-extrabold">Date Trip</label>
                      <p className="text-sm text-[#959595]">
                        {props.data.dateTrip}
                      </p>
                    </div>
                    <div>
                      <label className="font-extrabold">Accomodation</label>
                      <p className="text-sm text-[#959595]">
                        {props.data.acomodation}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-6">
                      <label className="font-extrabold">Duration</label>
                      <p className="text-sm text-[#959595]">
                        {props.data.duration}
                      </p>
                    </div>
                    <div>
                      <label className="font-extrabold">transportation</label>
                      <p className="text-sm text-[#959595]">
                        {props.data.transportation}
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
                      return (
                        <tr key={idx}>
                          <td className="p-4 border-t border-black">
                            <Typography
                              variant="small"
                              className="text-[#B1B1B1] text-lg"
                            >
                              {No}
                            </Typography>
                          </td>
                          <td className="p-4 border-t border-black">
                            <Typography
                              variant="small"
                              className="text-[#B1B1B1] text-lg"
                            >
                              {FullName}
                            </Typography>
                          </td>
                          <td className="p-4 border-t border-black">
                            <Typography
                              variant="small"
                              className="text-[#B1B1B1] text-lg"
                            >
                              {Gender}
                            </Typography>
                          </td>
                          <td className="p-4 border-t border-black">
                            <Typography
                              variant="small"
                              className="text-[#B1B1B1] text-lg"
                            >
                              {Phone}
                            </Typography>
                          </td>
                          <td className="p-4 border-t border-black">
                            <Typography
                              variant="small"
                              className="text-black text-lg font-bold"
                            >
                              {Qty}
                            </Typography>
                          </td>
                          <td className="p-4 border-t border-black">
                            <Typography
                              variant="small"
                              className="text-[#FF0000] text-lg font-bold"
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
            onClick={handlePay}
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
              <a href="" className="underline font-bold">
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
