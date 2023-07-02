import { Component } from 'react';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
   };

  formSubmitHandler = data => {
    console.log(data);
}

  render() {
    return (
      <>
       <Form onSubmit={this.formSubmitHandler}/>
        
      </>
    );
  }
}
