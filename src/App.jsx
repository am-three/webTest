import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import FeatureSection from './components/FeatureSection'
import Service from './components/Service'
import Purpose from './components/Purpose'
import OurPartners from './components/OurPartners'
import Footer from './components/Footer'
import Opportunities from './components/Opportunities'
import AboutUs from './components/AboutUs'
import SignIn from './components/SignIn'
import Regist from './components/Regist'
import NotFoundPage from './components/NotFoundPage'

import RootLayout from './layout/RootLayout'
import ComponentLayout from './layout/ComponentLayout'

import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >

      <Route path='/home' element={<HeroSection />} />
      <Route path='service' element={<Service />} />
      <Route path='opportunities' element={<Opportunities />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='register' element={<Regist />} />
      <Route path='*' element={<NotFoundPage />} />

      <Route path='pages' element={<ComponentLayout />} />

      {/* <Route path='herosection' element={<HeroSection />} />
      <Route path='featuresection' element={<FeatureSection />} />
      <Route path='purpose' element={<Purpose />} />
      <Route path='ourpartners' element={<OurPartners />} />
      <Route path='footer' element={<Footer />} /> */}








    </Route>


  )
)


const App = () => {
  return (
    <>

      <RouterProvider router={router} />

      {/* <Navbar /> */}


      {/* <HeroSection />


      <FeatureSection />

      <Service />

      <Purpose />

      <OurPartners />

      <Footer /> */}

    </>


  )
}

export default App
