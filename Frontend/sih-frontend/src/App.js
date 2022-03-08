import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Main from './Components/Maincontent/Main';
import Card from './Components/Card/Card';


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Main/>
     <Card/>
    <hr  id='hr'/>
    <Footer/>


    </div>
  );
}

export default App;
