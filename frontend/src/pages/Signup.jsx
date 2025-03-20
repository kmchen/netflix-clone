import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='hero-bg h-screen w-full'>
        <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <Link to={"/"}>
                <img src='/netflix-logo.png' alt='Netflix logo' className='w-52'></img> 
            </Link>
        </header>

        <div className='flex justify-center items-center mt-20 mx-3'>
            <div className="w-full max-w-md p-8 space-x-6 bg-black/60 rounded-lg shadow-md">
                <h1 className='text-center text-white text-2xl font-bold mb-4 block'>Sign up</h1>
                <form className='space-y-4'>
                    <div>
                        <label htmlFor="email" className='text-sm font-medium text-gray-300 block'>Email</label>
                        <input type="email" placeholder='your@example.com' id="email"
                            className='font-medium w-full px-3 mt-1 border rounded-md border-gray-700 bg-transparent text-white focus:outline-none focus:ring'></input>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup