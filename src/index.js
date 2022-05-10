export { default as MyArray } from '@arrays';
export { default as HashTable } from '@hashTables';
export * from '@linkedLists';
export { default as Stack } from '@stacks';
export { default as Queue } from '@queues';
export { default as BinarySearchTree } from '@trees';
export { default as UndirectedGraph } from '@graphs';

import Queue from '@queues';

const myQueue = new Queue();
myQueue.enqueue('first');
myQueue.enqueue('first1');
myQueue.enqueue('first2');
myQueue.enqueue('first3');

console.log('myQueue: ', myQueue);
