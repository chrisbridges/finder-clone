import React, { Component } from 'react';
import './TagPicker.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

export class TagPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // linked list-inspired state, this way you don't have to search for the parent again when going back
      path: [{parentName: 'Root', parentID: null}]
    };
  }

  displayDocs () {
    const docs = this.props.tags;
    const mostRecentPath = this.state.path[this.state.path.length - 1];
    const parentID = mostRecentPath.parentID;
    const docsToDisplay = docs.filter(doc => {
      return doc.parent === parentID;
    });

    // Icons
    const folderIcon = <i className="fa fa-folder-open" aria-hidden="true"></i>;
    const rightChevron = <i className="fa fa-chevron-right" aria-hidden="true"></i>;
    const check = <i className="fa fa-check-square"></i>;

    return docsToDisplay.map(doc => {
      if (doc.isFolder) {
        return <li className="doc folder" key={doc._id} onClick={() => this.setState({path: [...this.state.path, {parentName: doc.name, parentID: doc._id}]})}><span className="doc-name">{folderIcon}{doc.name}</span><span className="right-chevron">{rightChevron}</span></li>;
      } else {
        // if tag is selected, add checkbox
        if (this.props.selectedTags.indexOf(doc._id) === -1) {
          return <li className="doc tag" key={doc._id} onClick={() => this.addOrRemoveSelectedTag(doc._id)}><span className="doc-name">{doc.name}</span></li>;
        }
        return <li className="doc tag" key={doc._id} onClick={() => this.addOrRemoveSelectedTag(doc._id)}><span className="doc-name">{check}{doc.name}</span></li>; 
      }
    });
  }

  addOrRemoveSelectedTag (tagID) {
    let selectedTags = [...this.props.selectedTags];
    const indexOfTag = selectedTags.indexOf(tagID);
    if (indexOfTag === -1) {
      selectedTags = [...selectedTags, tagID];
    } else {
      selectedTags.splice(indexOfTag, 1);
    }
    this.props.onTagSelectionChange(selectedTags);
  }

  goBackOneParent () {
    // creating copy of path to not directly alter state
    const copyOfPath = this.state.path;
    copyOfPath.pop();
    this.setState({path: [...copyOfPath]});
  }

  render() {
    const mostRecentPath = this.state.path[this.state.path.length - 1];
    return (
    <div className="tag-picker">
      <h2 className="folder-name">{mostRecentPath.parentName}</h2>
      {mostRecentPath.parentID === null ? null : <button onClick={() => this.goBackOneParent()}>&lt; Back</button>}
      <ul className="docs-list">{this.displayDocs()}</ul>
    </div>
    )
  }
}

export default TagPicker;