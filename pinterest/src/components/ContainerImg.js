import React from 'react';
import { CardItem } from '././CardItem'
import InfiniteScroll from 'react-infinite-scroller'

export const ContainerImg = ({data, setPageNum, hasMore}) => {

    return (
        <section>
            <div className="card-columns">
            <InfiniteScroll
                pageStart={0}
                loadMore={data}
                hasMore={true}
                loader={<div className="loader">Loading ...</div>}
                useWindow={false}
                >
                    
                {
                data.map((item) => {
                    return <CardItem  key={item.id} {...item} />
                    
                })
                } 
            </InfiniteScroll>
            </div>
        </section>
    )

}