// import CardDetail from './cardDetail'
function Card(props) {
  return (
    <div className="flex flex-col items-center relative">
      <div className="bg-white p-3 rounded">
        <img src={props.img} className="w-[328px] h-[241px]" alt="waw"/>

        <p className="bg-white absolute rounded-l-lg w-[60px] py-1 top-5 left-[280px] flex justify-center">
          {props.pages}
        </p>

        {props.type === "motto" ? (
          <a href="/d" className="mt-5 text-2xl font-bold ">{props.title}</a>
        ) : (
          <a href="/d" className="text-2xl font-semibold cursor-pointer mt-5">
            {props.title}
          </a>
        )}

        <div className="flex justify-between mt-5">
          <p className="text-[#FFAF00] font-bold">IDR. {props.price}</p>
          <p className="text-[#878787] font-semibold">{props.place}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
