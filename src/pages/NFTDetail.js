import React, { useState, useEffect, createRef } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useLocation, Navigate } from "react-router";
import Card from "../components/base/Card";
import "../styles/NFTDetail.css";
import { ColorExtractor } from "react-color-extractor";
import Button from "../components/base/Button";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart, AiOutlineArrowLeft, AiFillDownCircle, AiOutlineArrowRight } from "react-icons/ai";
import { useMobile } from "../hooks/isMobile";
import { hotDropsData } from "../constants/MockupData";
import NFTCard from "../components/NFTCard";
import { useARStatus } from "../hooks/isARStatus";




const NFTDetail = () => {
  const isMobile = useMobile();

  const [colors, setColors] = useState([]);

  const [isLike, setIsLike] = useState(false);
  
  
  const like = () => setIsLike(!isLike);

  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    setColors([]);
  }, [state]);

  const isARSupport = useARStatus(state.item.src);
  const shoot = () => {
    alert("\n \n This Feature will be Available on MAINNET!");
  }
  

  //!! aciklama karakter sayisi sinirlanmali.
  //!! scroll sorununa cozum bulunmali.

  return (
    <div>
      <Header />
      <div id="nft-detail-card-wrapper">
      
        <Card
          width={isMobile ? "100%" : "65vw"}
          height={isMobile ? "700px" : "60vh"}
          blurColor={colors[0]}
          child={
            //Detail Content
            <div id="detail-content">
              
             {isARSupport ? <model-viewer ar-scale="auto" ar ar-modes="webxr scene-viewer quick-look" id="arDetail" loading="eager" camera-controls auto-rotate src={state.item.src} > </model-viewer> 
             : <> <ColorExtractor getColors={getColors}>
                <img id="detail-image" src={state.item.src} />
              </ColorExtractor></>}

              <div id="detail-info" style={{}}>
              <Button
                    width="50px"
                    height="50px"
                    child={
                      
                      <p>BACK</p>
                      
                    }
                    onClick={() => navigate('/market')}></Button>
              <div id='detail-info-container'>
              
                  <p id="collection"> khongfkers.near <AiFillDownCircle /> </p>
                  <p id="name"> Fkers #1</p>
                  <p id="description" > {state.item.description} </p>

                </div>

                <div id="detail-controls">
                  <Button
                    width={isMobile ? "70%" : "70%"}
                    height="50px"
                    child={
                      <div id="button-child">
                        <p id="price">Buy Now</p>
                      </div>
                    }
                    onClick={shoot}></Button>
                  <div className="like-container">
                  <AiFillDollarCircle size="40px" color="white"/>
                  <p className="like-count">4.000</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        
      </div>

    </div>
  );
};

export default NFTDetail;
