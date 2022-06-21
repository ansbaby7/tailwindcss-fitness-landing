import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Trainers from "./components/Trainers"


const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Trainers/>
      <Pricing/>
      <Contact/>
    </div>
  )
}

export default App
