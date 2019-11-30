import React from 'react'
import Card from 'react-bootstrap/Card'

export const Image = ({ url, alt, forwardref  }) => {
    return (
        <img ref={forwardref} src={url} alt={alt} />

    )

}