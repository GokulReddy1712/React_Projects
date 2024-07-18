import './App.css';
import Accordian from './components/Accordian';
import Category from './components/Category/Category';
import Clock from './components/Clock/Clock';
import ImageSlider from './components/Image-slider';
import LightDarkTheme from './components/Light-Dark-Mode';
import Nav from './components/Nav/Nav';
import QRCodeGenerator from './components/Qr-code_Generator';
import RandomColor from './components/Random_Color';
import ScrollIndicater from './components/Scroll-Indicater';
import StarRating from './components/Star-rating';
import LoadMoreData from './components/load-more-data';
import Counter from './components/practice/counter';
import Prac from './components/practice/prac';

function App() {
 
  return (
    <>
      {/* <Accordian/>
      <RandomColor/>
      <StarRating/> */}
      {/* <ImageSlider url= {"http://picsum.photos/v2/list"} page = {"1"}limit = {"10"} /> */}
      {/* <LoadMoreData/> */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkTheme/> */}
      {/* <Prac/> */}
      {/* <ScrollIndicater url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <Clock/> */}
      {/* <Nav/> */}
      <Category/>

    </>
  );
}

export default App;
