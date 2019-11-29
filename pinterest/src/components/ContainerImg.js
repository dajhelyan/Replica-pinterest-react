import React from 'react';
import { CardItem } from '././CardItem'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

export const ContainerImg = ({data, forwardRef}) => {

    return (
       
            <CardColumns style={{columnCount: "5", margin: "20px 50px 0px 50px"}} >
                    {
                        data.map((item) => {
                            return <CardItem key={item.id} forwardref={forwardRef} {...item} />
                            
                        })
                    } 
            </CardColumns>
        
    )

}