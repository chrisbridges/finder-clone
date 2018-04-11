
## Challenge
Build a "Tag Picker" react component that displays a list of tags and folders, and allows the user to drill into infinite levels of folders and be able to select individual tags at any level.

- The component should initially display a list of 'Root Level' tags and folders.
- The user should be able to navigate into any folder (with possibly infinite depths)
- The user should be able to return to the previous folder, all the way up to the 'Root Level'
- Only tags can be 'selected' (via Checkbox)
- Only folders can be 'drilled into'.
- Display what tags are currently selected (via Checkbox).
- Always display folders above tags.
- Always display folders and tags sorted alphanumeric by name.
- Only display 'back' button if you are not at the 'Root Level'.
- `onTagSelected()` prop should be called each time a tag is selected/deselected, with the most up-to-date list of selected tagIds as the single argument. (this callback would be used to ultimatly update the incoming list of 'Selected Tags').
- A parent component would handle receiving the list of updated tag-ids, and echoing the list back into the component.
- The provided `tags.json` example can be used as the list of all available tags/folders (used as input into the `tags[]` prop)


### Component Props
The component should receive and handle the following props:


| Prop Name         | Type  | Description                                                                                                              | Purpose                                                                         |
|-------------------|-------|--------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| tags              | Array | List of all available folders and tags (at all depths).                                                                  | Used to determine what folders/tags to display at the current depth             |
| selectedTags      | Array | List of Tag-ids that are currently selected (across all depths).                                                         | Used to determine what tags should be marked as selected                        |
| onTagSelected     | Func  | Callback method to call when a tag is selected or deselected. Should receive an array of all currently-selected Tag-ids. | Used to inform the parent component that the list of selected-Tags has changed. |


### Tags List
Tags and Folders at all levels/depth live side-by-side within the same list.
Items with `parent: null` are considered 'Root Level' items, and should be displayed initially. As the user drills into deeper folders, you can use the `parent` property (eg `parent: '...'`) to identify what tags and folders should be displayed at the current level/depth.

Each item in this list contains the folowing props:
  
| Property  | Type    | Description                                                                                                     |
|-----------|---------|-----------------------------------------------------------------------------------------------------------------|
| _id       | String  | Alphanumeric ID, represents the unique tag or folder.                                                           |
| name      | String  | Represents the Tag or Folder                                                                                    |
| isFolder  | Boolean | If true, means Tag is a Folder of Tags.                                                                         |
| parent    | String  | If null, means Tag or Folder is at 'Root Level'. If present, identifies the direct parent of the tag or folder. |
| ancestors | Array   | List of direct ancestors (including Parent)                                                                     |
  
  

### Deliverables

Once completed, generate a ZIP archive of your project (excluding `node_modules/`) and send the packaged contents to `engineering@kaymbu.com` -- And our team will review and get back to you regarding next steps!
