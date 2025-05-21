import { purposesTo } from "../constants"
import { Maximize } from 'lucide-react';
import './style.css';


const Purpose = () => {
    return (
        <div className="mt-20 p-20">

            <div className="flex flex-wrap gap-24">

                {purposesTo.map((purpose, index) => (
                    <div key={index} className="w-full">
                        <div className="purposeBdr border border-nuetral-700 p-5 rounded-xl  transition-transform duration-300 hover:scale-105">

                            <div className="flex justify-center gap-2 ">
                                <Maximize />
                                <p className="tracking-wider text-2xl  bg-gradient-to-r from-orange-700 to-red-500 text-transparent bg-clip-text mb-10"> {purpose.title} </p>
                            </div>
                            {purpose.features}

                        </div>
                    </div>
                ))}

            </div>

            <div className="mt-20 text-center">
                <a href='#' className='registerBtn bg-gradient-to-r from-orange-500 to-orange-800 rounded-md px-20 py-4'>
                    REGISTER
                </a>

            </div>





        </div>

    )
}

export default Purpose
