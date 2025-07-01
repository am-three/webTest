import './style.css';
import { features } from "../constants"
import video3 from '../assets/webVid.mp4'

const FeatureSection = () => {

    return (

        <div className="relative  border-b border-neutral-600 min-h-[500px]">

            <div className='mt-[-50px] h-vh md:m-0 mb-36'>

                <video autoPlay loop muted className='h-screen opacity-80'>
                    <source className='' src={video3} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>

            </div>


            <div className="text-center">
                <span className="text-orange-500 uppercase bg-neutral-800 rounded-full h-6 font-medium px-5 py-3">
                    features
                </span>

                <h3 className="text-4xl md:text-6xl mt-10 tracking-wide">
                    <span className="bg-gradient-to-r from-orange-300 to-orange-700 text-transparent bg-clip-text">
                        Study in our Campus
                    </span>
                </h3>
            </div>

            <div className="flex flex-wrap mt-10 md:mt-20">
                {features.map((feature, index) => (

                    <div key={index} className="md:w-1/3 w-1/2">
                        <div className=" flex">

                            <div className="featIcon flex mx-6 w-10 h-10 p-2 bg-neutral-700 text-orange-500 justify-center items-center rounded-full">
                                {feature.icon}
                            </div>

                            <div>
                                <h5 className="featText mt-2 mb-5 text-xl tracking-tight"> {feature.text} </h5>
                                <p className="text-md p-2 mb-20 text-neutral-400 transition-transform duration-300 hover:scale-105">
                                    {feature.description}
                                </p>
                            </div>

                        </div>
                    </div>

                ))}
            </div>



        </div>
    )
}

export default FeatureSection
