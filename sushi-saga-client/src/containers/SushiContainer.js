import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

class SushiContainer extends React.Component {
  renderSushis = () => {
    return this.props.sushis.map(sushi => { 
      return <Sushi eaten={this.props.eaten} balance={this.props.balance} wasEaten={this.props.wasEaten} key={sushi.id} sushi={sushi} />
    })
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          { this.renderSushis() }
          <MoreButton moreSushi={this.props.moreSushi} />
        </div>
      </Fragment>
    )
  } 
}

export default SushiContainer