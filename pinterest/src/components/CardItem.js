import React from 'react';
import { Image } from './Image'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
require("react-bootstrap/ModalHeader")

// componente card por imagen que recibe como prop una todo item(data)
export const CardItem = ({ forwardref, ...item }) => {
    const [show, setShow] = React.useState(false);

    return (
        <>
            <Card onClick={() => setShow(true)}>
                <Image forwardref={forwardref} url={item.urls.small} alt={item.alt_description} />
                
            </Card>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img src={item.urls.small} alt={item.alt_description} />
                </Modal.Body>
            </Modal>
        </>
    )
}

