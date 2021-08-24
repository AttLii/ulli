# Ulli React Component
Utility component to render arrays of items to ul > li structure

## Usage 

```jsx
const itemFunc = (item, i) => <div>{item}</div>

<Ulli
  list={["item1", "item2"]}
  itemFunc={itemFunc}
/>

// Outputs
// <ul>
//   <li>
//     <div>item1</div>
//   </li>
//   <li>
//     <div>item2</div>
//   </li>
// </ul>
```

## Props
| Prop | Description | Type |
| --- | --- | --- |
| `list` | Array of items | array |
| `itemFunc` | Iterator function for each item | function |
| `className` | className for `<ul>` | string |
| `itemClassName` | className for each `<li>` | string |
| `ItemElement` | React component or a string to replace each `<li>`  | function or string |
| `ListElement` | React component or a string to replace `<ul>` | function or string |