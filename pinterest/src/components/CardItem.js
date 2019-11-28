import React from 'react';
import { Image } from './Image'

// componente card por imagen que recibe como prop una todo item(data)
export const CardItem = ({ forwardref, ...item }) => {
    


    // const [ on, setOn ] = useState(true)

    /* const handleClick = (e) => {
        console.log(e.target, 'click');

    } */

    return (
        <div className="card" onClick={(e) => console.log(e.target)
        }>
            {/* inseratando componente imagen mandando de prop link de cada imagen y descripcion */}
            <Image forwardref={forwardref} url={item.urls.small} alt={item.alt_description} />
            
        </div>
    )
}   