
## Challenge
Build a "TagPicker" React component that displays a list of tags and folders, and allows the user to drill into infinite levels of folders and be able to select individual tags at any level.  The TagPicker can be one component or a set of components.  Any UI framework (e.g., Bootstrap) can be used, but the component(s) must be React components.  Use any React starter repo/kit that you like.  The delivered project should be a React app that renders the TagPicker and manages the properties going into the TagPicker (i.e., you will want to have a parent component that renders the TagPicker).  

This is a mockup of what the tag picker will look like: 

![alt text](https://cl.ly/3d3o1A0f1B0K/Image%202018-04-11%20at%204.46.20%20PM.png "Mockup")

### Specs

- The component should initially display a list of 'Root Level' tags and folders
- The user should be able to navigate into any folder (with possibly infinite depths)
- The user should be able to return to the previous folder, all the way up to the 'Root Level'
- When a tag is clicked, it should be selected (via checkbox)
- When a folder is clicked, it should be navigated into
- Display what tags are currently selected (via checkbox)
- Tag selection should persist as folders are navigated in and out of
- Always display folders above tags.
- Always display folders and tags sorted alphanumeric by name.
- Only display 'back' button if you are not at the 'Root Level'
- `onTagSelectionChange()` prop should be called each time a tag is selected/deselected, with the most up-to-date list of selected tagIds as the single argument


### TagPicker Props
The component should receive and handle the following props:


| Prop Name         | Type  | Description                                                                                                              | Purpose                                                                         |
|-------------------|-------|--------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| tags              | Array | List of all available folders and tags (at all depths).                                                                  | Used to determine what folders/tags to display at the current depth             |
| selectedTags      | Array | List of Tag-ids that are currently selected (across all depths).                                                         | Used to determine what tags should be marked as selected                        |
| onTagSelectionChange     | Func  | Callback method to call when a tag is selected or deselected. Should receive an array of all currently-selected Tag-ids. | Used to inform the parent component that the list of selected-Tags has changed. |


### Tag List
Tags and Folders at all levels/depth live side-by-side within the same list.
Items with `parent: null` are considered 'Root Level' items, and should be displayed initially. As the user drills into deeper folders, you can use the `parent` property (eg `parent: '...'`) to identify what tags and folders should be displayed at the current level/depth.  The `ancestors` property refers to the folders that are above the tag; the ancestor list also includes the direct parent of the tag.  

Each item in this list contains the folowing props:
  
| Property  | Type    | Description                                                                                                     |
|-----------|---------|-----------------------------------------------------------------------------------------------------------------|
| _id       | String  | Alphanumeric ID, represents the unique tag or folder.                                                           |
| name      | String  | Represents the Tag or Folder                                                                                    |
| isFolder  | Boolean | If true, means Tag is a Folder of Tags.                                                                         |
| parent    | String  | If null, means Tag or Folder is at 'Root Level'. If present, identifies the id of the direct parent of the tag or folder. |
| ancestors | Array   | List of direct ancestors (including Parent)                                                                     |
  
  

### Deliverables

Once completed, generate a ZIP archive of your project (excluding `node_modules/`) and send the packaged contents to `engineering@kaymbu.com` -- And our team will review and get back to you regarding next steps!
