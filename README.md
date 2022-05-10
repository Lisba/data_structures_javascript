# @lisba/data-structures-js

![npm](https://img.shields.io/npm/v/@lisba/data-structures-js)
![GitHub last commit](https://img.shields.io/github/last-commit/Lisba/data_structures_javascript)
![npm](https://img.shields.io/npm/dm/@lisba/data-structures-js)
![NPM](https://img.shields.io/npm/l/@lisba/data-structures-js)

#### Common data structures implementation in Javascript.

- #### [Contents](#contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Collaborate](#collaborate)
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

## Collaborate

In order to collaborate with the proyect you need to:

1. Fork the repo.
2. Clone the repo to work locally with `git clone repo-url`.
3. Install dependencies with `yarn install`.
4. Develop suggested changes in a new branch (make sure you are using the prettier config, you can run `yarn format` or install the prettier extension if you are using vsc editor to format on save).
5. Run `yarn build` and `yarn start` to verify your changes doesn't has errors.
6. Push your changes to your repo `git push remote-repo branch-name`.
7. Make the pull request.

## License

The MIT License. Full License [here](https://github.com/Lisba/data_structures_javascript/blob/master/LICENSE)
