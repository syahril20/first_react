import { Dialog, Card } from "@material-tailwind/react";
import Palm1 from "../../assets/modPalm1.png";
import Palm2 from "../../assets/modPalm2.png";
import { useMutation } from "react-query";
import { API } from "../../config/api";
import { useState } from "react";
import Swal from "sweetalert2";

function Register(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role_id: 2,
  });
  
  const handleRegister = useMutation(async (e) => {
    try {
      e.preventDefault();
      
      const response = await API.post("/register", form);
      console.log("register success : ", response?.data?.data);
      props.handleRegister(false)
      Swal.fire("REGISTER SUKSES")
      setForm({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      console.log("register failed : ", error);
      Swal.fire("gagal")
    }
  });
  return (
    <>
      <Dialog
        size="md"
        open={props.regOpen}
        handler={props.handleRegister}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <div className="relative w-full max-w-sm max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <img src={Palm1} className="absolute right-0 top-0" alt="hehe" />
              <img src={Palm2} className="absolute left-0 top-0" alt="hehe" />
              <div className="p-6 space-y-6 overflow-scroll no-scrollbar">
                <div className="my-10 h-[300px]">
                  <p className="text-center text-5xl mb-10">Register</p>
                  <form 
                  
                  className="" onSubmit={(e) => handleRegister.mutate(e)}>
                    <div className="mb-5">
                      <label className="font-bold text-2xl">Full Name</label>
                      <input
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          console.log(e.target.value);
                        }}
                        type="text"
                        className="w-full rounded border-none bg-[#D2D2D240] h-10"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="font-bold text-2xl">Email</label>
                      <input
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          console.log(e.target.value);
                        }}
                        type="email"
                        className="w-full rounded border-none bg-[#D2D2D240] h-10"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="font-bold text-2xl">Password</label>
                      <input
                        onChange={(e) => {
                          setForm({ ...form, password: e.target.value });
                          console.log(e.target.value);
                        }}
                        type="password"
                        className="w-full rounded border-none bg-[#D2D2D240] h-10"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="font-bold text-2xl">Phone</label>
                      <input
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          console.log(e.target.value);
                        }}
                        type="text"
                        className="w-full rounded border-none bg-[#D2D2D240] h-10"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="font-bold text-2xl">Address</label>
                      <textarea
                        onChange={(e) => {
                          setForm({ ...form, address: e.target.value });
                          console.log(e.target.value);
                        }}
                        type="text"
                        className="w-full rounded resize-none border-none bg-[#D2D2D240] h-10"
                      />
                    </div>
                    <button className="text-center w-full bg-[#FFAF00] mb-5 py-2 rounded-sm text-white font-bold"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Dialog>
    </>
  );
}
export default Register;
