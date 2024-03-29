import React from 'react';
import { CardItem } from '././CardItem'
import CardColumns from 'react-bootstrap/CardColumns'


export const ContainerImg = ({data, forwardRef}) => {

    return (
       
        <CardColumns style={{columnCount: "5", margin: "20px 50px 0px 50px"}} >
            {
                data.map((item, index) => {
                    return <CardItem 
                    key={item.id} 
                    forwardref={
                        data.length === 1 + index ? forwardRef:undefined
                    } 
                    {...item} 
                    />
                    
                })
            } 
      
        </CardColumns>
        
        
    )

}

