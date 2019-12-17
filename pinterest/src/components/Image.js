import React from 'react';


export const Image = ({ url, alt, forwardref  }) => {
    const defaultImageSrc = 'https://cdn2.thecatapi.com/images/8ub.jpg';
    if (url === '') {
        return (
            <img data-testid="image" ref={forwardref} src={defaultImageSrc} alt={alt} />      
        )
    }

    return (
        <img data-testid="image" ref={forwardref} src={url} alt={alt} />      
    )

}

