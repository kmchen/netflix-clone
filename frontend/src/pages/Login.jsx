import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(email, username, password)
    }

  return (
    <div className='hero-bg h-screen w-full'>
      <header className='max-w-6xl mx-auto flex justify-between items-center p-4'>
        <Link className='w-full' to={'/'}>
          <img src='/netflix-logo.png' alt='Netflix logo' className='w-52'></img> 
        </Link>
      </header>

      <div className='flex justify-center items-center mt-20 mx-3'>
        <div className='w-full max-w-md p-8 space-x-6 bg-black/60 rounded-lg shadow-md'>
          <h1 className='text-white font-bold text-2xl text-center block'>Login</h1>
          <form className='space-y-4' onSubmit={handleSignup}>
            <div>
              <label htmlFor='email' className='text-gray-300 text-sm font-medium'>Email</label>
              <input for='email' placeholder='you@example.com'
                className='text-white px-3 font-medium rounded-md w-full border-gray-700 mt-1 border bg-transparent focus:ring focus:outline-none'
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                ></input>
            </div>
            <div>
              <label htmlFor='username' className='text-gray-300 text-sm font-medium'>Username</label>
              <input for='username' placeholder='John Doe' type='text'
                className='text-white px-3 font-medium rounded-md w-full border-gray-700 mt-1 border bg-transparent focus:ring focus:outline-none'
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
                ></input>
            </div>
            <div>
              <label htmlFor='password' className='text-gray-300 text-sm font-medium'>Password</label>
              <input for='password' placeholder='' type='password'
                className='text-white px-3 font-medium rounded-md w-full border-gray-700 mt-1 border bg-transparent focus:ring focus:outline-none'
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                ></input>
            </div>
            <button className='w-full bg-red-600 focus:bg-red-700 text-center font-semibold rounded-md text-white py-2'>Sign in</button>
          </form>
          <div className='text-white text-center'>Dont' have an account yet? <Link to={'/signup'} className='text-red-500'>Sign up</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Login