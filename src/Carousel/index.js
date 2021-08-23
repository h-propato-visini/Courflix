import React from 'react'
import './style.scss'
import Items from '../Items/index'
import Slider from 'react-slick'

class Carousel extends React.Component {
    render () {
        const settings = {
            slidesToShow: 6,
            slidesToScroll: 1,
            className: 'desktopCarousel',
        }
        const settingsMob = {
            slidesToShow: 2,
            rows: 4,
            className: 'mobileCarousel'
        }

        return (
            <React.Fragment>
            <Slider {...settings}> 
                <Items imgItem={this.props.Serie1} />
                <Items imgItem={this.props.Serie2} />
                <Items imgItem={this.props.Serie3} />
                <Items imgItem={this.props.Serie4} />
                <Items imgItem={this.props.Serie5} />
                <Items imgItem={this.props.Serie6} />
                <Items imgItem={this.props.Serie7} />
                <Items imgItem={this.props.Serie8} />
            </Slider>
            <Slider {...settingsMob}> 
                <Items imgItem={this.props.Serie1} />
                <Items imgItem={this.props.Serie2} />
                <Items imgItem={this.props.Serie3} />
                <Items imgItem={this.props.Serie4} />
                <Items imgItem={this.props.Serie5} />
                <Items imgItem={this.props.Serie6} />
                <Items imgItem={this.props.Serie7} />
                <Items imgItem={this.props.Serie8} />
            </Slider>
            </React.Fragment>      
        )
    }
}

export default Carousel