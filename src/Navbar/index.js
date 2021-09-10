import React from 'react'
import './style.scss'
import Menu from '../Menu/index'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Navbar extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            Visible: 'noVisible'
        }
    }

    handleClick() {
        let visibile = this.state.Visible

        if(visibile == 'noVisible') {
            visibile = 'visible'
        } else {
            visibile = 'noVisible'
        }

        this.setState({
            Visible: visibile
        })
    }

    render () {
        return (
            <div className='navStyle'>
                <FontAwesomeIcon  icon={faBars} onClick={() => this.handleClick()} className='imgMenu'/>
                <img className='bannerImg'src='data:image/png;base64,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'/>
                <ul className='listOptions'>
                    <li>Inicio</li>
                    <li>Series</li>
                    <li>Películas</li>
                    <li>Agregados recientemente</li>
                    <li>Mi lista</li>
                </ul>
                <div className={this.state.Visible}>
                <Menu/>
                </div>
            </div>
            
        )
    }
}

export default Navbar