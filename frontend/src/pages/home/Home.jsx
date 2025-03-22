import React from 'react'
import NonAuthScreen from './NonAuthScreen';
import AuthScreen from './AuthScreen';

function Home() {
  const user = false;
  return (
    <div>{user ? <AuthScreen/> : <NonAuthScreen/>}</div>
  )
}

export default Home