import React from 'react';
import Banner from '../component/Banner';
import './Homebanner.css';
import Compotag from '../component/Compotag'

export default function Homebanner(props) {
  const { article1, article2, article3, article4 } = props;

  return (
    <>
      <Compotag 
      color="black"
      text="Trending"
      textcolor='White'
      width={70}
    
      />
      <div className="homebanner">
        <div className='big-banner'>
          <Banner
            backgroundImage={article1 ? article1.urlToImage : ''}
            width={100}
            height={350}
            category="FASHION"
            title={article1 ? article1.title : ""}
            author={article1 ? article1.author : ""}
            date={article1 ? article1.publishedAt : ""}
            link={article1 ? article1.url : ""}
            showpara={true}
          />
        </div>
        <div className='small-banner'>
          <div className="small-upper">
            <Banner
              backgroundImage={article2 ? article2.urlToImage : ''}
              width={94}
              height={160}
              category="GADGETS"
              title={article2 ? article2.title : ""}
              author={article2 ? article2.author : ""}
              date={article2 ? article2.publishedAt : ""}
              link={article2 ? article2.url : ""}
              showpara={false}
            />
          </div>
          <div className='small-lower'>
            <div className="left">
              <Banner
                backgroundImage={article3 ? article3.urlToImage : ''}
                width={95}
                height={170}
                category="TRAVEL"
                title={article3 ? article3.title : ""}
                author={article3 ? article3.author : ""}
                date={article3 ? article3.publishedAt : ""}
                link={article3 ? article3.url : ""}
                showpara={false}
              />
            </div>
            <div className="right">
              <Banner
                backgroundImage={article4 ? article4.urlToImage : ''}
                width={94}
                height={170}
                category="REVIEW"
                title={article4 ? article4.title : ""}
                author={article4 ? article4.author : ""}
                date={article4 ? article4.publishedAt : ""}
                link={article4 ? article4.url : ""}
                showpara={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
