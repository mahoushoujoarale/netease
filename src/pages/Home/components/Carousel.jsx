import React, {useState, useEffect} from "react";
import { Carousel as AntdCarousel } from "antd";
import { getCarousel } from './../../../apis/home';
import { Link } from "react-router-dom";

const contentStyle = {
  height: '363.7px',
  color: '#fff',
  lineHeight: '363.7px',
  textAlign: 'center',
};

const Carousel = () => {
  const [carouselList, setCarouselList] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await getCarousel();
      setCarouselList(data.banners);
    };
    getData();
  }, []);

  return (
    <AntdCarousel autoplay>
      {carouselList.map((item) => {
        return(
          <div key={item.targetId}>
            <h3 style={{...contentStyle, ...{backgroundImage: `url(${item.imageUrl}?imageView&blur=40x20)`}}}>
              <Link to={`/song?id=${item.targetId}`}>
                <img style={{height: "363.7px", margin: "0 auto"}} src={item.imageUrl} alt={item.targetId} />
              </Link>
            </h3>
          </div>
        )
      })}
    </AntdCarousel>
  );
};

export default Carousel;
