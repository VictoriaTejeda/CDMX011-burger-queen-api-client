import React from 'react'
import { FormLogin } from './FormLogin'
import { singIn } from '../firebaseconfig'
import { useNavigate } from 'react-router'

export const Login = () => {
    const navigate= useNavigate()
   const handleLogin = (email, password) => {
        singIn(email, password)
        navigate("order")
    }
    return (
        <div>
            <FormLogin handleLogin={handleLogin} />
        </div>
    )
}

