import DetailTour from "../views/detailTour";
import caro1 from "../assets/caro1.png";
import caro2 from "../assets/caro1.png";
import caro3 from "../assets/caro1.png";
import caro4 from "../assets/caro1.png";
const tour = [
  {
    caro: {
        caro1,caro2,caro3,caro4
    },
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
];
function detailTour() {
  {
    tour.map = (tour, idx) => {
      return (
        <DetailTour
          key={idx}
          caro={tour.caro}
          fTitle={tour.fTitle}
          price={tour.price}
          place={tour.place}
          acomodation={tour.acomodation}
          eat={tour.eat}
          duration={tour.duration}
          dateTrip={tour.dateTrip}
          desc={tour.desc}
        />
      );
    };
  }
}
export default detailTour;
