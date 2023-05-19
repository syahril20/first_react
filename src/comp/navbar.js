import image from "../assets/Icon.png";
import Register from "./modals/register";
import Login from "./modals/login";


import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
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
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 

 



 
function Navs() {
  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          
        </div>
        
        <ProfileMenu />
      </div>
      
    </Navbar>
  );
}


export default function Nav(props) {
  const [logOpen, setLogOpen] = React.useState(false);
  const [regOpen, setRegOpen] = React.useState(false);
  const handleLogin = () => {
    setLogOpen((log) => !log);
    setRegOpen(false);
  };
  const handleRegister = () => {
    setRegOpen((reg) => !reg);
    setLogOpen(false);
  };
  return (
    <div className="absolute z-10 w-full">
    <div>
      <div className="z-20 flex items-center justify-between w-full px-20 bg-cover">
        <div id="left-nav" className="filter brightness-125">
          <a href="/">
            <img src={image} alt="me" />
          </a>
        </div>
        <div id="right-nav" className="flex items-center">
          <div className="">

            <React.Fragment>
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

              {/* MODALS LOGIN */}
              <Login logOpen={logOpen} handleLogin={handleLogin} handleRegister={handleRegister}/>

              {/* MODALS REGISTER */}
              <Register regOpen={regOpen} handleRegister={handleRegister}/>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  );
}
// export default Nav;
