import React from 'react';
import { CardItem } from '././CardItem'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

export const ContainerImg = ({data, forwardRef}) => {

    return (
       
            <CardColumns >
                 <Container>
                    {
                        data.map((item) => {
                            return <CardItem key={item.id} forwardref={forwardRef} {...item} />
                            
                        })
                    } 
                    </Container>
            </CardColumns>
        
    )

}