import React from 'react'
import signinpic from '../assets/signinpic.jpg'
import './style.css'

const SignIn = () => {
    return (
        <div className=''>
            <form className='signIncontainer  flex justify-center items-center  gap-5 p-10'>
                <div className='md:w-1/2 w-full'>
                    <h3 className='text-center font-bold'> <span className='text-orange-400' > Sign In </span> </h3>

                    <div className='inputBox'>
                        <input type='text' placeholder='User Name' required />

                    </div>

                    <div className='inputBox'>
                        <input type='password' placeholder='Password' required />
                    </div>

                    <div className='remember'>
                        <label> <input type='checkbox' /> Remember Me </label>
                    </div>

                    <button className='subSignIn' type='submit'> Sign In </button>

                    <div className='signInLink'>
                        <p> Don't have an account? <a href="#"> Sign Up </a></p>
                    </div>

                </div>

                <div className='md:w-1/2 hidden md:block'>
                    <img width={500} src={signinpic} alt='background' className='opacity-80' />
                    <p> its all just demo </p>
                </div>


            </form>


            <div className="text-center mt-10 font-semibold">
                <p>
                    <span className="fooText bg-gradient-to-b from-slate-200 to-red-600 bg-clip-text text-transparent">
                        &copy; {new Date().getFullYear()} flashWeb &trade;
                    </span>
                </p>
            </div>




        </div>
    )
}

export default SignIn
