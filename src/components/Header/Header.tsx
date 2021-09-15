import "./index.less";
import { list, subNav } from "./data";
import { useState } from "react";

const Header = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [currentSubItem, setCurrentSubItem] = useState(0);
  return (
    <>
      <div className="header">
        <div className="container">
          <h1 className="logo">
            <a href="/#">网易云音乐</a>
          </h1>
          <ul className="list">
            {list.map((item, index) => {
              return (
                <li
                  className={index === currentItem ? "current-item" : "item"}
                  key={item.title}
                  onClick={() => {
                    setCurrentItem(index);
                  }}
                >
                  {item.title}
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
                <li
                  className={
                    index === currentSubItem ? "current-sub-item" : "sub-item"
                  }
                  key={item.name}
                  onClick={() => {
                    setCurrentSubItem(index);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
