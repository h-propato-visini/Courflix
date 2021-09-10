import React from 'react'
import Navbar from '../Navbar'
import Button from '../Button'
import Title from '../Title'
import Carousel from '../Carousel'
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons"
import { faTrophy } from "@fortawesome/free-solid-svg-icons"
import './style.scss'
import Drama from '../Data/Drama.json'
import Accion from '../Data/Accion.json'
import Populares from '../Data/Volver.json'
import Breaking from '../Data/Breaking.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom' 

class Seleccion extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            clase1 : 'mostrarSel',
            clase2 : 'ocultarSel',
            clase3 : 'backImg-seleccion'
        }
    }


    handleClickSel() {
        if(this.state.clase2 == 'ocultarSel') {
            this.setState({
                clase1: 'ocultarSel',
                clase2 : 'mostrarSel',
                clase3: 'backImgOsc'
            })
        } else if (this.state.clase2 == 'mostrarSel') {
            this.setState({
                clase1: 'mostrarSel',
                clase2 : 'ocultarSel',
                clase3 : 'backImg-seleccion'
            })
        }
    }


    render() {
        return(
            <React.Fragment>
                <Navbar />
                <div className='banner-seleccion ocultarMob'>
                    <img className={this.state.clase3} src='https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeq9Fg04r6qPCr1dq7VKOglPPuluLbGBoyy60tgKnh9KsXWh5Y2VaY7jDWhrl4QQV1NhshZxCtLJrM_3V_WJc5J0p-eW.jpg?r=776'/>
                    <div className={this.state.clase1}>
                        <img className='logoBB' src='data:image/png;base64,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'/>
                        <div className='dataSerieMob dataSel'>
                            <span className='coincidenceSpan'>96% de coincidencias</span>
                            <span className='dataSpan'>2013</span>
                            <span className='dataSpan age'>16+</span>
                            <span className='dataSpan'>5 Temporadas</span>
                        </div>
                        <p className='descriptionSerie'>Un profesor de química de secundaria con cáncer terminal se asocia a un exestudiante para asegurar el futuro de su familia al fabricar y vender metanfetamina.</p>
                        <div className='buttonContainer buttonSel'>
                            <Link to= '/reproductor'style={{textDecoration: 'none'}}>
                            <Button 
                                Texto='REPRODUCIR' 
                                ColorBack= 'red'
                                opacidad= '1'
                                width= '150px'
                                Image={faPlay}
                                Color= 'red'
                                TextoMob='REPRODUCIR'
                                Opacity='1'
                                Border='none'
                            />
                            </Link>
                            <Button
                                Texto='MI LISTA' 
                                ColorBack='black'
                                opacidad='1'
                                width='100px'
                                border='1px solid gray'
                                Image={faPlus}
                                Color='black'
                                TextoMob='EPISODIOS'
                                Opacity='0.5'
                                Border='1px solid gray'
                            />
                            <div className='likes'>
                                <FontAwesomeIcon icon= {faThumbsUp} className='likesButton'/>   
                                <FontAwesomeIcon icon= {faThumbsDown} className='likesButton'/>   
                            </div>
                        </div>
                        <div className='winner'>
                            <FontAwesomeIcon icon= {faTrophy}/>
                            <p>"Breaking Bad" ganó 16 premios Emmy, incluidos 4 a mejor actor para la estrella Bryan Cranston.</p>
                        </div>
                        <div>
                            <span className='mainTitle'>Protagonistas:</span>
                            <span>Bryan Cranston, Aaron Paul, Anna Gunn</span>
                        </div>
                        <div>
                            <span className='mainTitle'>Géneros:</span>
                            <span>Thrillers de TV, Dramas de TV, TV sobre crimer</span>
                        </div>
                        <div>
                            <span className='mainTitle'>Este programa es:</span>
                            <span>Realista, Violento, Sombrio</span>
                        </div>
                        <div className='selectButton'>
                            <span className='spanSel choosen'>DESCRIPCION GENERAL</span>
                            <span className='spanSel' onClick={() => this.handleClickSel()}>EPISODIOS</span>
                        </div>
                    </div>
                    <div className={this.state.clase2}>
                        <img className='logoBB-2' src='data:image/png;base64,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'/>
                        <select className='chooseSeason'>
                            <option>Temporada 1</option>
                            <option>Temporada 2</option>
                            <option>Temporada 3</option>
                            <option>Temporada 4</option>
                            <option>Temporada 5</option>
                        </select>
                        <div className='breakingContainer'>
                            <Carousel resultados={Breaking}/>
                        </div>
                        <div className='selectButton'>
                            <span className='spanSel' onClick={() => this.handleClickSel()}>DESCRIPCION GENERAL</span>
                            <span className='spanSel choosen'>EPISODIOS</span>
                        </div>
                    </div>
                </div>
                <div className='carouselesContainer backSel ocultarMob'>
                    <div className='serieContainer'>
                        <Title Titles='Series'/>
                        <Carousel resultados={Accion}/>
                        </div>
                    <div className='serieContainer'>
                        <Title Titles='Continuar viendo contenido de Hernan'/>
                        <Carousel resultados={Drama}/>
                    </div>
                    <div className='serieContainer'>
                        <Title Titles='Populares en Netflix'/>
                        <Carousel resultados={Populares}/>
                    </div>
                </div>
                <div className='mobileSel'>
                    <div className='bannerMob'>
                        <img className='imgBack-Mob' src='https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeq9Fg04r6qPCr1dq7VKOglPPuluLbGBoyy60tgKnh9KsXWh5Y2VaY7jDWhrl4QQV1NhshZxCtLJrM_3V_WJc5J0p-eW.jpg?r=776'/>
                        <div className='infoMob'>
                            <h2>Breaking Bad</h2>
                            <div className='spanMob'>
                                <span>2008</span>
                                <span>+16</span>
                                <span>5 Temporadas</span>
                            </div>
                            <Link to= '/reproductor'style={{textDecoration: 'none'}}>
                                <Button
                                Color='red'
                                TextoMob='REPRODUCIR'
                                Opacity='1'
                                Border='none'                             
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='mainContain-Mob'>
                        <div className='descriptionMob'>
                            <p>Un profesor de Química de secundaria con cáncer terminal se asocia a un exestudiante para asegurar el futuro de su familia al fabricar y vender metanfetamina.</p>
                        </div>
                        <h4>Temporada 1</h4>
                        {Breaking.map((item,key)=> {
                            return (
                                <div className='infoContainerMob'>
                                    <img className='imgMob'src={item.image}/>
                                    <div className='dataChapter'>
                                        <div className='infoChapterMob'>
                                          <span>{item.title}</span>
                                          <span>{item.time}</span>
                                        </div>
                                        <div>
                                           <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>  
            </React.Fragment>
        )
    }
}

export default Seleccion