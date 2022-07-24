import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Home/Banner';
import Contents from './Components/Home/Contents';
import Posts from './Components/Home/Posts';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Banner></Banner>
     <Contents></Contents>
     <Posts></Posts>
     <Footer></Footer>
    </div>
  );
}

export default App;
