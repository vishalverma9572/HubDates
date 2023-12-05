import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import { Icon } from '@iconify/react';
import './Cardslider.css'; // Import your custom styles

export default function Cardslider({ articles }) {
  const maxdesc = 125;
  const maxtit = 75;

  const CustomPrevArrow = (props) => (
    <button {...props} className="custom-prev-arrow" style={{zIndex:3}}>
      <Icon icon="carbon:previous-outline" color="#001f3f" />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="custom-next-arrow" style={{zIndex:3}}>
      <Icon icon="carbon:next-outline" color="#001f3f" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='cardslider'>
      {/* Left Arrow Button */}
      <CustomPrevArrow />

      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index}>
            <Card
              imageUrl={article ? article.urlToImage : ''}
              cardTitle={article && article.title ? article.title.substring(0, maxtit) + ' ...' : ''}
              author={article ? article.author : ''}
              date={article ? article.publishedAt : ''}
              detail={article && article.description ? article.description.substring(0, maxdesc) + '...' : ''}
              hoverColor="#3a863d"
              width={100}
              showpara={false}
              link={article ? article.url : ''}
              height={245}
            />
          </div>
        ))}
        <a href="http://google.com" class="spacard">
            <center><span>See More...</span></center>
        </a>
      </Slider>
    </div>
  );
}
