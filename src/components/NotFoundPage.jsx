import React from 'react'
import notfoundpic from '../assets/notfoundpic.jpg'

const NotFoundPage = () => {
    return (
        <div>
            <img src={notfoundpic} className='p-5 md:h-screen w-screen opacity-80' />
        </div>
    )
}

export default NotFoundPage
