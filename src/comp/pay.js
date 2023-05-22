
import Icon from "../assets/IconBlack.png";
import TF from "../assets/tf.png";
import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
export default function Pay(props){
    const TABLE_HEAD = ["No", "Full Name", "Gender", "Phone", "", ""];
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
          Jumlah: `: IDR. ${props.data[0].price.toLocaleString("en-us")}`,
        },
      ];
    
  
    
      const par = useParams();
      console.log(par, "INI DATAPERTE");
    return(
        <>
        <div className="mt-[10%] mx-[10%] mb-32">
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
                  <p className="text-xl font-extrabold">{props.data.title}</p>
                  <p className="text-sm text-[#959595]">{props.data.place}</p>
                  <p className="text-sm text-[#FF9900] mt-8 w-[120px] text-center bg-[#ff990070]">
                    Waiting Approve
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

        
      </div>
        </>
    )
} 