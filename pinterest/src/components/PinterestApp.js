import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Button, Modal } from 'react-bootstrap';
import { Header } from '././Header'
import { Search } from '././Search'
import { ContainerImg } from '././ContainerImg'
import Axios from 'axios'

import useDataSearch from './useDataSearch'

const id = '4c974f2e37b1799fdb6e91a0f891a25df26b687e9e6eb77816d9988dd5142e59';
const PinterestApp = () => { //estado inicial

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const { loading, hasMore } = useDataSearch(query, pageNum, setData)

  useEffect(() => {
    Axios(`https://api.unsplash.com/photos/?client_id=${id}&per_page=20`)
      .then(res => {
        return setData(res.data)
      })
  }, [])


  /* const observer = useRef()
  const lastCardImg = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect() // configurando ob en el noo
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNum(prevPageNum => prevPageNum + 1)
      }
    })
    if (node) observer.current.observe(node) //observando nodo ele

    console.log(node, 'popopop')

  }, [loading, hasMore]) */


  return (
    <React.Fragment>
      <Header>
        <Search setQuery={setQuery} query={query} />
      </Header>
      {/* iterando dentro de componente para agregar un componente de cada imagen por iteracion */}
      <ContainerImg data={data} loading={loading} hasMore={hasMore} setPageNum={setPageNum}>

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