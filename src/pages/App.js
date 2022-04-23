import react from "react";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CardList from "../components/CardList";
import { hotDropsData } from "../constants/MockupData";
import { AnnouncementBar } from 'react-announcement-bar';



const Home = () => {


  return (
    
    <div id="home">
      <Hero list={hotDropsData} />

      <p id="card-list-header-text"> Featured Collections </p>
      <div id="list-container">
        <CardList list={hotDropsData} />
      </div>
    </div>
  );
};

export default Home;
