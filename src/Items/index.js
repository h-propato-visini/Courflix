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
            <div className='itemContainer'> 
                <img onMouseOver={() => this.handleOver()} onMouseLeave={() => this.handleLeave()} className={this.state.itemSize} src={this.props.imgItem}/>
            </div>
        )
    }
}

export default Items