import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Button, Modal } from 'react-bootstrap';
import { Header } from '././Header'
import { Search } from '././Search'
import { ContainerImg } from '././ContainerImg'
import useDataSearch from './useDataSearch'

const PinterestApp = () => { //estado inicial

  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const {data, loading, hasMore } = useDataSearch(query, pageNum)

  const observer = useRef()
  const lastCardImg = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect() // configurando ob en el noo
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        // setPageNum(prevPageNum => prevPageNum + 1)
        console.log('iss')
        
      }
    })
    if (node) observer.current.observe(node) //observando nodo ele
  }, [loading])


  return (
    <React.Fragment>
      <Header>
        <Search setQuery={setQuery} query={query} />
      </Header>
      <ContainerImg data={data} forwardRef={lastCardImg} >
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