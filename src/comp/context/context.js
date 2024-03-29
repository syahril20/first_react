import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: {},
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "USER_SUCCESS":

    case "LOGIN_SUCCESS":
      // Set localstorage item with key "token" here ...
      localStorage.setItem("token", payload.token);
      console.log(payload.role_id);
      

      return {
        isLogin: true,
        user: payload,
      };
    case "AUTH_ERROR":
      localStorage.removeItem("Trans");
      localStorage.removeItem("token");
      window.location.reload()
    case "LOGOUT":
      // Remove localstorage item with key "token" here ...
      localStorage.removeItem("token");
      localStorage.removeItem("Trans");
      window.location.reload();

      return {
        isLogin: false,
        user: {},
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
