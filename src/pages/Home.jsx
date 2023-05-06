import React from "react";
import Layoute from "../components/layouts/Layoute";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Banner from "../assets/images/banner.jpeg";
import "../styles/HomeStyle.css";
const Home = () => {
  return (
    <>
      <Layoute>
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="homeContainer">
            <h1>Food Website</h1>
            <p>Best Food In Bangladesh</p>
            <Link to={"/menu"}>
              <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
      </Layoute>
    </>
  );
};

export default Home;
