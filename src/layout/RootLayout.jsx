import React from 'react'
import Navbar from '../components/Navbar'

import HeroSection from '../components/HeroSection'

// import FeatureSection from '../components/FeatureSection'
// import Service from '../components/Service'
// import Purpose from '../components/Purpose'
// import OurPartners from '../components/OurPartners'
// import Footer from '../components/Footer'


import { Outlet } from 'react-router-dom'

const RootLayout = () => {

    return (
        <div>

            <Navbar />

            {/* <HeroSection /> */}

            <Outlet />


        </div>
    )
}

export default RootLayout
