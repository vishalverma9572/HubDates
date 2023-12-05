import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Homebanner from './Homebanner';
import Cont1_4 from '../component/Cont1_4';
import Cont_5 from '../component/Cont_5';
import Cont2_4 from '../component/Cont2_4';
import Cardslider from '../component/Cardslider';
import Allarticles from '../component/Allarticles';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=in&apikey=46cd4987ea434d5bb472ef13c1d2f1d2'
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <>
      <Homebanner
        article1={articles[0]}
        article2={articles[1]}
        article3={articles[2]}
        article4={articles[3]}
      />
      <Cont1_4
        article1={articles[0]}
        article2={articles[1]}
        article3={articles[2]}
        article4={articles[3]}
        article5={articles[4]}
      />
      <Cont2_4
        article1={articles[0]}
        article2={articles[5]}
        article3={articles[2]}
        article4={articles[6]}
        article5={articles[4]}
        article6={articles[1]}
      />
      <Cardslider articles={articles} />
      <Cont_5
        article1={articles[0]}
        article2={articles[1]}
        article3={articles[2]}
        article4={articles[3]}
        article5={articles[4]}
      />
      <Allarticles articles={articles} />
    </>
  );
}
