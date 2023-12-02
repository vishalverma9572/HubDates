import React from 'react'
import Banner from '../component/Banner'
import './Homebanner.css'

export default function Homebanner() {
  return (
    <>
    <div className="homebanner">
    <div className='big-banner'>
        <Banner
        backgroundImage="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/h104-696x464.jpg"
        width={100}
        height={350}
        category="FASHION"
        title="WordPress News Magazine Charts the Most Chic and Fashionable Women of New York City"
        author="Vishal Kumar"
        date="August 29, 2023"
        showpara={true}
        />
    </div>
    <div className='small-banner'>
        <div className="small-upper">
          <Banner
          backgroundImage="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/28-696x368.jpg"
          width={94}
          height={160}
          category="GADGETS"
          title="Game Changing Virtual Reality Console Hits the Market"
          author="Vishal Kumar"
          date="August 29, 2023"
          showpara={false}
          />
        </div>
        <div className='small-lower'>
          <Banner
          backgroundImage="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/54-1-696x405.jpg"
          width={46.15}
          height={170}
          category="TRAVEL"
          title="Discover the Most Magical Sunset in Santoriniy"
          author="Vishal Kumar"
          date="August 29, 2023"
          showpara={false}
          />
          <Banner
          backgroundImage="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/43-2-696x464.jpg"
          width={46.15}
          height={170}
          category="REVIEW"
          title="Computer Filters Noise to Make You a Better Listener"
          author="Vishal Kumar"
          date="August 29, 2023"
          showpara={false}
          />
        </div>
    </div>
    </div>
    </>
  )
}
