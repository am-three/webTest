import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import './style.css'

const AcdemicService = () => {

    const serviceData = useLoaderData();

    const navigate = useNavigate();

    return (


        <div>

            <h2 className='text-center text-orange-400 text-lg'> Here's What You Can Learn </h2>

            <div className='min-h-[400px]'>

                <div className='serviceCon text-center md:flex grid grid-cols-1 '>

                    {serviceData.map((service) => {

                        return <Link>

                            <h4 className='text-neutral-400 font-bold tracking-wider mb-10'> {service.title} </h4>
                            <p> {service.training} </p>

                            <div className="mt-20 text-center">
                                <a href='#' onClick={() => navigate('/register')} className='registerBtn bg-gradient-to-r from-orange-500 to-orange-800 rounded-md !px-20 !py-4'>
                                    REGISTER
                                </a>

                            </div>


                        </Link>

                    })}


                </div>

            </div>

            <div className="text-center font-semibold">
                <p>
                    <span className="fooText bg-gradient-to-b from-slate-200 to-red-600 bg-clip-text text-transparent">
                        &copy; {new Date().getFullYear()} flashWeb &trade;
                    </span>
                </p>
            </div>

        </div>
    )

}

export default AcdemicService

export const serviceLoader = async () => {
    const res = await fetch('http://localhost:5000/services');

    return res.json();
}

