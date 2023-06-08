import image from "../assets/Icon.png";
import profil from "../assets/Avatar.png";
import Register from "./modals/register";
import Login from "./modals/login";
import logoutIcon from "../assets/logout.png";
import payIcon from "../assets/bill.png";
import profileIcon from "../assets/user.png";
import Jour from "../assets/journey.png";
import { useState, Fragment, useContext } from "react";

import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Avatar,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/context";
export default function Nav() {
  const Navi = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logOpen, setLogOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);

  const handleLogin = () => {
    setLogOpen((log) => !log);
  };
  const handleRegister = () => {
    setRegOpen((reg) => !reg);
    setLogOpen(false);
  };

  // console.log(logins, "Navbar");
  const [state, dispatch] = useContext(UserContext);
  const handleLogout = () => {

    dispatch({
      type: "LOGOUT"
    })
  };

  console.log(state.user, "KIPAK");

  return (
    <div className="absolute z-10 w-full">
      <div>
        <div className="z-20 flex items-center justify-between w-full px-20 bg-cover">
          <div id="left-nav" className="filter brightness-125">
            <a href={state.user.role_id === 1 ? "/admin" : "/"}>
              <img src={image} alt="me" />
            </a>
          </div>
          <div id="right-nav" className="flex items-center">
            <div className="">
              <Fragment>
                {state.user.role_id === 2 ? (
                  <div className="relative mx-auto flex items-center text-blue-gray-900">
                    <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block"></div>

                    <Menu
                      open={isMenuOpen}
                      handler={setIsMenuOpen}
                      placement="bottom-end"
                    >
                      <MenuHandler>
                        <Button
                          variant="text"
                          color="blue-gray"
                          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                        >
                          <Avatar
                            variant="circular"
                            size="sm"
                            alt="candice wu"
                            className=""
                            src={profil}
                          />
                          <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform ${
                              isMenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </MenuHandler>
                      <MenuList className="flex flex-col gap-2 justify-start">
                        <div className="flex">
                          <button
                            onClick={() => {
                              Navi("/profile");
                            }}
                            className="flex items-center gap-4"
                          >
                            <img src={profileIcon} alt="waw" />
                            <p className="font-bold text-black text-base">
                              Profile
                            </p>
                          </button>
                        </div>
                        <div className="flex">
                          <button
                            onClick={() => {
                              Navi("/pay");
                            }}
                            className="flex items-center gap-4"
                          >
                            <img src={payIcon} alt="waw" />
                            <p className="font-bold text-black text-base">
                              Pay
                            </p>
                          </button>
                        </div>
                        <div className="border border-black w-full" />
                        <div className="flex">
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-4"
                          >
                            <img src={logoutIcon} alt="waw" />
                            <p className="font-bold text-black text-base">
                              Logout
                            </p>
                          </button>
                        </div>
                      </MenuList>
                    </Menu>
                  </div>
                ) : state.user.role_id === 1 ? (
                  <div className="relative mx-auto flex items-center text-blue-gray-900">
                    <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block"></div>

                    <Menu
                      open={isMenuOpen}
                      handler={setIsMenuOpen}
                      placement="bottom-end"
                    >
                      <MenuHandler>
                        <Button
                          variant="text"
                          color="blue-gray"
                          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                        >
                          <Avatar
                            variant="circular"
                            size="sm"
                            alt="candice wu"
                            className=""
                            src={profil}
                          />
                          <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform ${
                              isMenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </MenuHandler>
                      <MenuList className="flex flex-col gap-2 justify-start">
                        <div className="flex">
                          <button
                            onClick={() => {
                              Navi("/in-trip");
                            }}
                            className="flex items-center gap-4"
                          >
                            <img src={Jour} alt="waw" />
                            <p className="font-bold text-black text-base">
                              Trip
                            </p>
                          </button>
                        </div>
                        <div className="border border-black w-full" />
                        <div className="flex">
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-4"
                          >
                            <img src={logoutIcon} alt="waw" />
                            <p className="font-bold text-black text-base">
                              Logout
                            </p>
                          </button>
                        </div>
                      </MenuList>
                    </Menu>
                  </div>
                ) : (
                  <div>
                    {/* LOGIN BUTTON */}
                    <button
                      onClick={handleLogin}
                      className="text-white font-semibold border border-white rounded px-6 py-1"
                    >
                      Login
                    </button>

                    {/* REGISTER BUTTON */}
                    <button
                      onClick={handleRegister}
                      className="text-white font-semibold border border-[#FFAF00] rounded px-6 py-1 ml-2 bg-[#FFAF00]"
                    >
                      Register
                    </button>
                  </div>
                )}

                {/* MODALS LOGIN */}
                <Login
                  logOpen={logOpen}
                  handleLogin={handleLogin}
                  handleRegister={handleRegister}
                />

                {/* MODALS REGISTER */}
                <Register regOpen={regOpen} handleRegister={handleRegister} />
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default Nav;
