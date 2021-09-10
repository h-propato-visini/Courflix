import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

class Title extends React.Component {
    render () {
        return (
                <div className='titleContainer'> 
                    <Link to= '/categorie'style={{textDecoration: 'none'}}>
                        <h5>{this.props.Titles}</h5>
                    </Link>
                </div>
 
        )
    }
}

export default Title