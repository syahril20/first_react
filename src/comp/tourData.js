import { useQuery } from "react-query";
import CardTour from "./card/cardTour";
import { API } from "../config/api";
import { useState } from "react";

function TourData(props) {
  const [Trip, setTrip] = useState([])
 const { _ } = useQuery("t", async () => {
    const response = await API.get("/trip");
    return setTrip(response?.data?.data)
  })

  return (
    <>
      <div id="cardTour" className="flex justify-center gap-10 flex-wrap">
        {Trip?.map((tour, idx) => {
          return (
            <CardTour
              key={idx}
              id={tour?.id_trip}
              image={tour?.image}
              title={tour?.title}
              price={tour?.price}
              place={tour?.place}
              quota={tour?.quota}
              current_quota={tour?.current_quota}
              isTrip={props.isTrip}
            />
          );
        })}
      </div>
    </>
  );
}
export default TourData;
