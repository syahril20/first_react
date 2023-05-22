import Search from "../../assets/search.png";
import Icon from "../../assets/IconBlack.png";
import TF from "../../assets/tf.png";
import { useEffect, useState } from "react";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Dialog,
  IconButton,
  Tooltip,
  Button,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "No",
  "Users",
  "Trip",
  "Bukti Transfer",
  "Status Payment",
  "Action",
];

const TABLE_ROWS = [
  {
    No: 1,
    Users: "Radif Ganteng",
    Gender: "Male",
    Phone: "083896833112",
    Trip: "6D/4N Fun Tassie Vaca ...",
    Place: "Australia",
    Bukti: "bca.jpg",
    Status: "Pending",
    Qty: "Qty",
    Jumlah: ": 1",
  },
  {
    No: 2,
    Users: "Haris Rahman",
    Gender: "Male",
    Phone: "083896833112",
    Trip: "6D/4N Exciting Summer...",
    Place: "South Korea",
    Bukti: "bni.jpg",
    Status: "Approve",
    Qty: "Qty",
    Jumlah: ": 1",
  },
  {
    No: 3,
    Users: "Amin Subagiyo",
    Gender: "Male",
    Phone: "083896833112",
    Trip: "6D/4N Fun Tassie Vaca ...",
    Place: "Australia",
    Bukti: "permata.jpg",
    Status: "Cancel",
    Qty: "Qty",
    Jumlah: ": 1",
  },
  {
    No: 4,
    Users: "Haris Astina",
    Gender: "Male",
    Phone: "083896833112",
    Trip: "6D/4N Wonderful Autum ...",
    Place: "South Korea",
    Bukti: "permata.jpg",
    Status: "Cancel",
    Qty: "Qty",
    Jumlah: ": 1",
  },
  {
    No: 5,
    Users: "Aziz Oni On",
    Gender: "Male",
    Phone: "083896833112",
    Trip: "6D/4N Magic Tokyo ...",
    Place: "Japan",
    Bukti: "bi.jpg",
    Status: "Pending",
    Qty: "Qty",
    Jumlah: ": 1",
  },
  {
    No: 6,
    Users: "Sugeng No Pants",
    Gender: "Male",
    Phone: "083896833112",
    Trip: "6D/4N Labuan Bajo ...",
    Place: "Indonesia",
    Bukti: "bni.jpg",
    Status: "Approve",
    Qty: "Qty",
    Jumlah: ": 1",
    Qty: "Qty",
    Jumlah: ": 1",
  },
];

export default function Admin(props) {
  const TABLE_HEADS = ["No", "Users", "Gender", "Phone", "", ""];
  const TABLE_ROWSS = [
    {
      No: 1,
      Users: "Radif Ganteng",
      Gender: "Male",
      Phone: "083896833112",
      Qty: "Qty",
      Jumlah: ": 1",
    },
    {
      No: "",
      Users: "",
      Gender: "",
      Phone: "",
      Qty: "TOTAL",
      Jumlah: `: IDR. ${props.data[0].price.toLocaleString("en-us")}`,
    },
  ];
  const [payOpen, setPayOpen] = useState(false);
  const [modal, setModal] = useState([]);
  // const update = () => {
  //   setModal(
  //     TABLE_ROWSS[0].No = 2
  //   )
  // }

  const handlePay = (para) => {
    setPayOpen((pay) => !pay);
    const id = TABLE_ROWS[para - 1];
    setModal(id);
    // console.log(id);
  };
  useEffect(() => {
    setModal(modal);
    console.log(modal);
  }, [handlePay]);

  // useEffect(()=>{
  // },[handlePay])
  const isLast = TABLE_ROWSS.length - 1;
  const classes = isLast
    ? "p-4 border-t border-[#B7B7B780] text-[#FF0000] "
    : "p-4 border-t border-[#B7B7B780] text-black text-lg";
  return (
    <div className="m-[10%]">
      <p className="text-3xl font-bold mb-3">Incoming Transaction</p>
      <Card className="h-full w-full">
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className=" pb-4 px-4 border-b border-[#C4C4C4]"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({ No, Users, Trip, Bukti, Status, Action }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-[#C4C4C4]";

                  return (
                    <tr key={No}>
                      <td className={`${classes} w-4`}>
                        <div className="flex items-center gap-3">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {No}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Users}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Trip}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Bukti}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={Status}
                            color={
                              Status === "Approve"
                                ? "green"
                                : Status === "Pending"
                                ? "yellow"
                                : "red"
                            }
                          />
                        </div>
                      </td>

                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton
                            variant="text"
                            color="blue-gray"
                            onClick={() => {
                              handlePay(No);
                            }}
                          >
                            <img src={Search} className="h-4 w-4" alt="Waw" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Dialog
        size="xl"
        open={payOpen}
        handler={handlePay}
        className="bg-transparent shadow-none"
      >
        <div className="mb-32">
          <div className=" bg-white ">
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
                      {props.data[0].title}
                    </p>
                    <p className="text-sm text-[#959595]">
                      {modal?.Place}
                    </p>
                    <p className="text-sm text-[#FF9900] mt-8 w-[120px] text-center ">
                    <Chip
                          size="sm"
                          variant="ghost"
                          value={modal?.Status}
                          color={
                            modal?.Status === "Approve" ? "green" : modal?.Status === "Pending" ? "amber" : "red"
                          }
                        />
                      
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
                      {TABLE_HEADS.map((head, idx) => (
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
                    <tr>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="text-[#B1B1B1] text-lg"
                        >
                          {modal?.No}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="text-[#B1B1B1] text-lg"
                        >
                          {modal?.Users}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="text-[#B1B1B1] text-lg"
                        >
                          {modal?.Gender}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="text-[#B1B1B1] text-lg"
                        >
                          {modal?.Phone}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="text-black text-lg font-bold"
                        >
                          Qty :
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          as="a"
                          className=" text-lg font-bold text-black"
                        >
                          {modal?.Jumlah}
                        </Typography>
                      </td>
                    </tr>
                    <tr>
                      <td className={classes}></td>
                      <td className={classes}></td>
                      <td className={classes}></td>
                      <td className={classes}></td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="text-black text-lg font-bold"
                        >
                          Total :
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          as="a"
                          className=" text-lg font-bold"
                        >
                          {props.data[0].price.toLocaleString("en-us")}
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-end gap-3 mr-4">
                  <div>
                    <Button className="bg-[#FF0742]" onClick={()=>{
                      setModal(modal.Status = "Cancel")
                      setPayOpen((pay) => !pay);
                    }}>Cancel</Button>
                  </div>
                  <div>
                    <Button className="bg-[#0ACF83]" onClick={()=>{
                      setModal(modal.Status = "Approve")
                      setPayOpen((pay) => !pay);
                    }}>Approve</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
