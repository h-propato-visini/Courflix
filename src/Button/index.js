import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './style.scss'

class Button extends React.Component {
    render () {
        return (
            <div>
                <div> 
                    <button className='buttonStyle' style={{backgroundColor: this.props.ColorBack, opacity: this.props.opacidad, width: this.props.width, border: this.props.border}}><FontAwesomeIcon className='imgIcon'icon={this.props.Image}/> {this.props.Texto}</button>
                </div>
                <div> 
                <button className='buttonStyleMob' style={{backgroundColor:this.props.Color, border: this.props.Border, opacity: this.props.Opacity}}>{this.props.TextoMob}</button>
                </div>
            </div>
        )
    }
}

export default Button