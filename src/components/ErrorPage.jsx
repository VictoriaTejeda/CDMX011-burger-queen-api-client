import React from 'react'
import { Link } from "react-router-dom";
import NotFound from "../assets/NotFound.png";
import "../Scss/NotFound.scss";

export const ErrorPage = () => {
    return (
        <div>
            <img src={NotFound} alt="notFound" className="imgNotFound" />
            <p>PÁGINA NO ENCONTRADA</p>
            <Link to='/' className='linkHome'>Home 🏘️</Link>
        </div>
    )
}
