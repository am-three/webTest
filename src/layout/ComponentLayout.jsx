import React from 'react'
import { Outlet } from 'react-router-dom'

import FeatureSection from '../components/FeatureSection'
import Service from '../components/Service'
import Purpose from '../components/Purpose'
import OurPartners from '../components/OurPartners'
import Footer from '../components/Footer'


const ComponentLayout = () => {
    return (
        <div>

            <FeatureSection />

            <Service />

            <Purpose />

            <OurPartners />

            <Footer />

            <Outlet />


        </div>
    )
}


export default ComponentLayout
