import React, { Component } from 'react'

export class TagPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentParent: null
    };
  }

  displayDocs (docs=this.props.tags) {
    const parentID = this.state.currentParent;
    const docsToDisplay = docs.filter(doc => {
      return doc.parent === parentID;
    });
  
    return docsToDisplay.map(doc => {
      if (doc.isFolder) {
        return <li key={doc._id} onClick={() => this.setState({currentParent: doc._id})}>{doc.name}</li>;
      } else {
        return <li key={doc._id} onClick={() => this.addOrRemoveSelectedTag(doc._id)}>{doc.name}</li>;
      }
    });
  }

  // findFolderChildren (folderID) {
  //   // display all docs that have parent of folder ID
  //   // const folderChildren = this.props.tags.filter(tag => {
  //   //   return tag.parent === folderID;
  //   // });
  //   this.setState({currentParent: folderID});
  //   // this.displayDocs(folderChildren);
  // }

  addOrRemoveSelectedTag (tagID) {
    // for checking tags
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
    const newParentFolder = this.props.tags.find(doc => {
      return doc._id === this.state.currentParent;
    });
    this.setState({currentParent: newParentFolder.parent});
  }

  render() {
    return (
    <div className="tag-picker">
      <button onClick={() => this.goBackOneParent()}>Back</button>
      <ul>{this.displayDocs()}</ul>
    </div>
    )
  }
}

export default TagPicker;
