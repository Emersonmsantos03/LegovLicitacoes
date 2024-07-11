
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Partners from './components/Partners'
import Soluctions from './components/Soluctions'

function App() {


  return (
   <div className='project'>
    <Home />
    <About  />
    <Soluctions />
    <Partners />
    <Contact  />
   </div>
  )
}

export default App
