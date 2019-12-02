import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

export const Search = ({setQuery, query}) => {
    //dando referencia al iut y mediante ele elemneto capturara valor 
    const formRef = useRef();

    const handleClck = () =>  {
        const newQuery = formRef.current.value;
        setQuery(newQuery) 
    }

    return (
        
        <Form inline as={Col} md="9">
            
            <div className="control has-icons-left">
                <input className="input" 
                style={{width: "760px", background: "lightgray"}}
                type="text" 
                ref={formRef}
                defaultValue={query}
                placeholder="Buscar"
                />
                <span className="icon is-small is-left">
                    <i style={{color: "black"}}className="fas fa-search"></i>
                </span>
            </div>
              <button className="button is-success is-light" onClick={handleClck}>Search</button>
        </Form>
    )
}