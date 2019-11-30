import { useState, useEffect } from 'react'
import Axios from 'axios'

const useDataSearch = (query, pageNum, setPageNum) => {
  const id = '4c974f2e37b1799fdb6e91a0f891a25df26b687e9e6eb77816d9988dd5142e59';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setData([]);
    setPageNum(1);
  }, [query]);

  useEffect(() => {
    if(query !== '') {
      return; 
    }

    Axios({
      method: "GET",
      url: `https://api.unsplash.com/photos/?client_id=${id}&per_page=20`,
      params: { page: pageNum },
    })
    .then(res => {
      setLoading(false);
      // setHasMore(res.data.length > 0);
      return setData((valorAnterior) => [...valorAnterior, ...res.data]);
    })
  }, [query, pageNum]);

  useEffect(() => {
    console.log(query, pageNum);
    if(query === '') {
      return; 
    }
    setLoading(true);

    Axios({
      method: "GET",
      url: `https://api.unsplash.com/search/photos?&client_id=${id}&per_page=20`,
      params: { query: query, page: pageNum },
    })
    .then(res => {
      setLoading(false)
      // setHasMore(res.data.results.length > 0);
      return setData((valorAnterior) => [...valorAnterior, ...res.data.results] )
    })
      
  }, [query, pageNum]);

    return { data, loading, hasMore }
  }

export default useDataSearch;