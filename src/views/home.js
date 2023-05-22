

import CardDetail from "../comp/cardDetail";
import Head from "../comp/header";
import CardTour from "../comp/tourData";
import Footer from "../comp/footer";


function Home(props) {
  return (
    <div className="">
      <Head />
      {props.p}
      <CardDetail/>
      <div className="my-20">
        <p className="text-center text-6xl font-semibold">Group Tour</p>
      </div>
      <div className="mb-32">
        <CardTour />
      </div>
      <Footer isHome={true}/>
    </div>
  );
}

export default Home;
