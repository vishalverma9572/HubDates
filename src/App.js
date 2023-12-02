
import './App.css';
import Homebanner from './pages/Homebanner';
import Header from './component/Header';
import Compotag from './component/Compotag';
import Card from './component/Card';
import Horicard from './component/Horicard';


function App() {
  return (
   <>
    <Header/>
    <Compotag
    color="black"
    text='Trending'
    width={70}
    textcolor="white"
    />
    <Homebanner/>
    <Card
        imageUrl="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/116-485x360.jpg"
        cardTitle="Interior Designer and Maude Interiors by Yvonne Designs"
        author="Kunal Kamra"
        date="Aug 27 2013"
        detail="We woke reasonably late following the feast and free-flowing wine the night before. After gathering ourselves and our packs, we headed down to..."
        hoverColor="blue"
        width={20}
        showpara={false}
    />
    <Card
        imageUrl="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/116-485x360.jpg"
        cardTitle="Interior Designer and Maude Interiors by Yvonne Designs"
        author="Kunal Kamra"
        date="Aug 27 2013"
        detail="We woke reasonably late following the feast and free-flowing wine the night before. After gathering ourselves and our packs, we headed down to..."
        hoverColor="red"
        width={20}
        showpara={false}
    />
    <Horicard
    imageUrl="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/116-485x360.jpg"
    cardTitle="lkjlk ifjlkjf fkljflsd Interior Designer and Maude Interiors by Yvonne Designs"
    author="Kunal Kamra"
    date="Aug 27 2013"
    detail="We woke reasonably late following the feast and free-flowing wine the night before. After gathering ourselves and our packs, we headed down to..."
    hoverColor="red"
    width={20}
    showpara={true}/>
    
   </>
  );
}

export default App;
