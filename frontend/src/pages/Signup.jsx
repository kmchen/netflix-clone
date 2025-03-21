import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(email, username, password)
    }
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
                <form className='space-y-4' onSubmit={handleSignup}>
                    <div>
                        <label htmlFor="email" className='text-sm font-medium text-gray-300 block'>Email</label>
                        <input type="email" placeholder='your@example.com' id="email"
                            className='font-medium w-full px-3 mt-1 border rounded-md border-gray-700 bg-transparent text-white focus:outline-none focus:ring'
                            value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                    </div>
                    <div>
                        <label htmlFor="username" className='text-sm font-medium text-gray-300 block'>Username</label>
                        <input type="username" placeholder='your@example.com' id="email"
                            className='font-medium w-full px-3 mt-1 border rounded-md border-gray-700 bg-transparent text-white focus:outline-none focus:ring'
                            value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
                    </div>
                    <div>
                        <label htmlFor="password" className='text-sm font-medium text-gray-300 block'>Password</label>
                        <input type="password" placeholder='your@example.com' id="email"
                            className='font-medium w-full px-3 mt-1 border rounded-md border-gray-700 bg-transparent text-white focus:outline-none focus:ring'
                            value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                    </div>
                    <button className='bg-red-600 w-full rounded-md py-2 text-white font-semibold focus:bg-red-700'>Sign Up</button>
            <div className='text-gray-300 text-center'>Already a member? {"  "}
                <Link to={'/login'} className='text-red-500 hover:underline'>Sign in</Link>
            </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup