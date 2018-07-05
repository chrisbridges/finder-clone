import React, { Component } from 'react';
import './TagPicker.css';

export class TagPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentParentID: null,
      // currentParentName: null,
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

    return docsToDisplay.map(doc => {
      if (doc.isFolder) {
        return <li key={doc._id} onClick={() => this.setState({path: [...this.state.path, {parentName: doc.name, parentID: doc._id}]})}>{doc.name}</li>;
      } else {
        return <li key={doc._id} onClick={() => this.addOrRemoveSelectedTag(doc._id)}>{doc.name}</li>;
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
    // find doc of our current parent
    // const currentParentDoc = this.props.tags.find(doc => {
    //   return doc._id === this.state.currentParentID;
    // });
    // // find that doc's parent's ID
    // const parentOfCurrentParentID = currentParentDoc.parent;

    // let parentOfCurrentParentName;
    // // if parent has no ID, name = null
    // if (parentOfCurrentParentID === null) {
    //   parentOfCurrentParentName = null;
    // } else {
    //   // else, find that parent's doc, and then it's name
    //   const parentOfCurrentParentDoc = this.props.tags.find(doc => {
    //     return parentOfCurrentParentID === doc._id;
    //   });
    //   parentOfCurrentParentName = parentOfCurrentParentDoc.name;
    // }

    // this.setState({currentParentID: parentOfCurrentParentID, currentParentName: parentOfCurrentParentName});
    // I'm sure there's a more efficient, or at least a more clear way of going about this
    // but I believe the structure of our data necessitates something similar to what I have here -   
    // from our current parent, use its parent value to find that parent's doc, then display the name value (unless it's null)

    // creating copy of path to not directly alter state
    const copyOfPath = this.state.path;
    copyOfPath.pop();
    this.setState({path: [...copyOfPath]});
  }

  render() {
    const mostRecentPath = this.state.path[this.state.path.length - 1];
    return (
    <div className="tag-picker">
    <h2>{mostRecentPath.parentName}</h2>
      {mostRecentPath.parentID === null ? null : <button onClick={() => this.goBackOneParent()}>Back</button>}
      <ul>{this.displayDocs()}</ul>
    </div>
    )
  }
}

export default TagPicker;
