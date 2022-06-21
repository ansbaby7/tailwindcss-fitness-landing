import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Trainers from "./components/Trainers"


const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Trainers/>
    </div>
  )
}

export default App
