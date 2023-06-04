import { Dialog, Card, Typography } from "@material-tailwind/react";
import Palm1 from "../../assets/modPalm1.png";
import Palm2 from "../../assets/modPalm2.png";
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { API, setAuthToken } from "../../config/api";
import { UserContext } from "../context/context";
import { useNavigate } from "react-router-dom";

function Login(props) {
  //   const { data: User } = useQuery("t", async () => {
  //   const response = await API.get("/users");
  //   return response?.data?.data;
  // })
  let navigate = useNavigate();
  const [_, dispatch] = useContext(UserContext);

  // const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const handleLogin = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/login", form);
      console.log("Login Success : ", response?.data?.data);
      alert("Login Sukses");
      props.handleLogin(false);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response?.data?.data,
      });

      setAuthToken(localStorage.token);
      console.log(localStorage.token, "WADUH");

      if (response.data.data.role_id === 1) {
        navigate("/admin");
      } else {
        navigate("/");
      }

      // if (response?.data?.data === "admin") {
      //   navigate("/complain-admin");
      // } else {
      //   navigate("/");
      // }

      console.log(form);
      // localStorage.setItem("login", JSON.stringify(form));
      // if (form?.role_id == 1) {
      //   // Nav('/admin')
      //   console.log("MANTAP");
      //   window.location.reload();
      // } else if (form?.role_id == 2) {
      //   localStorage.setItem("login", JSON.stringify(form));
      // }
      window.location.reload()
    } catch (error) {
      const response = await API.post("/login", form);
      console.log("register failed : ", response?.data?.data);
      alert("gagal");
    }
  });

  // const [login, setLogin] = useState([]);
  // const useLogin = (e) => {
  //   login.email === "admin@admin"
  //     ? setLogin((a) => ({
  //         ...a,
  //         isAdmin: true,
  //       }))
  //     : login.email === "user@user"
  //     ? setLogin((a) => ({
  //         ...a,
  //         isUser: true,
  //       }))
  //     : e.preventDefault();

  //   props.handleLogin();
  // };
  // console.log(login, "data Login");

  // useEffect(() => {

  // }, [form]);

  // useEffect(() => {
  //   const response = JSON.parse(localStorage.getItem("login"))
  //   if(response){
  //     setLogin(response)
  //   }
  //   console.log(response,'ini response');
  // },[])

  return (
    <>
      <Dialog
        size="md"
        open={props.logOpen}
        handler={props.handleLogin}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <div className="w-full max-w-sm max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <img src={Palm1} className="absolute right-0 top-0" alt="hehe" />
              <img src={Palm2} className="absolute left-0 top-0" alt="hehe" />
              <div className="p-10   space-y-6">
                <div className="my-10 h-[300px]">
                  <p className="text-center text-5xl mb-10">Login</p>
                  <form className="" onSubmit={(e) => handleLogin.mutate(e)}>
                    <div className="mb-5">
                      <label className="font-bold text-2xl">Email</label>
                      <input
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          console.log(e.target.value);
                        }}
                        value={email}
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
                        value={password}
                        type="password"
                        className="w-full rounded border-none bg-[#D2D2D240] h-10"
                      />
                    </div>

                    <button className="text-center w-full bg-[#FFAF00] mb-1 py-2 rounded-sm text-white font-bold">
                      Login
                    </button>
                    <Typography
                      variant="small"
                      className="mt-6 flex justify-center"
                    >
                      Don&apos;t have an account?
                      <Typography
                        as="a"
                        href="#signup"
                        variant="small"
                        color="blue"
                        className="ml-1 font-bold"
                        onClick={props.handleRegister}
                      >
                        Sign up
                      </Typography>
                    </Typography>
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
export default Login;
