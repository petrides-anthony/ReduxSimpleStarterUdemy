import React, { Component } from 'react';

// This is a class based component as opposed to a functional component
// Class components always require a render method and to return some jsx
class SearchBar extends Component {
  //constructor is only for class based components and gets called automatically
  //whenever a new instance of the class is created
  constructor(props) {
    super(props);

    //this.state equals an object with the property term i.e. Search term
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
