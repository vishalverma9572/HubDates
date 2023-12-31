import React from 'react'
import './Cont1_4.css'
import Card from './Card'
import Horicard from './Horicard'

export default function Cont1_4(props) {
    const { article1, article2, article3, article4, article5, hoverColor,maxdesc , maxtit} = props;
    
  return (
    <div className="container1_4">
        <div className="leftside">
        <Card
        imageUrl={article1 ? article1.urlToImage : ''}
        cardTitle={article1 &&  article1.title? article1.title.substring(0,maxtit)+ " ..."  : ""}
        author={article1 ? article1.author : ""}
        date={article1 ? article1.publishedAt : ""}
        detail={article1 && article1.description ? article1.description.substring(0, maxdesc)+"...": ""}
        hoverColor={hoverColor}
        width={100}
        showpara={true}
        link={article1 ? article1.url : ""}
        height={245}
        />
        </div>
        <div className="rightside">
            <Horicard
            imageUrl={article2 ? article2.urlToImage : ''}
            cardTitle={article2 &&  article2.title? article2.title.substring(0,maxtit)+ " ..."  : ""}
            author={article2 ? article2.author : ""}
            date={article2 ? article2.publishedAt : ""}
            detail={article2 && article2.description ? article2.description.substring(0, maxdesc)+"...": ""}
            hoverColor={hoverColor}
            width={100}
            showpara={false}
            link={article2 ? article2.url : ""}
            height={245}
            
            />
            {/* <hr style={{width:'95%',backgroundColor:'black'}}/> */}
            <Horicard
            imageUrl={article3 ? article3.urlToImage : ''}
            cardTitle={article3 &&  article3.title? article3.title.substring(0,maxtit)+ " ..."  : ""}
            author={article3 ? article3.author : ""}
            date={article3 ? article3.publishedAt : ""}
            detail={article3 && article3.description ? article3.description.substring(0, maxdesc)+"...": ""}
            hoverColor={hoverColor}
            width={100}
            showpara={false}
            link={article3 ? article3.url : ""}
            height={245}
            
            />
            {/* <hr style={{width:'95%',backgroundColor:'black'}}/> */}
            <Horicard
            imageUrl={article4 ? article4.urlToImage : ''}
            cardTitle={article4 &&  article4.title? article4.title.substring(0,maxtit)+ " ..."  : ""}
            author={article4 ? article4.author : ""}
            date={article4 ? article4.publishedAt : ""}
            detail={article4 && article4.description ? article4.description.substring(0, maxdesc)+"...": ""}
            hoverColor={hoverColor}
            width={100}
            showpara={false}
            link={article4 ? article4.url : ""}
            height={245}
            
            />
            
            <Horicard
            imageUrl={article5 ? article5.urlToImage : ''}
            cardTitle={article5 &&  article5.title? article5.title.substring(0,maxtit)+ " ..."  : ""}
            author={article5 ? article5.author : ""}
            date={article5 ? article5.publishedAt : ""}
            detail={article5 && article5.description ? article5.description.substring(0, maxdesc)+"...": ""}
            hoverColor={hoverColor}
            width={100}
            showpara={false}
            link={article5 ? article5.url : ""}
            height={245}
            
            />
        </div>
    </div>
    
  )
}
