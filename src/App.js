import '../src/dist/styles.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Navbar from '../src/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Models from './Pages/Models'
import TestimonialsPage from './Pages/TestimonialsPage'
import Team from './Pages/Team'
import Contact from './Pages/Contact'
import CarDetails from './components/CarDetails'
import { SignIn } from './Pages/SignIn'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="models/:slug" element={<CarDetails />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<SignIn/>} />
        <Route path="signUp" element={<SignUp/>} />
      </Routes>
      {/* <DatePickerRange /> */}
      {/* <CarDetailCard /> */}
    </>
  )
}

export default App
