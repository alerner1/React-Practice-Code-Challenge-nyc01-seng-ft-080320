import React from 'react';

class CreateForm extends React.Component {
  state = {
    deposit: '',
    isValid: true
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.appHandleSubmit(this.state.deposit);
  }

  handleChange = event => {
    // does allowing cents make this insanely complicated? yes. am i gonna do it anyway? also yes.
    const regex  = /^\d+(?:\.\d{0,2})$/;
    if (regex.test(event.target.value) || /^\d+$/.test(event.target.value) || event.target.value === '') {
      this.setState({deposit: event.target.value, isValid: true})
    } else {
      this.setState({isValid: false})
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h5>Add To Wallet</h5>
        <label>$</label>
        <input type="text" onChange={this.handleChange} name="deposit" placeholder="0.00" value={this.state.deposit} />
        {this.state.isValid ? null : <p>Must be a valid amount of money!</p>}
        <input type="submit" value="Add Money" />
      </form>
    );
  }
}

export default CreateForm;