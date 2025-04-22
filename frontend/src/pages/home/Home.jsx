import React from 'react'
import NonAuthScreen from './NonAuthScreen';
import AuthScreen from './AuthScreen';
import { useAuthStore } from '../../store/authUsers';

function Home() {
  const {user} = useAuthStore();
  return (
    <div>{user ? <AuthScreen/> : <NonAuthScreen/>}</div>
  )
}

export default Home