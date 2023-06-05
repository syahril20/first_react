import Palm2 from "../assets/Palm2.png";
function Footer(props) {
  return (
    <div className={props.isHome === true ? "relative mt-40" : ""}>
      <footer className="w-full absolute bottom-0">
        <div className="bg-[#FFAF00] relative">
          <p className="text-center text-white p-2">
            Copyright @ 2020 Dewe Tour - Syahril Ramadhan - NIS. All Rights
            reserved
          </p>
          <img src={Palm2} className="absolute right-0 bottom-0" alt="waw"/>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
