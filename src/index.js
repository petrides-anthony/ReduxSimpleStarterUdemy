import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBut7cRnFOS3cCgvxQ8h3y-svndtYpuUWU';

YTSearch ({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

//Create a new component. This component should produce
//some HTML
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        </div>
    );
  }
}

//Take this components generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
