// import CardDetail from './cardDetail'
function Card(props) {
  return (
    <>
      <div className="card bg-white h-[350px] w-[230px] rounded flex flex-col items-center text-center">
        <img src={props.img} className="w-[70px] h-[70px] mt-10" />
        <p className="mt-5 text-2xl font-bold">{props.title}</p>
        <p className="mt-3 mx-10 text-[#878787]">
          {props.desc}
        </p>
      </div>
    </>
  );
}
export default Card;
