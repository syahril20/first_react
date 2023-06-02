import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./views/home";
import Detail from "./views/tourDetail";
import Image from "./assets/background.png";
import BackgroundBlur from "./assets/BackgroundBLur.png";
import NotFound from "./views/notFound";
import Nav from "./comp/navbar";
import Footer from "./comp/footer";

const login = JSON.parse(localStorage.getItem("login"));
const ProtectedRoute = ({ isLogin, redirectPath = "/" }) => {
  if (!isLogin) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};


function App() {

  return (
    <>
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
          <Route element={<ProtectedRoute isLogin={login?.isUser} />}>
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
          <Route element={<ProtectedRoute isLogin={login?.isAdmin} />}>
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
    </>
  );
}

export default App;
