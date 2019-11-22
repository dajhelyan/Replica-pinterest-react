import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { id } from './PinterestApp'
import Axios from 'axios'

export const Search = (props) => {
    // declarando los estados
    const [query, setQuery] = useState('');
    const [pageNum, setPageNum] = useState(1)

    // const apiSearch = `https://api.unsplash.com/search/photos?&query=${query}&client_id=${id}&per_page=20`

    // funcion que ejecuta la llamada a la api (search)
    const searching = () => {
        Axios({
            method: 'GET',
            url: `https://api.unsplash.com/search/photos?&client_id=${id}&per_page=20`,
            params:{ query: query, page: pageNum }
        }).then(res => {
            console.log(res.data.results)
            return props.updateState(res.data.results)
        }).catch(err => {
            console.log(err, 'do')
            
        })

    }

    /* metodo que se ejecuta cuando escucha un cambio en input */
    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        setPageNum(1)
        // console.log(setQuery, 'oii')
    }

    /* const handleSubmit = (e) => {
        e.preventDefault(e)
        useFetchApi(apiSearch)
    } */

    return (
        
        <Form inline>
        <FormControl type="text" className="mr-sm-2"
        onChange={handleChange}
        placeholder="Buscar"
        value={query}
        />
        

    }
        <Button variant="outline-success" onClick={searching}>Search</Button>
      </Form>

       
    )
}