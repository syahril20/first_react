import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/home";
import Detail from "./views/tourDetail";
import Image from "./assets/background.png";
import BackgroundBlur from "./assets/BackgroundBLur.png";
import NotFound from "./views/notFound";
import Nav from "./comp/navbar";
import Footer from "./comp/footer";
import { UserContext } from "./comp/context/context";
import { useContext, useEffect, useState } from "react";
import { API, setAuthToken } from "./config/api";
import {
  PrivateRouteLogin,
  PrivateRouteUser,
  PrivateRouteAdmin,
} from "./comp/privateRoute";

function App() {
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  console.log(state?.user.role_id, "CUK");
  const checkUser = async () => {
    try {
      const response = await API.get("/users");
      console.log("check user success : ", response);
      // Get user data
      let payload = response.data.data;
      console.log(response, "INI PAYLOAD");
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? null : (
        <Router>
          <Nav />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  p={
                    <div className="filter brightness-75">
                      <img src={Image} alt="hehe" />
                    </div>
                  }
                />
              }
            />
            <Route
              exact
              path="/detail/:id"
              element={
                <Detail
                  p={<img src={BackgroundBlur} alt="hehe" />}
                  f={<Footer isHome={true} />}
                  pages="detail"
                />
              }
            />
            {/* Users Private*/}
            <Route element={<PrivateRouteLogin />}>
              <Route element={<PrivateRouteUser />}>
                <Route
                  path="/"
                  element={
                    <Home
                      p={
                        <div className="filter brightness-75">
                          <img src={Image} alt="hehe" />
                        </div>
                      }
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Detail
                      p={<img src={BackgroundBlur} alt="hehe" />}
                      f={<Footer isHome={true} />}
                      pages="profile"
                    />
                  }
                />
                <Route
                  exact
                  path="/pay"
                  element={
                    <Detail
                      p={<img src={BackgroundBlur} alt="hehe" />}
                      f={<Footer isHome={true} />}
                      pages="pay"
                    />
                  }
                />
                <Route
                  exact
                  path="/payment/:id"
                  element={
                    <Detail
                      p={<img src={BackgroundBlur} alt="hehe" />}
                      f={<Footer isHome={true} />}
                      pages="payment"
                    />
                  }
                />
              </Route>

              {/* ADMIN */}
              <Route element={<PrivateRouteAdmin />}>
                <Route
                  exact
                  path="/admin"
                  element={
                    <Detail
                      p={<img src={BackgroundBlur} alt="hehe" />}
                      f={<Footer isHome={true} />}
                      pages="admin"
                    />
                  }
                />
                <Route
                  exact
                  path="/in-trip"
                  element={
                    <Detail
                      p={<img src={BackgroundBlur} alt="hehe" />}
                      f={<Footer isHome={true} />}
                      pages="inTrip"
                    />
                  }
                />
                <Route
                  exact
                  path="/add-trip"
                  element={
                    <Detail
                      p={<img src={BackgroundBlur} alt="hehe" />}
                      f={<Footer isHome={true} />}
                      pages="addTrip"
                    />
                  }
                />
              </Route>
            </Route>

            {/* NOTFOUND */}
            <Route
              exact
              path="*"
              element={
                <NotFound
                  p={<img src={BackgroundBlur} alt="hehe" />}
                  f={<Footer />}
                />
              }
            />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
