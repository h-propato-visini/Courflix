import React from 'react'
import './style.scss'

class Button extends React.Component {
    render () {
        return (
            <div>
                <div> 
                    <button className='buttonStyle'><img className='imgIcon'src={this.props.Image}/> {this.props.Texto}</button>
                </div>
                <div> 
                <button className='buttonStyleMob' style={{backgroundColor:this.props.Color, border: this.props.Border, opacity: this.props.Opacity}}>{this.props.TextoMob}</button>
                </div>
            </div>
        )
    }
}

export default Button