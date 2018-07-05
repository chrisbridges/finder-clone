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

  addOrRemoveSelectedTag (tag) {
    const indexOfTag = this.state.selectedTags.indexOf(tag);
    console.log(indexOfTag);
    if (indexOfTag === -1) {
      this.setState({selectedTags: [...this.state.selectedTags, tag]});
    } else {
      // creating copy of state.selectedTags to avoid mutating state directly
      const copyOfSelectedTags = [...this.state.selectedTags];
      copyOfSelectedTags.splice(indexOfTag, 1);
      this.setState({selectedTags: copyOfSelectedTags});
    }
    console.log(this.state.selectedTags);
  }


  render() {
    return (
      <div className="App">
        <TagPicker tags={tags} selectedTags={this.state.selectedTags} onTagSelectionChange={selectedTag => this.addOrRemoveSelectedTag(selectedTag)}/>
      </div>
    );
  }
}

export default App;
