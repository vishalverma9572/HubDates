import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";


import "./Home.css";
import Compotag from "../component/Compotag";
import Homebanner from "./Homebanner";
import Cont1_4 from "../component/Cont1_4";
import Cont_5 from "../component/Cont_5";
import Cont2_4 from "../component/Cont2_4";
import Cardslider from "../component/Cardslider";
import Allarticles from "../component/Allarticles";



export default function Home() {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://newsapi.org/v2/top-headlines?country=in&apikey=46cd4987ea434d5bb472ef13c1d2f1d2'
  //       );
  //       setArticles(response.data.articles);
  //     } catch (error) {
  //       console.error('Error fetching articles:', error);
  //     }
  //   };

  //   fetchArticles();
  // }, []);
  // The empty dependency array ensures that the effect runs only once when the component mounts
  const articles = [
    {
      source: {
        id: null,
        name: "KTLA Los Angeles",
      },
      author: "Marc Sternfield",
      title:
        "Home sales are expected to soar in these California cities next year - KTLA Los Angeles",
      description:
        "With mortgage rates finally easing, many California cities are expected to see home sales rebound significantly next year, according to a new forecast from Realtor.com. Five metro areas are predicted to see double-digit, year-over-year sales growth in 2024. T…",
      url: "https://ktla.com/news/california/home-sales-are-expected-to-soar-next-year-in-these-california-cities/",
      urlToImage:
        "https://ktla.com/wp-content/uploads/sites/4/2023/12/GettyImages-1131614069.jpg?w=1280",
      publishedAt: "2023-12-06T01:28:54Z",
      content:
        "With mortgage rates finally easing, many California cities are expected to see home sales rebound significantly next year, according to a new forecast from Realtor.com.\r\nFive metro areas are predicte… [+14207 chars]",
    },
    {
      source: {
        id: null,
        name: "CoinDesk",
      },
      author: "Nick Baker",
      title:
        "This Bitcoin Rally Feels Different. FOMO and YOLO Seem to Be Back - CoinDesk",
      description:
        "BTC just hit $45,000 days after topping $40,000 for the first time since early last year – and crypto-skeptics are taking another look.",
      url: "https://www.coindesk.com/business/2023/12/06/this-bitcoin-rally-feels-different-fomo-and-yolo-seem-to-be-back/",
      urlToImage:
        "https://www.coindesk.com/resizer/QmYFgN6SPYBhQgZut23bqQKgrRU=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/4PCTG5RKDVDDBHHTM2CS3LC3XE.jpg",
      publishedAt: "2023-12-06T01:03:00Z",
      content:
        "About two years ago, crypto prices topped out. Bitcoin (BTC) almost got to $70,000. Then things got bad, then they got worse and then they got cataclysmic. BTC sank toward $15,000 in the aftermath of… [+3267 chars]",
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: "Connor Smith",
      title: "AT&T Shares Rise on News of Ericsson Network Deal - Barron's",
      description:
        "Barron's live coverage of financial markets, from stocks and bonds to oil and crypto.",
      url: "https://www.barrons.com/livecoverage/stock-market-today-120523",
      urlToImage: "https://images.barrons.com/im-783602/social",
      publishedAt: "2023-12-06T00:59:00Z",
      content:
        "AT&amp;T shares were rising on Tuesday after the firm announced a new network deal with Ericsson.\r\nShares of AT&amp;T were up 3.9%. Ericsson shares were up 4.1%.\r\nThe company said it plans to spend u… [+226 chars]",
    },

    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "Alaric Nightingale, Julian Lee, Alex Longley",
      title:
        "How Russia Punched an $11 Billion Hole in the West's Oil Sanctions - Bloomberg",
      description:
        "Moscow's monthly income from oil exports is greater now than before the invasion of Ukraine, highlighting the failure of measures to curb its war chest.",
      url: "https://www.bloomberg.com/news/features/2023-12-06/oil-prices-how-russia-punched-an-11-billion-hole-in-west-s-sanctions-regime",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ihVAEy4aSyBE/v1/1200x800.jpg",
      publishedAt: "2023-12-06T00:01:15Z",
      content:
        "The failure of Western sanctions on Russian oil exports can be seen a short boat ride from the Greek coastal town of Gytheio, where two oil tankers with rusty hulls and a combined age of 57 years sit… [+687 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Lily Hay Newman",
      title: "The 23andMe Data Breach Keeps Spiraling - WIRED",
      description:
        "23andMe has provided more information about the scope and scale of its recent breach, but with these details come more unanswered questions.",
      url: "https://www.wired.com/story/23andme-breach-sec-update/",
      urlToImage:
        "https://media.wired.com/photos/656f9e7adaaad622dc840b1a/191:100/w_1280,c_limit/breach-23andme-sec-GettyImages-1419172954.jpg",
      publishedAt: "2023-12-05T23:54:14Z",
      content:
        "More details are emerging about a data breach the genetic testing company 23andMe first reported in October. But as the company shares more information, the situation is becoming even murkier and cre… [+2456 chars]",
    },

    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Aislinn Murphy",
      title:
        "Amazon promo makes $25 holiday flights available to Prime Student members - Fox Business",
      description:
        "Amazon launched a deal for students on Tuesday morning that will help them access cheap, $25 plane tickets to fly home for the holidays.",
      url: "https://www.foxbusiness.com/lifestyle/amazon-promo-makes-25-dollar-holiday-flights-available-prime-student-members",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/09/0/0/Amazon-1.jpg?ve=1&tl=1",
      publishedAt: "2023-12-05T23:15:00Z",
      content:
        "Amazon launched a deal for students on Tuesday morning that will help them access cheaper plane tickets to fly home for the holidays. \r\nThe e-commerce giant and StudentUniverse sold out its first 1,0… [+3183 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Ariel Shapiro",
      title: "Spotify's not going for Pulitzers anymore - The Verge",
      description:
        "Heavyweight and Stolen have been canceled, while Spotify's originals roster is dominated by celebrity chat shows.",
      url: "https://www.theverge.com/2023/12/5/23989879/spotify-heavyweight-gimlet-stolen-pulitzer-layoff-daniel-ek",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/oaNdxtfeU3sXEbIdR2rGWZb-sd4=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23985252/VRG_Illo_STK130_K_Radtke_Spotify_Podcast_1.jpg",
      publishedAt: "2023-12-05T23:15:00Z",
      content:
        "Spotifys not going for Pulitzers anymore\r\nSpotifys not going for Pulitzers anymore\r\n / Spotify has shifted its focus from in-depth narrative podcasts to high-margin shows that are straightforward to … [+6596 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Jordan Novet",
      title:
        "Ex-OpenAI director Reid Hoffman says we still don't 'fully know' why board forced out Altman - CNBC",
      description:
        "Reid Hoffman, who sold LinkedIn to Microsoft and previously served as an OpenAI director, said he's still not sure why the board pushed out Sam Altman",
      url: "https://www.cnbc.com/2023/12/05/reid-hoffman-says-we-dont-know-why-openai-board-forced-out-sam-altman.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/105496130-1539094172652img_5073.jpg?v=1539094286&w=1920&h=1080",
      publishedAt: "2023-12-05T23:03:35Z",
      content:
        "Three weeks after OpenAI's board briefly pushed out CEO Sam Altman without providing a specific reason for its decision, former director Reid Hoffman says he's still puzzled by what took place and wh… [+3132 chars]",
    },
    {
      source: {
        id: "ars-technica",
        name: "Ars Technica",
      },
      author: "Beth Mole",
      title:
        "Man dies on way home from Panera after having three “charged” lemonades - Ars Technica",
      description:
        "A large lemonade contains up to 390 mg of caffeine, nearly the FDA's daily safe limit.",
      url: "https://arstechnica.com/health/2023/12/man-dies-on-way-home-from-panera-after-having-three-charged-lemonades/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/12/GettyImages-1483135421-760x380.jpeg",
      publishedAt: "2023-12-05T22:57:39Z",
      content:
        "Enlarge/ Dispensers for Charged Lemondade, a caffeinated lemonade drink, at Panera Bread, Walnut Creek, California, March 27, 2023.\r\n199\r\nA second person has died after drinking Panera's caffeinated … [+4133 chars]",
    },
    {
      source: {
        id: null,
        name: "Investor's Business Daily",
      },
      author: "Investor's Business Daily",
      title:
        "MDB Stock Falls Despite Strong Earnings From MongoDB - Investor's Business Daily",
      description: null,
      url: "https://www.investors.com/news/technology/mongodb-earnings-top-expectations-mdb-stock-down-following-report/",
      urlToImage: null,
      publishedAt: "2023-12-05T22:27:00Z",
      content: null,
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Ashley Stewart",
      title:
        "Amazon Employees Are Quitting Over RTO, Especially AWS Staff - Business Insider",
      description:
        "Some Amazon employees have noticed an increasing number of Slack messages lately from colleagues who are quitting over the company's RTO mandate.",
      url: "https://www.businessinsider.com/amazon-aws-employees-quitting-over-rto-2023-12",
      urlToImage:
        "https://i.insider.com/656f841558e7c0c29a29dba6?width=1200&format=jpeg",
      publishedAt: "2023-12-05T22:24:00Z",
      content:
        "Some Amazon employees have noticed an increasing number of Slack messages lately from colleagues who are quitting over the company's strict return-to-office mandate.\"This is my last week at Amazon an… [+4113 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Treasury Frenzy Drives 10-Year Yield Below 4.2%: Markets Wrap - Yahoo Finance",
      description: null,
      url: "https://finance.yahoo.com/news/asia-stocks-set-losses-wall-223445728.html",
      urlToImage: null,
      publishedAt: "2023-12-05T21:43:43Z",
      content:
        "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Aruni Soni",
      title:
        "Saudi Arabia May Wage Oil 'Market Share War' Against the US With Supply Flood - Markets Insider",
      description:
        "\"You've got to attack the guy that's making the marginal decision to drill or not — and that guy is Mr. Permian Basin.\"",
      url: "https://markets.businessinsider.com/news/commodities/oil-outlook-saudi-arabia-opec-production-us-share-crude-supply-2023-12",
      urlToImage:
        "https://i.insider.com/656f5b827a3c8094d5d9be02?width=1200&format=jpeg",
      publishedAt: "2023-12-05T21:32:00Z",
      content:
        "Saudi Arabia is struggling to boost oil prices with production cuts and may soon make a dramatic reversal aimed at the US, according to energy expert Paul Sankey. \r\nIn an interview with Business Insi… [+2338 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "FOXBusiness",
      title: "McDonald's spinoff CosMc pops up in Midwest - Fox Business",
      description:
        "McDonald's tightly guarded concept spinoff CosMc has at least one location in Illinois giving customers and investors a sneek peak of the highly anticipated rollout.",
      url: "https://www.foxbusiness.com/lifestyle/mcdonalds-spinoff-cosmcs-pops-up-midwest",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/12/0/0/dc4b4525bed3434eabb9d9c8e4c31071-00000.jpeg?ve=1&tl=1",
      publishedAt: "2023-12-05T21:20:00Z",
      content:
        "McDonald's mystery spinoff restaurant, CosMc's, is getting a little less mysterious. \r\nA standalone building, with both logos in the brand's signature yellow, has popped up in Bollingrbook, Illinois.… [+2369 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "WSJ Staff",
      title:
        "Pioneer, Exxon Shares Fall After News of Federal Investigation Into Deal - The Wall Street Journal",
      description:
        "Live coverage of stocks and financial news, including the S&P 500, Dow and Nasdaq Composite.",
      url: "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-12-05-2023",
      urlToImage: "https://images.wsj.net/im-895836?width=600",
      publishedAt: "2023-12-05T21:19:00Z",
      content: null,
    },
    {
      source: {
        id: "financial-times",
        name: "Financial Times",
      },
      author: null,
      title:
        "Wells Fargo earmarks up to $1bn for 'unanticipated' severance costs - Financial Times",
      description:
        "US bank's efforts to reduce expenses pressured by fewer employees leaving voluntarily",
      url: "https://www.ft.com/content/0e35852e-aa92-4a63-ac64-a9c611679c03",
      urlToImage: null,
      publishedAt: "2023-12-05T21:15:15Z",
      content:
        "Keep abreast of significant corporate, financial and political developments around the world. Stay informed and spot emerging risks and opportunities with independent global reporting, expert comment… [+30 chars]",
    },
    {
      source: {
        id: null,
        name: "Investopedia",
      },
      author: "Bill McColl",
      title:
        "P&G Will Take Up to $2.5 Billion in Charges for Restructuring, Gillette Impairment - Investopedia",
      description:
        "Procter & Gamble said it will write down up to $2.5 billion in charges for a restructuring, along with impairment of its Gillette business.",
      url: "https://www.investopedia.com/p-and-g-will-take-up-to-usd2-5-billion-in-charges-for-restructuring-and-gillette-impairment-8410912",
      urlToImage:
        "https://www.investopedia.com/thmb/Cr2dzR2a5FZzYwsbQp0O19O3l_4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/INV_PG_Gillette_GettyImages-1150601581-77af11d6730c416ba0daa2367c003aa9.jpg",
      publishedAt: "2023-12-05T21:03:37Z",
      content:
        "<ul><li>Procter &amp; Gamble Co. (P&amp;G) will take up to $2.5 billion in charges for a restructuring along with an impairment related to its Gillette business.</li><li>The consumer products company… [+1912 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Michael Dorgan",
      title:
        "John Kerry pledges to slash emissions from AC units, refrigerators to fight climate change - Fox Business",
      description:
        "U.S. Special Envoy for Climate John Kerry has pledged to slash the nation’s emissions from cooling-related appliances like refrigerators and air conditioning units.",
      url: "https://www.foxbusiness.com/energy/john-kerry-pledges-slash-emissions-ac-units-refrigerators-fight-climate-change",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/12/0/0/John-Kerry.jpg?ve=1&tl=1",
      publishedAt: "2023-12-05T21:00:00Z",
      content:
        "John Kerry, U.S. Special Envoy for Climate — having already pledged to close down all United States coal power plants — has committed to slashing the nation’s emissions from cooling-related products … [+4140 chars]",
    },
  ];

  return (
    <>
      `{" "}
      <Compotag
        color="black"
        text="Trending"
        textcolor="White"
        width={70}
        bottom={10}
      />
      <Homebanner
        article1={articles[0]}
        article2={articles[1]}
        article3={articles[2]}
        article4={articles[3]}
      />
      <br />
      <br />
      <div className="home_sec1">
        <div className="left">
          <Compotag
            color="#3a863d"
            text="Political"
            textcolor="White"
            width={100}
            bottom={-5}
          />
          <Cont1_4
            article1={articles[0]}
            article2={articles[1]}
            article3={articles[2]}
            article4={articles[3]}
            article5={articles[4]}
            hoverColor="#3a863d"
            maxtit={50}
            maxdesc={110}
          />
          <Compotag
            color="#f9c100"
            text="Business"
            textcolor="black"
            width={100}
            bottom={10}
          />
          <Cont2_4
            article1={articles[0]}
            article2={articles[5]}
            article3={articles[2]}
            article4={articles[6]}
            article5={articles[4]}
            article6={articles[1]}
            hoverColor="#f9c100"
            maxtit={65}
            maxdesc={115}
          />
        </div>
        <div className="right">
          <Compotag
            color="#481762"
            text="International"
            textcolor="White"
            width={100}
            bottom={10}
          />
          <div className="font">
            <Cont_5
              article1={articles[0]}
              article2={articles[1]}
              article3={articles[2]}
              article4={articles[3]}
              article5={articles[4]}
              hoverColor="#481762"
              maxdesc={170}
              maxtit={75}
              showpara={false}
              lwid={0}
              rwid={93}
            />
          </div>
        </div>
      </div>
      <div className="home_sec2">
        <div className="left">
          <Compotag
            color="#045843"
            text="Sports"
            textcolor="white"
            width={100}
            bottom={10}
          />
          <Cardslider articles={articles} hoverColor="#045843" maxtit={80} />
          <br />
          <Compotag
            color="#145F5C"
            text="Technology"
            textcolor="White"
            width={100}
            bottom={10}
          />
          <Cont2_4
            article1={articles[0]}
            article2={articles[13]}
            article3={articles[14]}
            article4={articles[6]}
            article5={articles[17]}
            article6={articles[1]}
            hoverColor="#145F5C"
            maxtit={65}
            maxdesc={115}
          />
        </div>
        <div className="right">
          <Compotag
            color="#059d56 "
            text="Cricket"
            textcolor="White"
            width={100}
            bottom={10}
          />
          <div className="font1">
            <Cont_5
              article1={articles[0]}
              article2={articles[1]}
              article3={articles[2]}
              article4={articles[3]}
              // article5={articles[4]}
              hoverColor="#059d56"
              maxdesc={170}
              maxtit={75}
              showpara={false}
              lwid={25}
              rwid={73}
            />
          </div>
          <Compotag
            color="#0851A8 "
            text="Lifestyle"
            textcolor="White"
            width={100}
            bottom={10}
          />
          <div className="font2">
            <Cont_5
              article1={articles[0]}
              article2={articles[1]}
              article3={articles[2]}
              article4={articles[3]}
              article5={articles[4]}
              hoverColor="#0851A8"
              maxdesc={170}
              maxtit={75}
              showpara={false}
              lwid={0}
              rwid={95}
            />
          </div>
        </div>
      </div>
      <div className="home_sec3">
        <div className="left">
          <Compotag
            color="#481762"
            text="Science"
            textcolor="White"
            width={100}
            bottom={10}
          />
          <Cont_5
            article1={articles[0]}
            article2={articles[1]}
            article3={articles[2]}
            article4={articles[3]}
            article5={articles[4]}
            hoverColor="#481762"
            maxdesc={170}
            maxtit={80}
            showpara={true}
            lwid={30}
            rwid={68}
          />

          <br />
          <Compotag
            color="#0C2C75"
            text="Entertainment"
            textcolor="White"
            width={100}
            bottom={10}
          />
          <Cardslider articles={articles} hoverColor="#0C2C75" maxtit={80} />
        </div>
        <div className="right">
          <Compotag
            color="#30AB11"
            text="Health"
            textcolor="White"
            width={100}
            bottom={10}
          />
          <div className="font">
            <Cont_5
              article1={articles[0]}
              article2={articles[1]}
              article3={articles[2]}
              article4={articles[3]}
              article5={articles[4]}
              hoverColor="#30AB11"
              maxdesc={170}
              maxtit={75}
              showpara={false}
              lwid={0}
              rwid={93}
            />
          </div>
          <br />
          <div className="stay-connected">
          <Compotag
          color="black"
          text="Stay Connected"
          textcolor="White"
          width={100}
          bottom={10}
          />
            <div className="social-icons">
      <a
        href="https://github.com/example"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon-container">
          <Icon icon="devicon:github" width="30" />
          <span>GitHub</span>
        </div>
      </a>
      <a
        href="https://instagram.com/example"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon-container">
          <Icon icon="skill-icons:instagram" width="30"/>
          <span>Instagram</span>
        </div>
      </a>
      <a href="mailto:example@example.com">
        <div className="icon-container">
          <Icon icon="logos:google-gmail" />
          <span>Email</span>
        </div>
      </a>
      <a
        href="https://twitter.com/example"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon-container">
          <Icon icon="devicon:twitter" width="30"/>
          <span>Twitter</span>
        </div>
      </a>
    </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Compotag
        color="#001f3f"
        text="Top Articles"
        textcolor="White"
        width={70}
        bottom={10}
      />
      <Allarticles articles={articles} hoverColor="red" width="30" />
    </>
  );
}
