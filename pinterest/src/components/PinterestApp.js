import React, { useState, useEffect } from 'react';

const id = '4c974f2e37b1799fdb6e91a0f891a25df26b687e9e6eb77816d9988dd5142e59';
const api = `https://api.unsplash.com/photos/?client_id=${id}&per_page=20`;

const PinterestApp = (props) => {

	// trayendo elementos y almacenandolos en una constante
    const initialState = useFetchApi(api)
    

    return (
        <React.Fragment>
            <Header>
                <Search />
            </Header>
            <p>hola {props.author}</p>
  
            {/* iterando dentro de componente para agregar un componente de cada imagen por iteracion */}
            <ContainerImg>
				{
					initialState.map((item) => {
						return <CardItem key={item.id} {...item} />
					})
				} 
			</ContainerImg>
            
        </React.Fragment>
    )
}



const Header = ({children}) => {
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

const Search = ({query}) => {
    return (
        <div>
            <input placeholder="Buscar" value={query}/>
            <button>Buscar</button>
        </div>
    )
}


// componente contenedor de imagenes, recibiendo como prop un children(que recibe en el componente app una iteracion con map que retrona un componentecon cada imagen)
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

// componente card por imagen que recibe como prop una todo item(data)
const CardItem = ({ ...item }) => {
	return(
	<div className="card">
	{/* inseratando componente imagen mandando de prop link de cada imagen y descripcion */}
		<Image url={item.urls.raw} alt={item.alt_description} />
	</div>
	)
}

// componente imagen que recibe url de imagen para pintar
const Image = ({ url, alt }) => {
	return (
		<img src={url} alt={alt} height="100" />
	
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

	




export default PinterestApp;