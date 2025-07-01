import React from 'react'

const Opportunities = () => {
    return (
        <div className=' p-10 h-screen w-screen md:fixed'>

            <h3 className='text-center font-mono text-3xl text-orange-500'> FACILITIES </h3>

            <div className='md:flex  justify-center items-center gap-14 mt-20 '>

                <div className='max-w-[500px] mb-10'>
                    <p className='mb-5'> Advanced classrooms and learning facilities </p>
                    <p className='text-gray-400'> Being able to continue attending international advanced programs such as A Level, SAT and OSSD in one place </p>
                </div>

                <div className='max-w-[500px]'>
                    <p className='mb-8'> Providing doctors to constantly monitor the health of students </p>
                    <p className='text-gray-400'> Organising monthly festivals, activities and Student Talent Week programs </p>
                </div>

            </div>

            <div className="text-center mt-[300px] font-semibold">
                <p>
                    <span className="fooText bg-gradient-to-b from-slate-200 to-red-600 bg-clip-text text-transparent">
                        &copy; {new Date().getFullYear()} flashWeb &trade;
                    </span>
                </p>
            </div>


        </div>
    )
}

export default Opportunities
