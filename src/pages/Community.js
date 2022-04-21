import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"

const Create = () => {
  let navigate = useNavigate();

  const goExplore = () => {
    navigate("/explore");
  };
  const goCreate = () => {
    navigate("/home");
  };

  return (
    <div id="hero">
      {/* <img id='hero-background' src={list[0].src}/> */}

      <Header />

      <h1 id="header-text-first"> Khong Fkers </h1>
      <h1 id="header-text-second"> NFT Marketplace</h1>
      <h5 id="header-subtext">Craft, hunt and trade NFT's in the dark</h5>

      <div id="hero-buttons">
        <button id="explore" onClick={goExplore}>
          Explore
        </button>
        <button id="create" onClick={goCreate} disabled>Create</button>
      </div>
    </div>
  );
};

export default Create;
