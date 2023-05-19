import pic1 from "../assets/content1.png";
import pic2 from "../assets/content2.png";
import pic3 from "../assets/content3.png";
import pic4 from "../assets/content4.png";
import pic5 from "../assets/content5.png";
import pic6 from "../assets/content6.png";
import caro1 from "../assets/caro1.png";
import caro2 from "../assets/caro1.png";
import caro3 from "../assets/caro1.png";
import caro4 from "../assets/caro1.png";
import CardTour from "./card/cardTour";
const tour = [
  {
    img: pic1,
    caro1: caro1,
    caro2: caro2,
    caro3: caro3,
    caro4: caro4,
    title: "6D/4N Fun Tassie Vacation ...",
    fTitle: "6D/4N Fun Tassie Vacation + Sydney",
    price: "12,398,000",
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
    img: pic2,
    title: "6D/4N Exciting Summer in ...",
    price: "10,288,000",
    place: "South Korea",
    pages: "14/15",
  },
  {
    img: pic3,
    title: "8D/6N Wonderful Autum ...",
    price: "28,999,000",
    place: "Japan",
    pages: "10/15",
  },
  {
    img: pic4,
    title: "4D/3N Overland Jakarta B...",
    price: "3,188,000",
    place: "Indonesia",
    pages: "8/10",
  },
  {
    img: pic5,
    title: "4D/3N Labuan Bajo Delight",
    price: "10,488,000",
    place: "Indonesia",
    pages: "14/15",
  },
  {
    img: pic6,
    title: "5D/4N Magic Tokyo Fun",
    price: "11,188,000",
    place: "Japan",
    pages: "10/15",
  },
];

function TourData() {
  return (
    <>
      <div id="cardTour" className="flex justify-center gap-10 flex-wrap">
        {tour.map((tour, idx) => {
          return (
            <CardTour
              key={idx}
              img={tour.img}
              title={tour.title}
              price={tour.price}
              place={tour.place}
              pages={tour.pages}
            />
          );
        })}
      </div>
    </>
  );
}
export default TourData;
