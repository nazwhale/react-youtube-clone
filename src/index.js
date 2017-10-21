import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBXe1tT82NwFwm8RtsSNcrUfQV7I9nagho';

// create a new component, which should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take this component's generated HTML and put it in the DOM
ReactDOM.render(new App, document.querySelector('.container'));
