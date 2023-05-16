import Nav from "./comp/navbar";
import Image from "./assets/background.png";
import CardDetail from "./comp/cardDetail";
import Head from "./comp/header";


function App() {
  return (
    <div>
      <Nav />
      <Head />
      <div className="filter brightness-75">
        <img src={Image}/>
      </div>
       <CardDetail />
      <p className="text-center text-6xl font-semibold">Group Tour</p>
    </div>
  );  
}

export default App;
