import React, { useState } from 'react'
import { id } from './PinterestApp'

export const Search = (props) => {
    // declarando los estados
    const [query, setQuery] = useState('');

    // const apiSearch = `https://api.unsplash.com/search/photos?&query=${query}&client_id=${id}&per_page=20`

    // funcion que ejecuta la llamada a la api (search)
    const searching = () => {
        fetch(`https://api.unsplash.com/search/photos?&query=${query}&client_id=${id}&per_page=20`)
            .then(res => {
                return res.json()
            }).then((result) => {
                console.log(result)
                return props.updateState(result.results)
                
            })

    }

    /* metodo que se ejecuta cuando escucha un cambio en input */
    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        // console.log(setQuery, 'oii')
    }

    /* const handleSubmit = (e) => {
        e.preventDefault(e)
        useFetchApi(apiSearch)
    } */

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" className="form-control" 
            aria-label="Username" 
            aria-describedby="basic-addon1" 
            onChange={handleChange}
            placeholder="Buscar"
            value={query}
            />
            <button type="button" onClick={searching}>search</button>
        </div>

       
    )
}