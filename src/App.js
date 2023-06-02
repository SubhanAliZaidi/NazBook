import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Service from './components/Service';
import About from './components/About';
import NoteState from './context/Notes/NoteState';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Router>

          <Navbar />
          <Alert alert={false} color={'danger'} />
          <Routes>

            <Route exact path='/' element={<Home />}></Route>

            <Route exact path='/Pricing' element={<About />}></Route>

            <Route exact path='/Work' element={<Work />}></Route>

            <Route exact path='/Service' element={<Service />}></Route>

          </Routes>
          <Footer/>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
