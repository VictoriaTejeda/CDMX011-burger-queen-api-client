import React from 'react'
import { FormLogin } from './FormLogin'
import {singIn} from './firebaseconfig'
export const Login = () => {
    const handleLogin=(email,password)=>{
        singIn(email,password)
    }
    return (
        <div>
            <FormLogin handleLogin={handleLogin} />
        </div>
    )
}
