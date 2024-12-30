/*# 
6kyu 
 Object Deep Merger

Create a function called deepMerge that takes two objects as input and returns a new object that is a deep merge of the two input objects. 
The function should handle nested objects and arrays.

## Requirements

- If a property exists in both objects, the value from the second object should be used
- If a property is an object or array in both inputs, it should be recursively merged
  - keys will always be of the same type in both objects, but may be null or undefined
  - ie b if exists will be an object in both , cannot be an object in 1 and array in the other
- Arrays should be concatenated
- In built Object merging functions cannot be used

```js
const obj1 = {
  a: 1,
  b: { x: 2, y: 3 },
  c: [1, 2, 3]
};

const obj2 = {
  b: { y: 4, z: 5 },
  c: [4, 5],
  d: 6
}; 

console.log(deepMerge(obj1, obj2));
// Output:
// {
//   a: 1,
//   b: { x: 2, y: 4, z: 5 },
//   c: [1, 2, 3, 4, 5],
//   d: 6
// }
```

Inputs: Objects, Obj1, Obj2
Output: Deep merge of the two input objects

Edge case
  Objects could not have the same length
  Arguments should be objects

Steps:
  1 - Create the function which will receive 2 objects ar arguments
  // 2 - Loop over the first object and compare the keys with the second object
  3 - Merge the values
  4 - Return the output

*/

const deepMerge = (obj1, obj2) => {
  let merged = {};

  for (const key of new Set([...Object.keys(obj1), ...Object.keys(obj2)])) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      merged[key] = [...value1, ...value2];
    } else if (
      typeof value1 === "object" &&
      value2 === "object" &&
      value1 &&
      value2
    ) {
      merged[key] = deepMerge(value1, value2);
    } else {
      merged[key] = value2 !== undefined ? value2 : value1;
    }
  }
  return merged;
};

const obj1 = {
  a: 1,
  b: { x: 2, y: 3 },
  c: [1, 2, 3],
};

const obj2 = {
  b: { y: 4, z: 5 },
  c: [4, 5],
  d: 6,
};

console.log(deepMerge(obj1, obj2));
// Output:
// {
//   a: 1,
//   b: { x: 2, y: 4, z: 5 },
//   c: [1, 2, 3, 4, 5],
//   d: 6
// }
