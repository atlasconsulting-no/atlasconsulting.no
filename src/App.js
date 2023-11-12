import './App.scss';
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
import About from './components/About/About';
import Consultants from './components/Consultants/Consultants';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header id='home'/>
      <About id='about'/>
      <Services id='services'/>
      <Consultants id='consultants'/>
      <Footer />
    </div>
  );
}

export default App;
  