import './App.css';
import AboutContainer from './components/About/AboutContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { Routes, Route } from 'react-router-dom'

import TourContainer from './components/Tour/TourContainer'
import TicketContainer from './components/Ticket/TicketContainer'

import TourItemContainer from './components/Tour/TourItem/TourItemContainet';

import FooterContainer from './components/Footer/FooterContainer';
import ModalContainer from './components/Modal/ModalContainer';
import ContactContainer from './components/Contact/ContactContainer';

function App() {



  return (

    <div className="App">
    
     
      <HeaderContainer />


      <Routes>
        <Route path="" element={<AboutContainer />} />
        <Route path="/tour" element={<TourContainer />} />
        <Route path="/tour/:id" element={<TourItemContainer />} />
        <Route path="/ticket" element={<TicketContainer />} />

        <Route path="/contact" element={<ContactContainer />} />


      </Routes>


      <FooterContainer />
    </div>

  )

}

export default App
