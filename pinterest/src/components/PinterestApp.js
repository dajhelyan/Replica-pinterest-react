import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const id = '4c974f2e37b1799fdb6e91a0f891a25df26b687e9e6eb77816d9988dd5142e59';
const api = `https://api.unsplash.com/photos/?client_id=${id}&per_page=20`;

const PinterestApp = () => { //estado inicial
    const [initialState, setState] = useState([]) 
    // trayendo elementos y almacenandolos en una constante


    

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/?client_id=${id}&per_page=20`)
            .then(res => {
                return res.json()
            }).then((data) => {
                setState(data)                
            })
    },[])

    

    return (
        <React.Fragment>
            <Header>
                <Search actualizarEstado={setState}/>
            </Header>
            {/* iterando dentro de componente para agregar un componente de cada imagen por iteracion */}
            <ContainerImg>
                {// implementare ternario con condicion
                    initialState.map((item) => {
                        return <CardItem key={item.id} {...item} />
                    })
                }
            </ContainerImg>

        </React.Fragment>
    )
}



const Header = ({ children }) => {
    return (
        <header>
            <figure>
                <img src="././public/images/logo.png" alt="logo-pinterest" />
            </figure>
            {children}
            <button>Registrarse</button>
            <button>Iniciar sesión</button>
        </header>
    )
}

const Search = (props) => {
    // declarando los estados
    const [query, setQuery] = useState('');

    // const apiSearch = `https://api.unsplash.com/search/photos?&query=${query}&client_id=${id}&per_page=20`

    // funcion que ejecuta la llamada a la api (search)
    const searching = () => {
        fetch(`https://api.unsplash.com/search/photos?&query=${query}&client_id=${id}&per_page=20`)
            .then(res => {
                return res.json()
            }).then((result) => {
                props.actualizarEstado(result)
                console.log(result)
            })

    }

    /* metodo que se ejecuta cuando escucha un cambio en input */
    const handleChange = (e) => {
        setQuery(e.target.value);
        // console.log(setQuery, 'oii')
    }

    /* const handleSubmit = (e) => {
        e.preventDefault(e)
        useFetchApi(apiSearch)
    } */

    return (
        <div>
            <input type="text"
                onChange={handleChange}
                placeholder="Buscar"
                value={query}
            />
            <button onClick={searching} >Buscar</button>
        </div>
    )
}




// componente contenedor de imagenes, recibiendo como prop un children(que recibe en el componente app una iteracion con map que retrona un componentecon cada imagen)
const ContainerImg = ({ children }) => {

    return (
        <section>
            <div className="card-columns">
                {children}
            </div>
        </section>
    )

}

// componente card por imagen que recibe como prop una todo item(data)
const CardItem = ({ ...item }) => {
    


    // const [ on, setOn ] = useState(true)

    /* const handleClick = (e) => {
        console.log(e.target, 'click');

    } */

    return (
        <div className="card" >
            {/* inseratando componente imagen mandando de prop link de cada imagen y descripcion */}
            <Image url={item.urls.raw} alt={item.alt_description} />
            
        </div>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p> 
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  



// componente imagen que recibe url de imagen para pintar
const Image = ({ url, alt }) => {
    return (
        <img src={url} alt={alt} />

    )

}

// construyendo un hook que hace fetch api
/* const useFetchApi = (Api) => {
    const [data, setData] = useState([])


        // agrengando parametro que trae 20 imagenes por pagina
        fetch(Api)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            });
 
    console.log(data, 'popo');
    return data;
} */






export default PinterestApp;