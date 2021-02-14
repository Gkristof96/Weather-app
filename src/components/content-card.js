import React from 'react'
import ErrorCard from './errorcard'
import Current from './current'

const ContentCard = ({ weather, error}) => {
    return (
        <>
            {error ? <ErrorCard /> : <Current weather={weather} />}
        </>
    )
}

export default ContentCard