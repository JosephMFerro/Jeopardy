import React from 'react';
import { Form, } from 'semantic-ui-react';
import { connect } from "react-redux";
import {addCategory, updateCategory} from '../reducers/categories';

class CategoryForm extends React.Component {
  state = { name: '' };

  handleSubmit = e => {
    e.preventDefault();
    const category = { ...this.state };
    const { dispatch } = this.props;
    const func = this.props.id ? updateCategory : addCategory;
    dispatch(func(category));
  };

  handleChange = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
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

export default connect()(CategoryForm);