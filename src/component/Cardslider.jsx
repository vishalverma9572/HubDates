import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import { Icon } from '@iconify/react';
import './Cardslider.css'; // Import your custom styles

export default function Cardslider({ articles,hoverColor,maxdesc , maxtit }) {
  

  const CustomPrevArrow = (props) => (
    <button {...props} className="custom-prev-arrow" style={{zIndex:3}}>
      <Icon icon="carbon:previous-outline" color={hoverColor} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="custom-next-arrow" style={{zIndex:3}}>
      <Icon icon="carbon:next-outline" color={hoverColor} />
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
      

      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index}>
            <Card
              imageUrl={article ? article.urlToImage : ''}
              cardTitle={article && article.title ? article.title.substring(0, maxtit) + ' ...' : ''}
              author={article ? article.author : ''}
              date={article ? article.publishedAt : ''}
              detail={article && article.description ? article.description.substring(0, maxdesc) + '...' : ''}
              hoverColor={hoverColor}
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
