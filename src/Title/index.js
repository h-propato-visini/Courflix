import React from 'react'
import './style.scss'

class Title extends React.Component {
    render () {
        return (
            <div className='titleContainer'> 
                <h5>{this.props.Titles}</h5>
            </div>
        )
    }
}

export default Title