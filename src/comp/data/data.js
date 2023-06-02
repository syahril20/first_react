
import { createContext, useContext } from "react";

//  const {data : User} = () =>
//   useQuery("t", async () => {
//     const response = await API.get("/users");
//     return response?.data?.data;
//   });


export const UsersContext = createContext()

export const useUsers = () => {
  return useContext (UsersContext)
}

export const UsersProvider = ({ children }) => {

}


console.log(Users);
