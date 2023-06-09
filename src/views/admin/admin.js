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
import { useMutation, useQuery, useQueryClient } from "react-query";
import { API } from "../../config/api";
import Swal from "sweetalert2";

const TABLE_HEAD = [
  "No",
  "Users",
  "Trip",
  "Bukti Transfer",
  "Status Payment",
  "Action",
];

export default function Admin(props) {
  const TABLE_HEADS = ["No", "Users", "Gender", "Phone", "", ""];

  const [payOpen, setPayOpen] = useState(false);
  const [modal, setModal] = useState([]);

  const queryClient = useQueryClient()

  const classes = "p-4 border-t border-[#B7B7B780] text-black text-lg";
  const [Users, setUsers] = useState([]);
  const { _ } = useQuery("t", async () => {
    const response = await API.get("/transaction");
    return setUsers(response?.data?.data);
  });
  const Trans = Users;

  const [Trip, setTrip] = useState({});
  const { boleh } = useQuery("Trip", async () => {
    const response = await API.get("/trip");
    return setTrip(response?.data?.data);
  });  

  console.log(modal?.counter_qty, "Data Modal");
  console.log(modal?.trip, "DATA Trip");
  // console.log(modal.current_quota, "TRIP");

  const handlePay = (para) => {
    setPayOpen((pay) => !pay);
    const id = Trans[para];
    setModal(id);
  };

  const handleApprove = useMutation(async (id_trans) => {
    
    try {
      // e.preventDefault();
      const formData = new FormData();
      const count = modal?.trip?.current_quota + modal?.counter_qty;
      if (modal.status === "Cancel") {
        formData.set("status", modal.status);
        const response = await API.patch(`/transaction/${id_trans}`, formData);
        let timerInterval;
        Swal.fire({
          title: "DATA CANCELED",
          timer: 2000,
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      } else if (modal.status === "Approve" && count <= modal?.trip?.quota) {
        formData.set("status", modal.status);
        const formTrip = new FormData();
        formTrip.set(
          "current_quota",
          modal?.trip?.current_quota + modal?.counter_qty
        );
        const response = await API.patch(`/transaction/${id_trans}`, formData);
        const res = await API.patch(`/trip/${modal?.id_trip}`, formTrip);
        setTrip({});
        let timerInterval;
        Swal.fire({
          title: "DATA ADDED",
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      } else {
        let timerInterval;
        Swal.fire({
          title: "PENUH PAK!!!",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      }
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
              {Users?.map((user, idx) => {
                const classes = "p-4 border-b border-[#C4C4C4]";
                return (
                  <tr key={idx}>
                    <td className={`${classes} w-4`}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {idx + 1}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user?.user?.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user?.trip?.title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user?.attachment}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={user?.status}
                          color={
                            user?.status === "Approve"
                              ? "green"
                              : user?.status === "Pending"
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
                            handlePay(idx);
                          }}
                        >
                          <img src={Search} className="h-4 w-4" alt="Waw" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
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
                      {modal?.trip?.title}
                    </p>
                    <p className="text-sm text-[#959595]">
                      {modal?.trip?.country?.name_country}
                    </p>
                    <p className="text-sm text-[#FF9900] mt-8 w-[120px] text-center ">
                      <Chip
                        size="sm"
                        variant="ghost"
                        value={modal?.status}
                        color={
                          modal?.status === "Approve"
                            ? "green"
                            : modal?.status === "Pending"
                            ? "amber"
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
                          {modal?.trip?.date_trip}
                        </p>
                      </div>
                      <div>
                        <label className="font-extrabold">Accomodation</label>
                        <p className="text-sm text-[#959595]">
                          {modal?.trip?.accomodation}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="mb-6">
                        <label className="font-extrabold">Duration</label>
                        <p className="text-sm text-[#959595]">
                          {modal?.trip?.day} Day {modal?.trip?.night} Night
                        </p>
                      </div>
                      <div>
                        <label className="font-extrabold">transportation</label>
                        <p className="text-sm text-[#959595]">
                          {modal?.trip?.transportation}
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
                          1
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="text-[#B1B1B1] text-lg"
                        >
                          {modal?.user?.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="text-[#B1B1B1] text-lg"
                        >
                          male
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="text-[#B1B1B1] text-lg"
                        >
                          {modal?.user?.phone}
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
                          {modal?.counter_qty}
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
                          {modal?.total?.toLocaleString("en-us")}
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-end gap-3 mr-4">
                  <div>
                    <Button
                      className="bg-[#FF0742]"
                      onClick={() => {
                        setModal((modal.status = "Cancel"));
                        setPayOpen((pay) => !pay);
                        handleApprove.mutate(modal?.id_trans);
                        console.log(modal);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button
                      className="bg-[#0ACF83]"
                      onClick={(e) => {
                        setModal((modal.status = "Approve"));
                        setPayOpen((pay) => !pay);
                        handleApprove.mutate(modal.id_trans);
                      }}
                    >
                      Approve
                    </Button>
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
