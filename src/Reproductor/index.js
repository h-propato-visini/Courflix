import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../Navbar'
import './style.scss'

class Reproductor extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <div className='mainContainer-Rep'>
                    <ReactPlayer
                       url='https://www.youtube.com/watch?v=rJnjxvgvkBM'
                       className='repContainer'
                       playing
                       width='100%'
                       height='400px'
                       controls='true'
                    />
                </div>

            </React.Fragment>
        )
    }
}

export default Reproductor