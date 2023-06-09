import Pay from "../comp/pay";
import Payment from "../comp/payment";
import Profile from "../comp/profile";
import Tours from "../comp/tour";
import AddTrip from "./admin/addTrip";
import Admin from "./admin/admin";
import InTrip from "./admin/inTrip";



function TourDetail(props) {
  return (
    <div>
      {props.p}

      <div id="cardTour" className="">
        {props.pages === "detail" ? (
          <Tours/>
        ) : props.pages === "payment" ? (
          <Payment/>
        ) : props.pages === "profile" ? (
          <Profile/>
        ) : props.pages === "admin" ? (
          <Admin/>
        ) : props.pages === "inTrip" ? (
          <InTrip/>
        ) : props.pages === "addTrip" ? (
          <AddTrip/>
        ) : (
          <Pay/>
        )}
      </div>
      {props.f}
    </div>
  );
}
export default TourDetail;
