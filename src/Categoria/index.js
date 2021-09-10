import React from 'react'
import './style.scss'
import Navbar from '../Navbar'
import Carousel from '../Carousel'
import Title from '../Title'
import Drama from '../Data/Drama.json'
import Accion from '../Data/Accion.json'
import Volver from '../Data/Volver.json'
import Populares from '../Data/Populares.json'

class Categoria extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <div className='categorieContainer'>
                    <span className='ocultarSpan'>Series</span>
                    <span className='ocultarSpan'>&gt;</span>
                    <h2>TV de acción y aventura</h2>
                </div>
                <div className='carouseles'>
                    <div className='carouselContainer'>
                        <Title  Titles='Populares en Netflix'/>
                        <Carousel resultados={Accion}/>
                    </div>
                    <div className='carouselContainer'>
                        <Title  Titles='Continuar viendo contenido de Hernan'/>                
                        <Carousel resultados={Drama}/>
                    </div>
                    <div className='carouselContainer'>
                        <Title  Titles='Thriller'/>  
                        <Carousel resultados={Volver}/>
                    </div>
                    <div className='carouselContainer'>
                        <Title  Titles='Dramas de TV aclamados por el público'/>
                        <Carousel resultados={Populares}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Categoria