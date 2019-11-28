import { useState, useEffect } from 'react'
import Axios from 'axios'

const useDataSearch = (query, pageNum, setData) => {
    const id = '4c974f2e37b1799fdb6e91a0f891a25df26b687e9e6eb77816d9988dd5142e59';

    const [loading, setLoading] = useState(true)
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        
        Axios({
          method: "GET",
          url: `https://api.unsplash.com/search/photos?&client_id=${id}&per_page=20`,
          params: { query: query, page: pageNum }
        }).then(res => {
          setLoading(false)
          setHasMore(true)
          return setData(res.data.results)
        })

        
      }, [query, pageNum])
      return { loading, hasMore }
}

export default useDataSearch;