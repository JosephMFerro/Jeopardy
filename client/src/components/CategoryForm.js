import React from 'react';
import { Form, } from 'semantic-ui-react';

class CategoryForm extends React.Component {
  state = { name: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.add(this.state.name);
    this.setState({ name: "" });
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <Form>
        <Form.Input 
          name = 'name'
          value = {name}
          onChange = {this.handleChange}
          placeholder = 'Category Name'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default CategoryForm;