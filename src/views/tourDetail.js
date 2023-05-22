import Tours from "../comp/tour";
import caro1 from "../assets/caro1.png";
import caro2 from "../assets/caro2.png";
import caro3 from "../assets/caro3.png";
import caro4 from "../assets/caro4.png";
import Payment from "../comp/payment";
import { useEffect, useState } from "react";
import Profile from "../comp/profile";
import { useParams } from "react-router-dom";
import Pay from "../comp/pay";
import Admin from "./admin/admin";
import InTrip from "./admin/inTrip";
import AddTrip from "./admin/addTrip";

// const Tour = [
//   {
//     id: 1,
//     img: pic1,
//     caro1: caro1,
//     caro2: caro2,
//     caro3: caro3,
//     caro4: caro4,
//     title: "6D/4N Fun Tassie Vacation",
//     fTitle: "6D/4N Fun Tassie Vacation + Sydney",
//     price: "IDR. 12,398,000",
//     prices: 12398000,
//     place: "Australia",
//     pages: "12/15",
//     acomodation: "Hotel 4 Night",
//     transportation: "Qatar Airways",
//     eat: "Included as Itinerary",
//     duration: "6 days 4 night",
//     dateTrip: "26 August 2020",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore. Tempora sunt doloremque officiis adipisci. Nam iusto, doloremque beatae unde dignissimos voluptatem nesciunt dolore aut consectetur sequi? Ipsam, in iste corrupti hic laborum non aperiam, nihil delectus error esse consequatur, consequuntur voluptatibus natus officia deleniti eligendi incidunt dolor reprehenderit facilis.",
//     qty: 1,
//     isStatus: "Waiting Payment",
//   },
// ];

