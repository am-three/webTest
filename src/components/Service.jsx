import { checklistItems } from '../constants';
import { CheckCheck } from 'lucide-react';
// import serviceBg from '../assets/acdemicBg.jpg';
import serviceBg from '../assets/serviceBgEd.jpg';

import './style.css';

const Service = () => {
    return (

        <div className='cursor-pointer'>

            <h2 className='md:text-6xl text-3xl text-center mt-6 tracking-tight
            bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text'>
                Services
            </h2>

            <div className='flex flex-wrap justify-center items-center mt-10'>
                <div className='p-2 md:w-1/2 w-full flex justify-center'>
                    {/* <img className='acdemicBg w-[600px] opacity-70  rounded-lg' src={serviceBg} alt='Srvice Background' /> */}
                    <img className='serviceImg w-[400px] h-[500px] opacity-100 ' src={serviceBg} />
                </div>

                <div className='pt-12 pe-4 md:w-1/2 w-full'>
                    {checklistItems.map((item, index) => (

                        <div key={index} className='flex mb-12'>
                            <div className='text-green-400 mx-6 bg-neutral-800 h-10 w-10 p-2 justify-center items-center rounded-full'>
                                <CheckCheck />
                            </div>

                            <div>
                                <h3 className='mt-1 mb-2 text-xl'> {item.title} </h3>
                                <p className='text-md text-neutral-500'> {item.description} </p>
                            </div>
                        </div>

                    ))}
                </div>


            </div>

        </div>

    )
}

export default Service
