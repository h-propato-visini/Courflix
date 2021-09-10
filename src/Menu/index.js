import React from 'react'
import './style.scss'
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



class Menu extends React.Component {
    render () {
        return (
            <div className='menuContainer'>
                <div className='profileContainer'>
                    <FontAwesomeIcon icon={faUser} className='profileImg'/>
                    <div className='profileName'>
                        <h6>CourseIt</h6>
                        <p className='profile'>Cambiar perfiles</p>
                    </div>
                </div >
                <div className='mainMenu'>
                    <ul className='menuList'>
                        <li>Cuenta</li>
                        <li>Centro de ayuda</li>
                        <li>Cerrar sesión en Netflix</li>
                    </ul>
                    <hr></hr>
                    <h5>Inicio</h5>
                    <ul className='menuList'>
                        <li>Mi lista</li>
                        <li>Tv de acción y aventuras</li>
                        <li>Acción y aventuras</li>
                        <li>Películas africanas</li>
                        <li>Películas alemanas</li>
                        <li>Ambientadas en otra época</li>
                        <li>Anime de acción</li>
                        <li>TV argentina</li>
                        <li>Películas australianas</li>
                        <li>Series australianas</li>
                        <li>Películas de Bollywood</li>
                        <li>TV brasileña</li>
                        <li>Películas británicas</li>
                        <li>TV británica</li>
                    </ul>
                </div>
            </div>
            
        )
    }
}

export default Menu