import React from 'react'
import './style.scss'
import Items from '../Items/index'
import Slider from 'react-slick'
import {Link} from 'react-router-dom'

class Carousel extends React.Component {
    render () {

        console.log(this.props.resultados)
        const settings = {
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,    
                    }
                }
            ]
        }

        return (
            <React.Fragment>
                <Link to= '/breaking-bad'style={{textDecoration: 'none'}}>
                    <Slider {...settings}> 
                        {this.props.resultados.map((item,key)=> {
                            return <Items imgItem={item.image} titleChapter={item.title} time={item.time} description={item.description} number={item.number} key={key}/> 
                        })}
                    </Slider>
                </Link>
            </React.Fragment>      
        )
    }
}

export default Carousel