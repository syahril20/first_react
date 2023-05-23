import { Dialog, Card, Typography } from "@material-tailwind/react";
import Palm1 from "../../assets/modPalm1.png";
import Palm2 from "../../assets/modPalm2.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [login, setLogin] = useState([]);
  const useLogin = (e) => {
    // e.preventDefault();
    login.email === "admin@admin"
      ? setLogin((a) => ({
          ...a,
          isAdmin: true,
        }))
      : login.email === "user@user"
      ? setLogin((a) => ({
          ...a,
          isUser: true,
        }))
      : alert("Tidak Ada");
      
    props.handleLogin();
  };
  // console.log(login, "data Login");
const Nav = useNavigate()
  useEffect(() => {
    if (login?.isAdmin) {
      
      localStorage.setItem("login", JSON.stringify(login));
      <Link to={Nav('/admin')}/>
    }
    if (login?.isUser) {
      localStorage.setItem("login", JSON.stringify(login));
    }
  }, [login, Nav]);

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
                  <form className="" onSubmit={useLogin}>
                    <div className="mb-5">
                      <label className="font-bold text-2xl">Email</label>
                      <input
                        onChange={(e) => {
                          setLogin({ ...login, email: e.target.value });
                          console.log(e.target.value);
                        }}
                        type="email"
                        className="w-full rounded border-none bg-[#D2D2D240] h-10"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="font-bold text-2xl">Password</label>
                      <input
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