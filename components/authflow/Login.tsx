import * as React from 'react'
import {useAuth} from "../hooks"

export const Login = () => {
    const {authenticateUser} = useAuth()
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
  return (
    <div className="flex h-screen py-8 justify-center items-center">
        <div className="w-1/2 flex flex-col pb-12">
            <input 
            placeholder="Username"
            value={username}
            className="mt-8 border rounded p-4"
            onChange={e => setUsername( e.target.value )}
            />
            <input
            placeholder="Password"
            type="password"
            value={password}
            className="mt-2 border rounded p-4"
            onChange={e => setPassword( e.target.value )}
            />
            <button 
            onClick={()=>authenticateUser()} 
            className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
            Login
            </button>
        </div>
    </div>
  )
}
