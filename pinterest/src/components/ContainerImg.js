import React from 'react';
import { CardItem } from '././CardItem'


export const ContainerImg = ({data, props}) => {

    return (
        <section>
            <div className="card-columns">
                {
                    data.map((item, index) => {
                        if (data.length === index + 1) {
                            return <CardItem ref={props.refData} key={item.id} {...item} />
                        } else {
                            return <CardItem key={item.id} {...item} />
                        }
                    })
                }
            </div>
        </section>
    )

}