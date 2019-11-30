import React from 'react';
import { Image } from './Image'
import Card from 'react-bootstrap/Card'


// componente card por imagen que recibe como prop una todo item(data)
export const CardItem = ({ forwardref, ...item }) => {

    return (
        <Card>
                <Image forwardref={forwardref} url={item.urls.small} alt={item.alt_description} />
        </Card>
    )
}   