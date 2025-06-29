import './style.css'

// const regist = () => {

//     return (

//         <form className='mt-10 p-5 h-screen'>
//             <h1 className='text-center font-bold text-3xl text-orange-500'> Register  </h1>

//             <div className='h-full grid'>
//                 <div className='inputBox md:flex grid justify-center gap-3  pt-12'>

//                     <input type='text' placeholder='Full Name' required />
//                     <input type='text' placeholder='Date of Birth <dd.mm.yyyy>' required />
//                     <input type='text' placeholder='Father Name' required />
//                     <input type='text' placeholder='Address' required />

//                 </div>

//                 <div className='text-center'>
//                     <button className=' registSub px-8 py-3 tracking-wider text-orange-400' type='submit'> SUBMIT </button>
//                 </div>
//             </div>

//         </form>


//     )
// }

// export default regist
import React from 'react'

const Regist = () => {
    return (
        <div className=''>

            <form className='mb-32 mt-10 p-5 '>
                <h1 className='text-center font-bold text-3xl text-orange-500'> Register  </h1>

                <div className=' md:grid md:gap-y-32'>
                    <div className=' md:flex grid justify-center gap-3 gap-y-6 pt-12 mb-10'>

                        <input className='registInput' type='text' placeholder='Full Name' required />
                        <input className='registInput' type='text' placeholder='Date of Birth ' required />
                        <input className='registInput' type='text' placeholder='Father Name' required />
                        <input className='registInput' type='text' placeholder='Address' required />

                    </div>

                    <div className='text-center'>
                        <button className=' registSub px-8 py-3 tracking-wider text-orange-400' type='submit'> SUBMIT </button>
                    </div>


                </div>




            </form>


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

export default Regist


