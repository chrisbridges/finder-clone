import React, { Component } from 'react'

export class TagPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentParent: null
    };
  }

  displayTags(tagsToDisplay=this.props.tags) {
    // take all tags, filter them by proper parent ID
      // map those
    const parentID = this.state.currentParent;
    const tags = tagsToDisplay.filter(tag => {
      return tag.parent === parentID;
    });

    return tags.map(tag => {
      return <li key={tag._id} onClick={() => this.folderOrTag(tag.isFolder, tag._id)}>{tag.name}</li>;
    });
  }

  folderOrTag (folder, tagID) {
    if (folder) {
      this.findFolderChildren(tagID);
    } else {
      this.addOrRemoveSelectedTag(tagID);
    }
  }

  findFolderChildren (tagID) {
    // display all tags that have parent of folder ID
    const folderChildren = this.props.tags.filter(tag => {
      return tag.parent === tagID;
    });
    console.log(folderChildren);
    this.setState({currentParent: tagID});
    this.displayTags(folderChildren);
  }

  addOrRemoveSelectedTag (tag) {
    // for checking tags
    let selectedTags = [...this.props.selectedTags];
    const indexOfTag = selectedTags.indexOf(tag);
    if (indexOfTag === -1) {
      selectedTags = [...selectedTags, tag];
    } else {
      selectedTags.splice(indexOfTag, 1);
    }
    this.props.onTagSelectionChange(selectedTags);
  }

  render() {
    return (
    <div className="tag-picker">
      <ul>{this.displayTags()}</ul>
    </div>
    )
  }
}

export default TagPicker;
