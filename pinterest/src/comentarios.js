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
// Hook de estado, renderizando un contador
/* const FunctionCount = () => { */
    // Declarando variable de estado, llamada "count"
    // argumento para useState es el estado inicial (0)
 /*    const [count, setCount] = useState(0)

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
} */
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