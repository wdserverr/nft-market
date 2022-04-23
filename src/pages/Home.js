import react from "react";
import Header1 from "../components/Header1";
import "../styles/Home.css";
import CardList from "../components/CardList";
import { hotDropsData } from "../constants/MockupData";
import { FaDiscord, FaTwitter } from 'react-icons/fa';



const Home = () => {

  return (
    <div id="home">
      <Header1/>
      <br />
      <h1 id="header-text-first"> Welcome to the </h1>
      <h1 id="header-text-second"> Khong Fker's Club </h1>
      
      <img src="https://pbs.twimg.com/media/FPB4n1MVsAAe0at?format=png&name=900x900" />
      <h5 id="header-subtext"> a collection of 3333 unique, randomly generated pixel art Khong NFTs stored on the NEAR blockchain.</h5>
      <div id="buttin">
      <button id="explore" 
      onClick={()=> window.open("/app", "_blank")}
      >
          APP
        </button>
        <button 
        id="create" 
        disabled
        onClick={()=> window.open("/app", "_blank")}>MINT</button>
        </div>

    </div>
  );
};

export default Home;
{/* <p id="card-list-header-text"> Featured Collections </p>
      <div id="list-container">
        <CardList list={hotDropsData} />
      </div> */}