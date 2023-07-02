import { Component } from 'react';
import { InputForm } from './InputForm/InputForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };


  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
}
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });

  }

  render() {
    return (
      <>
        <>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              Number
              <input
                type="text"
                name="number"
                value={this.state.tag}
                onChange={this.handleChange}
              ></input>
            </label>
            <button type="submit">Add contact</button>
          </form>
        </>
      </>
    );
  }
}
