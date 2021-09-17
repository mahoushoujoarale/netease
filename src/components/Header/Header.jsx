import "./index.less";
import { list, subNav } from "./data";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <div className="header">
      <div className="header-nav">
        <div className="container">
          <h1 className="logo">
            <a href="/#">网易云音乐</a>
          </h1>
          <ul className="list">
            {list.map((item, index) => {
              return (
                <li
                  key={item.title}
                  onClick={() => {
                    setCurrentItem(index);
                  }}
                  style={{ display: "inline-block" }}
                >
                  <NavLink
                    to={item.path}
                    className="item"
                    activeClassName="current-item"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="search">
            <input type="text" placeholder="音乐/视频/电台/用户" />
          </div>
          <button className="creator">创作者中心</button>
          <div className="login">登录</div>
        </div>
      </div>
      <div className="sub-nav">
        <div className="top"></div>
        <div className="bottom" style={{ display: !currentItem ? "" : "none" }}>
          <ul className="sub-list">
            {subNav.map((item, index) => {
              return (
                <li key={item.name} style={{ display: "inline-block" }}>
                  <NavLink
                    to={item.path}
                    className="sub-item"
                    activeClassName="current-sub-item"
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
