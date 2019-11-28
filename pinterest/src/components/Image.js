import React from 'react';

export const Image = ({ url, alt, forwardref  }) => {
    return (
        <img ref={forwardref} src={url} alt={alt} />

    )

}