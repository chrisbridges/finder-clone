import React from 'react'

export default function TagPicker(props) {

  const displayTags = props.tags.map(tag => {
    return <li key={tag._id} onClick={() => props.onTagSelectionChange(tag._id)}>{tag.name}</li>
  });

  return (
    <div className="tag-picker">
      <ul>{displayTags}</ul>
    </div>
  );
}

