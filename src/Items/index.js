import React from 'react'
import './style.scss'

class Items extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            itemSize : 'itemStyle'
        }
    }

    handleOver() {
        this.setState({
            itemSize: 'itemBigger'
        })
    }

    handleLeave() {
        this.setState({
            itemSize: 'itemStyle'
        })
    }


    render () {
        return (
            <React.Fragment>
            <div className='itemContainer'> 
                <img onMouseOver={() => this.handleOver()} onMouseLeave={() => this.handleLeave()} className={this.state.itemSize} src={this.props.imgItem}/>
                <span className='numberChapter'>{this.props.number}</span>
            </div>
            <div className='infoItem'>
                <div className='spanContainer'>
                    <span>{this.props.titleChapter}</span>
                    <span>{this.props.time}</span>
                </div>
                <div className='descriptionContainer'>
                <p>{this.props.description}</p>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Items