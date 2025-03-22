import React from 'react'
import { Link } from 'react-router-dom'
import {ChevronRight} from 'lucide-react'
function NonAuthScreen() {
  return (
    <div className='hero-bg h-screen'>
        <header className='w-full flex justify-between'>
            <Link to={'/'}>
                <img src="/netflix-logo.png" alt="Netflix logo" className='w-52 m-5 '></img>
            </Link>
            <Link to={'/signup'} className=''>
                <button className='bg-red-500 p-4 m-5 text-white rounded-md'>Sign up</button>
            </Link>
        </header>
        {/* HERO SECTION */}
        <div className='flex md:flex-col justify-center items-center text-center mx-auto py-40 max-w-6xl'>
            <h1 className='text-white text-4xl md:text-6xl font-bold mb-4'>Unlimited movies, TV shows, and more</h1>
            <p className='text-white text-lg mb-4'>Watch anywhere. Cancel anytime</p>
            <p className='text-white mb-4'>Ready to watch? Enter your email to create or restart your membership</p>
            <form className='flex flex-col md:flex-row gap-4 w-1/2'>
                <input type='email' placeholder='Email address'
                    className='p-2 rounded flex-1 bg-black/80 border border-gray-700'></input>
                <button className='text-white bg-red-600 text-xl lg:text-2xl px-2 py-1 md:py-2 rounded flex justify-center items-center'>Get Started
                    <ChevronRight className='size-8 md:size-10'></ChevronRight>
                </button>
            </form>
        </div>
        {/* SEPRATOR */}
        <div className='h-2 w-full bg-[#232323]' aria-hidden='true'></div>
        {/* 1st Section */}
        <div className='flex flex-col md:flex-row bg-black px-2 md:px-3 justify-center items-center py-10 mx-auto'>
            {/* LEFT SIDE */}
            <div className='flex-1 text-white text-center'>
            <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>Enjoy on your TV</h1>
            <p className='text-lg md:text-xl'>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray player, and more</p>
            </div>
            {/* RIGHT SIDE */}
            <div className='flex-1 relative'>
                <img src='/tv.png' className='mt-4 relative z-10'></img>
                <video autoPlay={true} playsInline muted loop
                    className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                    <source src='/hero-vid.m4v' type="video/mp4"></source>
                </video>
            </div>
        </div>
    </div>
  )
}

export default NonAuthScreen