// import './App.css';
import { Home } from './Components/Page/Home';
import { Navbar } from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Page/Footer';
import About from './Components/Page/About';
import Testimonials from './Components/Page/Testimonials';
import Doctors from './Components/Page/Doctors';
import Hero from './Components/Page/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Hero/>
      <Doctors/>
      <Testimonials/>
      <About/>
      <Footer/>
      
    </div>
  );
}

export default App;
