import pic1 from "../assets/content1.png";
import pic2 from "../assets/content2.png";
import pic3 from "../assets/content3.png";
import pic4 from "../assets/content4.png";
import pic5 from "../assets/content5.png";
import pic6 from "../assets/content6.png";
import CardTour from "./card/cardTour";
const tour = [
  {
    id: "1",
    img: pic1,
    title: "6D/4N Fun Tassie Vacation ...",
    price: "12,398,000",
    place: "Australia",
    pages: "12/15",
  },
  {
    id: "2",
    img: pic2,
    title: "6D/4N Exciting Summer in ...",
    price: "10,288,000",
    place: "South Korea",
    pages: "14/15",
  },
  {
    id: "3",
    img: pic3,
    title: "8D/6N Wonderful Autum ...",
    price: "28,999,000",
    place: "Japan",
    pages: "10/15",
  },
  {
    id: "4",
    img: pic4,
    title: "4D/3N Overland Jakarta B...",
    price: "3,188,000",
    place: "Indonesia",
    pages: "8/10",
  },
  {
    id: "5",
    img: pic5,
    title: "4D/3N Labuan Bajo Delight",
    price: "10,488,000",
    place: "Indonesia",
    pages: "14/15",
  },
  {
    id: "6",
    img: pic6,
    title: "5D/4N Magic Tokyo Fun",
    price: "11,188,000",
    place: "Japan",
    pages: "10/15",
  },
];


function TourData(props) {

  return (
    <>
      <div id="cardTour" className="flex justify-center gap-10 flex-wrap">
        {tour.map((tour, idx) => {
          return (
            <CardTour
              key={idx}
              id={tour.id}
              img={tour.img}
              title={tour.title}
              price={tour.price}
              place={tour.place}
              pages={tour.pages}
              isTrip={props.isTrip}
            />
          );
        })}
      </div>
    </>
  );
}
export default TourData;
