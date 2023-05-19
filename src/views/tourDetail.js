import Tours from "../comp/tour";
import pic1 from "../assets/content1.png";
import caro1 from "../assets/caro1.png";
import caro2 from "../assets/caro2.png";
import caro3 from "../assets/caro3.png";
import caro4 from "../assets/caro4.png";
import Payment from "../comp/payment";

const Tour = [
  {
    id: 1,
    img: pic1,
    caro1: caro1,
    caro2: caro2,
    caro3: caro3,
    caro4: caro4,
    title: "6D/4N Fun Tassie Vacation",
    fTitle: "6D/4N Fun Tassie Vacation + Sydney",
    price: "IDR. 12,398,000",
    place: "Australia",
    pages: "12/15",
    acomodation: "Hotel 4 Night",
    transportation: "Qatar Airways",
    eat: "Included as Itinerary",
    duration: "6 days 4 night",
    dateTrip: "26 August 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore. Tempora sunt doloremque officiis adipisci. Nam iusto, doloremque beatae unde dignissimos voluptatem nesciunt dolore aut consectetur sequi? Ipsam, in iste corrupti hic laborum non aperiam, nihil delectus error esse consequatur, consequuntur voluptatibus natus officia deleniti eligendi incidunt dolor reprehenderit facilis.",
    qty: 1,
    isStatus: "Waiting Payment",
  },
];
const isLogin = true;
function TourDetail(props) {
  return (
    <div>
      {props.p}

      <div id="cardTour" className="">
        {props.isPayment === true
          ? Tour.map((tour, idx) => {
              return <Payment key={idx} data={tour} isLogin={isLogin} />;
            })
          : Tour.map((tour, idx) => {
              return <Tours key={idx} data={tour} isLogin={isLogin} />;
            })}
      </div>
      {props.f}
    </div>
  );
}
export default TourDetail;
