import React, { Component } from 'react';
import './App.css';
import TagPicker from './TagPicker';
import tags from '../tags.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TagPicker tags={tags} />
      </div>
    );
  }
}

export default App;
