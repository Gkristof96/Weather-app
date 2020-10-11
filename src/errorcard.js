import React from 'react'
import { FaTimesCircle } from 'react-icons/fa'

const ErrorCard = () => {
    return (
        <>
            <div className='error'>
                <h1 className='error__title'><FaTimesCircle></FaTimesCircle> Hiba történt!</h1>
                <h2 className='error__subtitle'>A település nem létezik!</h2>
            </div>
        </>
    )
}

export default ErrorCard