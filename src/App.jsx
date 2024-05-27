
import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
function App() {

  return (
    <>
     <Header/>
     <main>
    <Home/>
      <About/>
      <Menu/>
     </main>
     <Footer/>
    </>
  )
}

export default App
