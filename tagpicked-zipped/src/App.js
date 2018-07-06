import React, { Component } from 'react';
import './App.css';
import TagPicker from './TagPicker';
import tags from './tags.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTags: []
    };
  }

  render() {
    return (
      <div className="App">
        <TagPicker tags={tags} selectedTags={this.state.selectedTags} onTagSelectionChange={selectedTags => this.setState({selectedTags})} />
      </div>
    );
  }
}

export default App;
