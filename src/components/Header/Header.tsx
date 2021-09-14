import "./index.less";

const list = [
  {
    title: "发现音乐",
    path: "/home",
  },
  {
    title: "我的音乐",
    path: "/my",
  },
  {
    title: "朋友",
    path: "/friend",
  },
  {
    title: "商城",
    path: "/Mall",
  },
  {
    title: "音乐人",
    path: "/MusicPeople",
  },
  {
    title: "下载客户端",
    path: "/Download",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="title">网易云音乐</div>
      </div>
      <ul className="list">
        {list.map((item) => {
          return (
            <li className="item" key={item.title}>
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
  );
};

export default Header;
