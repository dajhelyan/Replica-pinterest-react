import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


export const Search = ({setQuery, query}) => {
    //dando referencia al iut y mediante ele elemneto capturara valor 
    const formRef = useRef();


    const handleClck = () =>  {
        const newQuery = formRef.current.value;
        
        setQuery(newQuery) 

    }


    return (

        <Form inline>
            <FormControl type="text" className="mr-sm-2"
                ref={formRef}
                defaultValue={query}
                placeholder="Buscar"
            />


            <Button variant="outline-success" onClick={handleClck}>Search</Button>
        </Form>


    )
}