import React, { useState, useEffect } from 'react';
// Components
// PinterestApp
//  ListaDeImagenes:
//  Imagen
//   pendiente: 
//      hacer un search de imagenes
//      fetch API imagenes: en proceso
//      css, layout
//   
/* class PinterestApp extends React.Component {

  render(){
    const imagenes = [
      {url: '/images/pedito.jpeg', alt: 'perrito'},
      {url: '/images/gatox.jpeg', alt: 'gato'}
    ]

    return ( 
 r       
      <React.Fragment>
        <h1>PinterestApp</h1>
        <p>hola {this.props.author}</p>
        <ListaDeImagenes imagenes={imagenes} animal={'mascota'} />
        < FunctionCount />
      </React.Fragment>
    )
  }
} */

const id = '4c974f2e37b1799fdb6e91a0f891a25df26b687e9e6eb77816d9988dd5142e59';
const api = `https://api.unsplash.com/photos/?client_id=${id}&per_page=20`;

const PinterestApp = (props) => {

	// trayendo elementos y almacenandolos en una constante
    const initialState = useFetchApi(api)

    return (
        <React.Fragment>
            <Header />
            <p>hola {props.author}</p>
  
            {/* <ListaDeImagenes imagenes={imagenes} animal={'mascota'} /> */}
            <ContainerImg>
				{
					initialState.map((item) => {
						return <CardItem key={item.id} {...item} />
					})
				} 
			</ContainerImg>
            <FunctionCount />
        </React.Fragment>
    )
}



const Header = () => {
    return (
        <header>
            <figure>
                <img src="././public/images/logo.png" alt="logo-pinterest" />
            </figure>
            <input placeholder="Buscar" /> {/* componente que debe recibir api */}
            <button>Registrarse</button>
            <button>Iniciar sesión</button>
        </header>
    )
}



const ContainerImg = ({children}) => {
    
    return (
        <section>
          <div className="container">
            <div className="card-columns">
              {children}
            </div>
          </div>
        </section>
    )

}


const CardItem = ({ ...item }) => {
	return(
	<div className="card">
		<Image url={item.urls.raw} alt={item.alt_description} />
	</div>
	)
}

// construyendo un hook que hace fetch api
const useFetchApi = (api) => {
    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
        // agrengando parametro que trae 20 imagenes por pagina
        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setImagenes(data);
            });
    }, [])
    console.log(imagenes, 'popo');
    return imagenes;
}



// Hook de estado, renderizando un contador
const FunctionCount = () => {
    // Declarando variable de estado, llamada "count"
    // argumento para useState es el estado inicial (0)
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>you cliked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setCount(count - 1)}>
                click me -1
            </button>
        </div>
    )
}

/* const ListaDeImagenes = ({ imagenes }) => {
    return (
      <div className="card">
        <figure>
          {
            imagenes.map((imagen) => {
                return <Image key={imagen.id} url={imagen.links.html} alt={imagen.alt_description} />
            })
          }
        </figure>
      </div>
    )
} */

const Image = ({ url, alt }) => {
	return (
		<img src={url} alt={alt} height="100" />
	
	)
                
}

/* class ListaDeImagenes extends React.Component {

    render() {
        const { animal, imagenes } = this.props;
        return (
            <div>
                <p>{animal}</p>
                <ul className='mascotas'>
                    {
                        imagenes.map((imagen) => {
                            return <Image alt={imagen.alt} url={imagen.url} />
                        })
                    }
                </ul>
            </div>
        )
    }
} */

/* class Image extends React.Component {
    render() {
        return (
            <li>
                <img src={this.props.url} alt={this.props.alt} height="100" />
                Image Caption
      </li>
        )
    }
} */
export default PinterestApp;