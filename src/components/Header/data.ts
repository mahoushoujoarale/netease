interface listInterface {
  title: string,
  path: string
};
interface subNavInterface {
  path: string
  name: string,
};

export const list: listInterface[] = [
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
  
  export const subNav: subNavInterface[] = [
    {
        path: '',
        name: '推荐'
    },
    {
        path: '/toplist',
        name: '排行榜'
    },
    {
        path: '/playlist',
        name: '歌单'
    },
    {
        path: '/djradio',
        name: '主播电台'
    },
    {
        path: '/singer',
        name: '歌手'
    },
    {
        path: '/disk',
        name: '新碟上架'
    },
]