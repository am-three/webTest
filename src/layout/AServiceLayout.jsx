import React from 'react'
import { Outlet } from 'react-router-dom'

const AServiceLayout = () => {
    return (

        <div>

            <h3 className='text-center text-orange-400 m-10'> Academic Services </h3>

            <Outlet />



        </div>

    )
}

export default AServiceLayout


