import React from 'react';
import { CardItem } from '././CardItem'

export const ContainerImg = ({data, forwardRef}) => {

    return (
        <section>
            <div className="card-columns">
            {
                data.map((item) => {
                    return <CardItem key={item.id} forwardref={forwardRef} {...item} />
                    
                })
            } 
            </div>
        </section>
    )

}