const TourData = [
  {
    id: "1",
    caro1: caro1,
    caro2: caro2,
    caro3: caro3,
    caro4: caro4,
    title: "6D/4N Fun Tassie Vacation ...",
    fTitle: "6D/4N Fun Tassie Vacation + Sydney",
    price: 12398000,
    place: "Australia",
    pages: "12/15",
    acomodation: "Hotel 4 Night",
    transportation: "Qatar Airways",
    eat: "Included as Itinerary",
    duration: "6 days 4 night",
    dateTrip: "26 August 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore. Tempora sunt doloremque officiis adipisci. Nam iusto, doloremque beatae unde dignissimos voluptatem nesciunt dolore aut consectetur sequi? Ipsam, in iste corrupti hic laborum non aperiam, nihil delectus error esse consequatur, consequuntur voluptatibus natus officia deleniti eligendi incidunt dolor reprehenderit facilis.",
  },
  {
    id: "2",
    caro1: caro1,
    caro2: caro2,
    caro3: caro3,
    caro4: caro4,
    title: "6D/4N Exciting Summer in ...",
    fTitle: "6D/4N Exciting Summer",
    price: 10288000,
    place: "Australia",
    pages: "12/15",
    acomodation: "Hotel 4 Night",
    transportation: "Qatar Airways",
    eat: "Included as Itinerary",
    duration: "6 days 4 night",
    dateTrip: "26 August 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore. Tempora sunt doloremque officiis adipisci. Nam iusto, doloremque beatae unde dignissimos voluptatem nesciunt dolore aut consectetur sequi? Ipsam, in iste corrupti hic laborum non aperiam, nihil delectus error esse consequatur, consequuntur voluptatibus natus officia deleniti eligendi incidunt dolor reprehenderit facilis.",
  },
  {
    id: "3",
    caro1: caro1,
    caro2: caro2,
    caro3: caro3,
    caro4: caro4,
    title: "8D/6N Wonderful Autum ...",
    fTitle: "8D/6N Wonderful Autum",
    price: 28999000,
    place: "Australia",
    pages: "12/15",
    acomodation: "Hotel 4 Night",
    transportation: "Qatar Airways",
    eat: "Included as Itinerary",
    duration: "6 days 4 night",
    dateTrip: "26 August 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore. Tempora sunt doloremque officiis adipisci. Nam iusto, doloremque beatae unde dignissimos voluptatem nesciunt dolore aut consectetur sequi? Ipsam, in iste corrupti hic laborum non aperiam, nihil delectus error esse consequatur, consequuntur voluptatibus natus officia deleniti eligendi incidunt dolor reprehenderit facilis.",
  },
  {
    id: "4",
    caro1: caro1,
    caro2: caro2,
    caro3: caro3,
    caro4: caro4,
    title: "4D/3N Overland Jakarta B...",
    fTitle: "4D/3N Overland Jakarta",
    price: 3188000,
    place: "Australia",
    pages: "12/15",
    acomodation: "Hotel 4 Night",
    transportation: "Qatar Airways",
    eat: "Included as Itinerary",
    duration: "6 days 4 night",
    dateTrip: "26 August 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore. Tempora sunt doloremque officiis adipisci. Nam iusto, doloremque beatae unde dignissimos voluptatem nesciunt dolore aut consectetur sequi? Ipsam, in iste corrupti hic laborum non aperiam, nihil delectus error esse consequatur, consequuntur voluptatibus natus officia deleniti eligendi incidunt dolor reprehenderit facilis.",
  },
  {
    id: "5",
    caro1: caro1,
    caro2: caro2,
    caro3: caro3,
    caro4: caro4,
    title: "4D/3N Labuan Bajo Delight",
    fTitle: "4D/3N Labuan Bajo Delight",
    price: 10488000,
    place: "Australia",
    pages: "12/15",
    acomodation: "Hotel 4 Night",
    transportation: "Qatar Airways",
    eat: "Included as Itinerary",
    duration: "6 days 4 night",
    dateTrip: "26 August 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore. Tempora sunt doloremque officiis adipisci. Nam iusto, doloremque beatae unde dignissimos voluptatem nesciunt dolore aut consectetur sequi? Ipsam, in iste corrupti hic laborum non aperiam, nihil delectus error esse consequatur, consequuntur voluptatibus natus officia deleniti eligendi incidunt dolor reprehenderit facilis.",
  },
  {
    id: "6",
    caro1: caro1,
    caro2: caro2,
    caro3: caro3,
    caro4: caro4,
    title: "5D/4N Magic Tokyo Fun",
    fTitle: "5D/4N Magic Tokyo Fun",
    price: 11188000,
    place: "Australia",
    pages: "12/15",
    acomodation: "Hotel 4 Night",
    transportation: "Qatar Airways",
    eat: "Included as Itinerary",
    duration: "6 days 4 night",
    dateTrip: "26 August 2020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore. Tempora sunt doloremque officiis adipisci. Nam iusto, doloremque beatae unde dignissimos voluptatem nesciunt dolore aut consectetur sequi? Ipsam, in iste corrupti hic laborum non aperiam, nihil delectus error esse consequatur, consequuntur voluptatibus natus officia deleniti eligendi incidunt dolor reprehenderit facilis.",
  },
];

function TourDetail(props) {
  const par = useParams();
  const selectTur = TourData.find((id) => id.id === par.id);
  const [log, setLog] = useState({});
  console.log(par, "TD");
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("login"));
    if (login) {
      setLog(login);
    }
  }, []);
  // {login ? console.log("KIpak"):console.log("login")}
  // console.log(cek.isLogin)

  return (
    <div>
      {props.p}

      <div id="cardTour" className="">
        {props.pages === "detail" ? (
          <Tours data={selectTur}/>
        ) : props.pages === "payment" ? (
          <Payment data={selectTur}/>
        ) : props.pages === "profile" ? (
          <Profile data={TourData}/>
        ) : props.pages === "admin" ? (
          <Admin data={TourData}/>
        ) : props.pages === "inTrip" ? (
          <InTrip data={TourData}/>
        ) : props.pages === "addTrip" ? (
          <AddTrip data={TourData}/>
        ) : (
          <Pay data={TourData}/>
        )}
      </div>
      {props.f}
    </div>
  );
}
export default TourDetail;
