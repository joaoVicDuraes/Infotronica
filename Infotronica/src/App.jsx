import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ServiceCard from './components/common/ServiceCard/ServiceCard.jsx'
import Header from './components/layout/Header/Header.jsx'
import Computadores from './sections/Computadores/Computadores.jsx'
import Perifericos  from './sections/Perifericos/Perifericos.jsx'
import SobreNos from './sections/SobreNos/SobreNos.jsx'
import Manutencao from './sections/Manutencao/Manutencao.jsx'
import Footer from './components/layout/Footer/Footer.jsx'
import Faq from './sections/Faq/Faq.jsx'

import ComputadoresPage from './pages/ComputadoresPage.jsx'
import PerifericosPage from './pages/PerifericosPage.jsx' 
function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <ServiceCard />
            <Computadores />
            <Perifericos />
            <SobreNos />
            <Manutencao />
            <Faq />
          </>
        } />

        <Route path="/loja-computadores" element={<ComputadoresPage />} />
        {}
        <Route path="/loja-perifericos" element={<PerifericosPage />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App