import Card from "./card/card";
import Guarantee from "../assets/guarantee.png";
import Outline from "../assets/outline.png";
import Vector from "../assets/Vector.png";
import Group from "../assets/Group.png";

let descr = "A small river named Duren flows by their place and supplies"
const cardo = [
  {
    img: Guarantee,
    title: "Best Price Guarantee",
    desc: descr,
    type: "motto",
  },
  {
    img: Outline,
    title: "Traveller Love Us",
    desc: descr,
    type: "motto",
  },
  {
    img: Vector,
    title: "Best Travel Agent",
    desc: descr,
    type: "motto",
  },
  {
    img: Group,
    title: "Our Dedicated Support",
    desc: descr,
    type: "motto",
  },
];



function CardDetail() {
  return (
    <>
    <div id="cardMotto" className="-translate-y-16 flex justify-center gap-10">
      {cardo.map((milos,idx) => {
        return (
          <Card
            key={idx}
            img={milos.img}
            title={milos.title}
            desc={milos.desc}
            type={milos.type}
          />
        );
      })}
    </div>
    </>
  );
}
export default CardDetail;
