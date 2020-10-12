import React from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  componentDidMount() {
    if (this.props.eaten.includes(this.props.sushi)) {
      this.setState({eaten: true})
    }
  }

  toggleEaten = () => {
    if (this.state.eaten === false && parseInt(this.props.balance.split('.')[0], 10) - this.props.sushi.price >= 0) {
      this.setState({eaten: true}, this.props.wasEaten(this.props.sushi))
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={ this.toggleEaten }>
          { this.state.eaten ? null : <img src={this.props.sushi.img_url} alt="" width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi