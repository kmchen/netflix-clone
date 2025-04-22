import React from 'react'
import {useAuthStore} from "../../store/authUsers"
function AuthScreen() {
  const {logout} = useAuthStore();
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default AuthScreen