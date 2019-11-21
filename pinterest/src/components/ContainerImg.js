import React from 'react';
import { CardItem } from '././CardItem'


export const ContainerImg = ({data}) => {

    return (
        <section>
            <div className="card-columns">
                {
                    data.map((item) => {
                        return <CardItem key={item.id} {...item} />
                    })
                }
            </div>
        </section>
    )

}