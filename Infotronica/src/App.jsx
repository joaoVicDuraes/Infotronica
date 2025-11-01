import './App.css'
import ServiceCard from './components/common/ServiceCard/ServiceCard.jsx'
import Header from './components/layout/Header/Header.jsx'
import Computadores from './sections/Computadores/Computadores.jsx'

function App() {

  return (
    <>
      <Header />
      <ServiceCard />
      <Computadores></Computadores>
    </>
  )
}

export default App
