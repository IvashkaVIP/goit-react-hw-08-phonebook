import { Component } from 'react';
import { InputForm } from './InputForm/InputForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    tag: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });

  }

  render() {
    return (
      <>
        <>
          <h2>Phonebook</h2>
          <form>
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
                name="tag"
                value={this.state.tag}
                onChange={this.handleChange}
              ></input>
            </label>
          </form>
        </>
      </>
    );
  }
}
