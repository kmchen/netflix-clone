import React from 'react'
import NonAuthScreen from './NonAuthScreen';
import AuthScreen from './AuthScreen';
import { useAuthStore } from '../../store/authUsers.js';

function Home() {
  const {user} = useAuthStore();
  console.log('......')
  return (
    <div>{user ? <AuthScreen/> : <NonAuthScreen/>}</div>
  )
}

export default Home