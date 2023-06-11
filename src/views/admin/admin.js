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
  "Status Payment",
];

export default function Admin(props) {
  const TABLE_HEADS = ["No", "Users", "Gender", "Phone", "", ""];

  const [payOpen, setPayOpen] = useState(false);
  const [modal, setModal] = useState([]);


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
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={user?.status}
                          color={
                            user?.status === "success"
                              ? "green"
                              : user?.status === "pending"
                              ? "yellow"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      
    </div>
  );
}
