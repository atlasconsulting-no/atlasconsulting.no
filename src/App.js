import './App.scss';
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
import About from './components/About/About';
import Qualities from './components/Qualities/Qualities';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Consultants from './components/Consultants/Consultants';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header id='home'/>
      <About id='about'/>
      <Services id='services'/>
      {/* <Qualities /> */}
      {/* <Features /> */}
      {/* <Portfolio /> */}
      <Consultants id='consultants'/>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
  