import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, NavBar, Tech, Works, Stars} from './components'

function App() {


  return (
   <BrowserRouter>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
    <NavBar />
    <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className="relative z-0">
      <Contact />
      <Stars />
    </div>
   </div>
   </BrowserRouter>
  )
}

export default App
