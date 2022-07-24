import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Home/Banner';
import Contents from './Components/Home/Contents';
import Posts from './Components/Home/Posts';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Banner></Banner>
     <Contents></Contents>
     <Posts></Posts>
    </div>
  );
}

export default App;
