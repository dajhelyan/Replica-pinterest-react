import React from 'react';
import { render } from 'react-dom';
import PinterestApp from './components/PinterestApp'
import 'bootstrap/dist/css/bootstrap.min.css';

render(<PinterestApp />, document.getElementById('main'))

/* metodo render- imprime component pinterestApp en el elemento con id main */