import React from 'react';
import Homebanner from './Homebanner';
import Cont1_4 from '../component/Cont1_4';

export default function Home() {
  var articles = [
    {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Vishal Verma",
        "title": "This week in AI: Can we trust DeepMind to be ethical?",
        "description":"With the recent launch of the Tesla Cybertruck, one of the big talking points was its steer-by-wire system, which doesn’t have a physical connection between the helm and the wheels. The Cybertruck is credited with...\nFirst published by https://www.bmwblog.com",
        "url": "https://techcrunch.com/2023/10/21/this-week-in-ai-can-we-trust-deepmind-to-be-ethical/",
        "urlToImage": "https://images.wsj.net/im-895235/social",
        "publishedAt": "2023-10-21T17:22:22.8296987Z",
        "content": null
    },
    {
      "source": {
        "id": null,
        "name": "New Atlas"
      },
      "author": "C.C. Weiss",
      "title": "Split-chemistry battery boosts BMW iX all-electric range to 608 miles",
      "description": "Last year, BMW and Michigan startup Our Next Energy (ONE) announced a partnership to test the latter's Gemini battery system with the goal of increasing the BMW iX's all-electric range to 600 miles (966 km). The initial results are in, and the project proved …",
      "url": "https://newatlas.com/automotive/one-gemini-battery-bmw-ix-608-miles/",
      "urlToImage": "https://assets.newatlas.com/dims4/default/92fe8e3/2147483647/strip/true/crop/991x520+0+37/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F9a%2Ffd%2F85f52bec4147bab2d4054cbfa9a8%2Fscreen-shot-2023-12-04-at-7.25.31%20PM.png&na.image_optimisation=0",
      "publishedAt": "2023-12-05T03:34:13Z",
      "content": "Last year, BMW and Michigan startup Our Next Energy (ONE) announced a partnership to test the latter's Gemini battery system with the goal of increasing the BMW iX's all-electric range to 600 miles (… [+2754 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Kris Holt, Contributor, \n Kris Holt, Contributor\n https://www.forbes.com/sites/krisholt/",
      "title": "'Overwatch 2' Season 8 Patch Notes: Mauga, Balance Changes, Weapon Skins, MMR Decay And Much More",
      "description": "Just ahead of Season 8 of Overwatch 2 going live, Blizzard has revealed the full patch notes, including Mauga tweaks, other balance changes and details on weapon skins.",
      "url": "https://www.forbes.com/sites/krisholt/2023/12/04/overwatch-2-season-8-patch-notes-mauga-balance-changes-weapon-skins-mmr-decay-and-much-more/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/656a77de0e416951adfed474/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2023-12-05T03:21:06Z",
      "content": "Mauga will officially join the Overwatch 2 roster when Season 8 goes live.\r\nBlizzard Entertainment\r\nIts just about time for Season 8 of Overwatch 2 to get underway. Just ahead of Season 8 (a.k.a. Ove… [+18800 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "benzinga.com",
      "title": "Cybertruck Without Door Handles Baffles Early Buyers: Tesla CEO Elon Musk Steps In To Solve Confusion",
      "description": "The much-anticipated Cybertruck from Tesla Inc. TSLA has hit a snag with its owners due to its unconventional door design. The futuristic vehicle lacks traditional door handles, leaving some owners puzzled about how to gain entry. What Happened: The issue cam…",
      "url": "https://biztoc.com/x/70f578cd298c7208",
      "urlToImage": "https://c.biztoc.com/p/70f578cd298c7208/s.webp",
      "publishedAt": "2023-12-05T02:56:07Z",
      "content": "The much-anticipated Cybertruck from Tesla Inc. TSLA has hit a snag with its owners due to its unconventional door design. The futuristic vehicle lacks traditional door handles, leaving some owners p… [+275 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BMWBLOG"
      },
      "author": "Andrei Nedelea",
      "title": "Understanding Throttle-by-Wire, Steer-by-Wire, and Brake-by-Wire",
      "description": "With the recent launch of the Tesla Cybertruck, one of the big talking points was its steer-by-wire system, which doesn’t have a physical connection between the helm and the wheels. The Cybertruck is credited with...\nFirst published by https://www.bmwblog.com",
      "url": "https://www.bmwblog.com/2023/12/04/what-is-throttle-brake-and-steer-by-wire/",
      "urlToImage": "https://cdn.bmwblog.com/wp-content/uploads/2022/03/Tesla-Model-S-7.jpg",
      "publishedAt": "2023-12-05T02:15:30Z",
      "content": "With the recent launch of the Tesla Cybertruck, one of the big talking points was its steer-by-wire system, which doesnt have a physical connection between the helm and the wheels. The Cybertruck is … [+6255 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Zacjohnson.com"
      },
      "author": "Zac Johnson",
      "title": "Rufus Sewell Net Worth - How Much is Sewell Worth?",
      "description": "Rufus Sewell, a British actor of the screen and stage, has a net worth of $8 million. Known for his performances in films such as “Carrington,” “Hamlet,” and “The Illusionist,” Sewell has made a name for himself in the entertainment industry. With notable rol…",
      "url": "https://zacjohnson.com/rufus-sewell-net-worth/",
      "urlToImage": "https://zacjohnson.com/wp-content/uploads/2023/12/rufus-sewell-net-worth.jpg",
      "publishedAt": "2023-12-05T02:01:14Z",
      "content": "Rufus Sewell, a British actor of the screen and stage, has a net worth of $8 million. Known for his performances in films such as “Carrington,” “Hamlet,” and “The Illusionist,” Sewell has made a name… [+19161 chars]"
    },
    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "Yara Murray-Atfield",
      "title": "Lawyer who fled to Australia after blowing whistle in PNG's biggest corruption scandal wins free speech prize",
      "description": "A Papua New Guinean lawyer who fled to Australia after blowing the whistle on one of the Pacific nation's biggest corruption scandals is awarded a prestigious free speech prize.",
      "url": "https://www.abc.net.au/news/2023-12-05/australian-png-whistleblower-among-recipients-of-prize/103184776",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/0a17281082842a8cf38b716874a0374d?impolicy=wcms_crop_resize&cropH=1152&cropW=2048&xPos=0&yPos=73&width=862&height=485",
      "publishedAt": "2023-12-05T02:00:46Z",
      "content": "Quick read:\r\n<ul><li>In short: Australian-based Neville Devete has been awarded an international Blueprint for Free Speech prize for blowing the whistle on corruption in Papua New Guinea.</li><li>The… [+5435 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "businessinsider.com",
      "title": "US aims to break China's hold on EV market",
      "description": "The White House has announced EVs with Chinese parts will be disqualified from a crucial tax break. • It comes as the US aims to break China's stranglehold over the global electric battery supply chain. • Key US automakers like Tesla and Ford are still using …",
      "url": "https://biztoc.com/x/e630060b11a0954b",
      "urlToImage": "https://c.biztoc.com/p/e630060b11a0954b/og.webp",
      "publishedAt": "2023-12-05T01:58:08Z",
      "content": "The White House has announced EVs with Chinese parts will be disqualified from a crucial tax break.It comes as the US aims to break China's stranglehold over the global electric battery supply chain.… [+241 chars]"
    }
  ];
 

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

    </>
  );
}
