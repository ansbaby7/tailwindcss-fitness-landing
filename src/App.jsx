import About from "./components/About"
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
    </div>
  )
}

export default App
