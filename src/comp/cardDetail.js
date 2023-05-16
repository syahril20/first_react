import Card from "./card";
import Guarantee from "../assets/guarantee.png";
import Outline from "../assets/outline.png";
import Vector from "../assets/Vector.png";
import Group from "../assets/Group.png";

function CardDetail() {
  return (
    <div id="card" className="-translate-y-16 flex justify-center gap-10">
      <Card
        img={Guarantee}
        title="Best Price Guarantee"
        desc="A small river named Duren flows by their place and supplies"
      />
      <Card
        img={Outline}
        title="Traveller Love Us"
        desc="A small river named Duren flows by their place and supplies"
      />
      <Card
        img={Vector}
        title="Best Travel Agent"
        desc="A small river named Duren flows by their place and supplies"
      />
      <Card
        img={Group}
        title="Our Dedicated Support"
        desc="A small river named Duren flows by their place and supplies"
      />
    </div>
  );
}
export default CardDetail;