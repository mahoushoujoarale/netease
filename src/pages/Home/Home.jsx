import React from "react";
import Album from "./components/Album/Album";
import Focus from "./components/Focus/Focus";
import Recommend from "./components/Recommend/Recommend";
import Toplist from "./components/Toplist/Toplist";
import "./index.less";

const Home = () => {
  return (
    <div className="home">
      <Focus />
      <div className="edit-center">
        <div className="left">
          <Recommend />
          <Album />
          <Toplist />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Home;
