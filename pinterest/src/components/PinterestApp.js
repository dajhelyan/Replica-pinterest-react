import React, { useState, useEffect } from 'react';
// import { Button, Modal } from 'react-bootstrap';
import { Header } from '././Header'
import { Search } from '././Search'
import { ContainerImg } from '././ContainerImg'
import { CardItem } from '././CardItem'



export const id = '4c974f2e37b1799fdb6e91a0f891a25df26b687e9e6eb77816d9988dd5142e59';
// const api = `https://api.unsplash.com/photos/?client_id=${id}&per_page=20`;

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
                <Search updateState={setState}/>
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







// componente contenedor de imagenes, recibiendo como prop un children(que recibe en el componente app una iteracion con map que retrona un componentecon cada imagen)




/* function MyVerticallyCenteredModal(props) {
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
} */
  
  



// componente imagen que recibe url de imagen para pintar


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