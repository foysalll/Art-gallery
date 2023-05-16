import Header from './component/Header/Header';
import Header2nd from './component/Header/Header2nd/Header2nd';
import './App.css';
import Artgallery from './component/artgallery/Artgallery';
import Artisjourney from './component/artistsjourney/Artistjourney';
import Upcomingevents from './component/upcomingevents/Upcomingevents';
import Footer from './Footer/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <Header2nd></Header2nd>
      <Artgallery></Artgallery>
      <Artisjourney></Artisjourney>
      <Upcomingevents></Upcomingevents>
      <Footer></Footer>

    </div>
  );
}

export default App;
