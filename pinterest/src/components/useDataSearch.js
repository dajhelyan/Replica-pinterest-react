import { useState, useEffect } from 'react'
import Axios from 'axios'

const useDataSearch = (query, pageNum) => {
  const id = '4c974f2e37b1799fdb6e91a0f891a25df26b687e9e6eb77816d9988dd5142e59';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(false)

  const fetchData = async(query) => {
    try {
      if (query === '') {
        await Axios(`https://api.unsplash.com/photos/?client_id=${id}&per_page=20`)
        .then(res => {
          console.log(res.data)
          return setData(res.data)
        })
      }
    }catch {
      console.log('lolo')
      
    }
  }

  useEffect(() => {
    fetchData(query);
    
  }, [])

    useEffect(() => {

      Axios({
        method: "GET",
        url: `https://api.unsplash.com/search/photos?&client_id=${id}&per_page=20`,
        params: { query: query, page: pageNum }
      }).then(res => {
        setLoading(false)
        setHasMore(true)
        setData(res.data.results)
        console.log(res.data.results, 'pprpr')
        
      })


    }, [query, pageNum])
    return { data, loading, hasMore }
  }

export default useDataSearch;