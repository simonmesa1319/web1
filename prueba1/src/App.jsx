import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/navbar'
import Footer from './Footer/footer'
import Section from './Section/section'
import Imagen from './Imagen/iamgen'
import Boton from './Botones/botones'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <section className="main">
        <div className="left">
        <Section/>
        <div className="button-container">
          <Boton/>
        </div>
        </div>
        <div className="right">
          <Imagen/>
        </div>
        
      </section>
      <div className='footer'> 
        <Footer/>
      </div>
    </>
  )
}

export default App
