import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Button, Modal } from 'react-bootstrap';
import { Header } from '././Header'
import { Search } from '././Search'
import { ContainerImg } from '././ContainerImg'
import Axios from 'axios';



export const id = '4c974f2e37b1799fdb6e91a0f891a25df26b687e9e6eb77816d9988dd5142e59';
// const api = `https://api.unsplash.com/photos/?client_id=${id}&per_page=20`;

const PinterestApp = () => { //estado inicial
    const [data, setData] = useState([]) 
    const [loading, setLoading] =useState(true)
    // trayendo elementos y almacenandolos en una constante

    useEffect(() => {
        Axios(`https://api.unsplash.com/photos/?client_id=${id}&per_page=20`)
            .then(res => {
                return setData(res.data)
            })
    },[])

    const observer = useRef()
    const lastCardImg = useCallback(node => {
      if (loading) return 
      if (observer.current) observer.current.disconnect() 
      observer.current = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting){
          console.log('visible mrd')
          
        }
      })
      if(node) observer.current.observer(node)
        
      
        console.log(node, 'popopop')
        
    }, [loading])
    

    return (
        <React.Fragment>
            <Header>
                <Search data={data} updateState={setData} updateLoad={setLoading}/>
            </Header>
            {/* iterando dentro de componente para agregar un componente de cada imagen por iteracion */}
            <ContainerImg data={data} refData={lastCardImg}>
                
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
 

export default PinterestApp;