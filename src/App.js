
import './App.css';
import Homebanner from './pages/Homebanner';
import Header from './component/Header';
import Compotag from './component/Compotag';


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
   </>
  );
}

export default App;
