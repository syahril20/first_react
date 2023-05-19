import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Detail from "./views/tourDetail";
import Image from "./assets/background.png";
import BackgroundBlur from "./assets/BackgroundBLur.png";
import NotFound from "./views/notFound";
import Nav from "./comp/navbar";
import Footer from "./comp/footer";
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
            path="/d"
            element={
              <Detail
                p={<img src={BackgroundBlur} alt="hehe" />}
                f={<Footer isHome={true} />}
                isPayment={false}
              />
            }
          />
          <Route
            exact
            path="/payment"
            element={
              <Detail
                p={<img src={BackgroundBlur} alt="hehe" />}
                f={<Footer isHome={true} />}
                isPayment={true}
              />
            }
          />
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
