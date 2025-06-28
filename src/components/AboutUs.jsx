import React from 'react'
import { DiamondPlus } from 'lucide-react';
import { Wind } from 'lucide-react';
import { LandPlot } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className='bg-gray-700 p-5 h-screen fixed'>

            <div className='mt-10 text-center'>

                <h3 className='font-bold text-3xl mb-5 text-orange-500'> Why Choose Us </h3>
                <p> State-of-the-art curriculums are developed and evaluated periodically to keep up with rapid changes in different sectors. </p>

            </div>

            <div className='mt-12 m-5'>

                <h3 className='text-center text-xl'> Here's why you should study with us </h3>
                <div className='flex justify-between mt-10 gap-5'>

                    <div className='border border-neutral-300 rounded-md p-3 text-center'>
                        <div className='flex justify-center gap-3'>
                            <DiamondPlus />
                            <h3 className='mb-3 text-lg'> Focus On Target </h3>
                        </div>
                        <p> Being proactive is how we were able to continue our classes through the pandemic. We tend to keep impacts from external factors (i.e., the geopolitical situation) at a minimum. Our focus is on the most important factors that affect our students.</p>
                    </div>

                    <div className='border border-neutral-300 rounded-md p-3 text-center'>
                        <div className='flex justify-center gap-3'>
                            <Wind />
                            <h3 className='mb-3 text-lg'> Focus On Success </h3>
                        </div>
                        <p> In order to achieve success, students must be able to work independently and effectively. We have a strong focus on the success of our students. There are two learning options available to students: Online/On Campus. </p>
                    </div>

                    <div className='border border-neutral-300 rounded-md p-3 text-center'>
                        <div className='flex justify-center gap-3'>
                            <LandPlot />
                            <h3 className='mb-3 text-lg'> Advanced Study Plans </h3>
                        </div>
                        <p> Students have the privilege to take extra classes (of different intakes) from their respective lecturers apart from the regular classes so that students have chances to revise the lectures they have taken. </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AboutUs
