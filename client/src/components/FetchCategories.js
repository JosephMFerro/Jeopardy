import React from 'react';
import Categories from "./Categories";
import Category from "./Category";
import { getCategories } from "../reducers/category";

class FetchCategories extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  render() {
    return(
      <div>
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:id" component={Category} />
      </div>
    )
  }
}

export default connect()(FetchCategories);