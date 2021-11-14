import React, { useState } from 'react'


// eslint-disable-next-line react/prop-types
export const FormLogin = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPass(e.target.value);

    return (
        <div>
            <div>
                <input type="radio" value="Admin" name="profile" /> Admin
                <input type="radio" value="Waiter" name="profile" /> Mesero
                <input type="radio" value="kitchen" name="profile" /> Cocina
            </div>
            <h3>Nombre:</h3>
            <input type="text" required />
            <h3>Correo Electrónico:</h3>
            <input type="text" placeholder="ejemplo@correo.com" onChange={handleEmail} required />
            <h3>Password:</h3>
            <input type="password" placeholder="******" onChange={handlePassword} required />
            <br />
            <button onClick={(e) => { e.preventDefault(); handleLogin(email, pass)}} >Entrar</button>

        </div>
    )
}
