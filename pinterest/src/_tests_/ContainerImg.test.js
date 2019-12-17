import React from 'react'
import { ContainerImg } from '../components/ContainerImg';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('ContainerImg renderiza una lista de cards ', () => {
   
    const data = [{id: 'index1', urls: {small: 'smal_url'}, alt_description: 'desc'}, {id: 'index2', urls: {small: 'smal_url'}, alt_description: 'desc'}];
    const forwardref = () => {};
    
    const { container } = render(<ContainerImg data={data} forwardref={forwardref} />)  
    
    //TESTEAR  QUE  se MUESTRE ELEMENTOS CARD

    // testeando la longitud de la data
    
    expect(data).toHaveLength(2)
    //VALIDAR QUE FUNCION LLEGUE A ULT CARD
    
})

