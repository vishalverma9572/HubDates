import React from 'react';
import Card from './Card';
import './Allarticles.css';


export default function Allarticles({ articles, hoverColor,maxdesc , maxtit }) {

  return (

    <div className='allarticlecont'>
        {articles.map((article, index) => (
          <div key={index} className='articles'>
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
    </div>
  )
}
