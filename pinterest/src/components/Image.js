import React from 'react'
import Card from 'react-bootstrap/Card'

export const Image = ({ url, alt, forwardref  }) => {
    return (
        <Card.Img ref={forwardref} src={url} alt={alt} />

    )

}