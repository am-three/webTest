import './style.css'
// import video1 from '../assets/video1.mp4'
// import video2 from '../assets/video2.mp4'
import video3 from '../assets/webVid.mp4'
import { replace, useNavigate } from 'react-router-dom'


const HeroSection = () => {

    const navigate = useNavigate();

    return (

        <div className='heroContainer flex flex-col items-center mt-6 lg:mt-20 max-w-7xl mx-auto pt-20 px-6'>

            <h3 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide pb-5 aniText1'>
                Your Passioniate Desire Is
                <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                    {' '}Your GuideBook
                </span>

                <p className='mt-10 text-lg text-neutral-400 max-w-8xl'>
                    Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
                </p>
            </h3>

            <div className='heroBtn flex justify-center my-20'>
                <a href='#' onClick={() => navigate('/pages')} className='takeATour bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
                    Let's Deep Diving
                </a>

                <a href='#' onClick={() => navigate('/aboutus')} className='aboutUs py-3 px-4 mx-3 border rounded-md'>
                    About Us
                </a>
            </div>

            {/*<div className='flex mt-48 justify-center space-x-5'>
                
                <video autoPlay loop muted className=' w-[900px] h-[400px]  my-4  opacity-80'>
                    <source className='' src={video3} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </div>  */}

            <div className="text-center mt-10 font-semibold">
                <p>
                    <span className="fooText bg-gradient-to-b from-slate-200 to-red-600 bg-clip-text text-transparent">
                        &copy; {new Date().getFullYear()} flashWeb &trade;
                    </span>
                </p>
            </div>


        </div >
    )
}

export default HeroSection

{/* <video autoPlay loop muted className='w-1/2 border rounded-lg border-orange-600 shadow-orange-400 my-4'>
                    <source src={video1} type='video/mp4' />
                    Your browser does not support the video tag.
    </video> 
*/}
