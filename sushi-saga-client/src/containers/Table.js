import React, { Fragment } from 'react';
import CreateForm from '../components/CreateForm';

class Table extends React.Component {

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={index} style={{ top: -7 * index }}/>
    })
  }

  render() {
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${ this.props.balance } remaining!
        </h1>
        <CreateForm appHandleSubmit={this.props.appHandleSubmit} />
        <div className="table">
          <div className="stack">
            {
              /* 
                 renderPlates takes an array 
                 and renders an empty plate
                 for every element in the array
              */
              this.renderPlates(this.props.eaten)
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Table