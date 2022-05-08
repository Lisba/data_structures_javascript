# @lisba/data-structures-js

![npm](https://img.shields.io/npm/v/@lisba/data-structures-js)
![npm](https://img.shields.io/npm/dy/@lisba/data-structures-js)
![NPM](https://img.shields.io/npm/l/@lisba/data-structures-js)

#### Common data structures implementation in Javascript.

# Contents

- [@lisba/data-structures-js](#lisbadata-structures-js) - [Common data structures implementation in Javascript.](#common-data-structures-implementation-in-javascript)
- [Contents](#contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Collaborators](#collaborators)
  - [License](#license)

## Installation

yarn: `yarn add @lisba/data-structures-js`

npm: `npm install @lisba/data-structures-js`

## Usage

```js
import {
  Stack,
  Queue,
  HashTable,
  MySinglyLinkedList,
  MyDoublyLinkedList,
  BinarySearchTree,
  UndirectedGraph,
} from '@lisba/data-structures-js';

const myStack = new Stack();
const myQueue = new Queue();
const myHashTable = new HashTable(50);
const mySinglyLinkedList = new MySinglyLinkedList(1);
const myDoublyLinkedList = new MyDoublyLinkedList(1);
const myTree = new BinarySearchTree();
const myGraph = new UndirectedGraph();
```

## Collaborators

1. Fork the repo.
2. Clone the repo to work locally with `git clone repo-url`.
3. Install dependencies with `yarn install`.
4. Develop suggested changes in a new branch.
5. Push your changes to your repo `git push remote-repo branch-name`.
6. Make the pull request.

## License

The MIT License. Full License [here](https://github.com/Lisba/data_structures_javascript/blob/master/LICENSE)
