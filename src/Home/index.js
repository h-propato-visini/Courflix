import React from 'react'
import Navbar from '../Navbar'
import Button from '../Button'
import Title from '../Title'
import Carousel from '../Carousel'
import './style.scss'
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Drama from '../Data/Drama.json'
import Accion from '../Data/Accion.json'
import Volver from '../Data/Volver.json'


class Home extends React.Component {
        render() {
        return (
            <React.Fragment>
                <img className='backImg' src='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfszbcT1Bah0lYu8G75xF3apF22EW9M3Sp13P9eoG2lwaE6SwjoIucLxaFDzTcx83aRYHCtG3MCD8nBCVRbT4j2014p6.jpg?r=23b'/>
                <div>
                <Navbar />
                </div>
                <div className='banner'>
                    <h3 className='origNetflix'>ORIGINAL DE NETFLIX</h3>
                    <h1 className='serieName'>Black Summer</h1>
                    <div className='dataSerieMob'>
                        <span className='dataSpan'>2019</span>
                        <span className='dataSpan'>16+</span>
                        <span className='dataSpan'>1 Temporada</span>
                    </div>
                    <div className='buttonContainer'>
                        <Button 
                            Texto='Reproducir' 
                            Image={faPlay}
                            Color='red'
                            TextoMob='REPRODUCIR'
                            Opacity='1'
                            Border='none'
                        />
                        <Button 
                            Texto='Mi lista' 
                            Image={faPlus}
                            Color='black'
                            TextoMob='EPISODIOS'
                            Opacity='0.5'
                            Border='1px solid gray'
                        />
                    </div>
                    <h6 className='viewSeason'>VER LA TEMPORADA 1</h6>
                    <p className='descriptionSerie'>Una ansiada luna de miel. Un asesinato terrible. Varios sopeschosos. Si sobreviven, serán unas vacaciones de ensueño</p>
                </div>
                <div className='carouselesContainer'>
                    <div className='serieContainer'>
                        <Title Titles='Series'/>
                        <Carousel resultados={Accion}/>
                        </div>
                    <div className='serieContainer'>
                        <Title Titles='Continuar viendo contenido de Hernan'/>
                        <Carousel resultados={Drama}/>
                    </div>
                    <div className='serieContainer'>
                        <Title Titles='Volver a verlas'/>
                        <Carousel resultados={Volver}/>
                    </div>
                </div>
        </React.Fragment>
    
        )
      }
    }

    export default Home