import React from 'react';
import CategoryForm from './CategoryForm';
import { Divider, Button, Icon } from 'semantic-ui-react';

class Categories extends React.Component {
  state = { showForm: false };

  toggleForm = () =>
    this.setState({
      showForm: !this.state.showForm
  });

  render() {
    const {showForm} = this.state;
    return (
      <div>
        <h2>Categories</h2>
        <Divider />
        <Button onClick = {this.toggleForm} style = {{margin: '10px'}}>
          <Icon name = {showForm ? 'chevron up' : 'chevron down'} />
          Add Category
        </Button>
        {showForm ? <CategoryForm /> : null}
        <Divider />
      </div>
    )
  }
}

export default Categories;