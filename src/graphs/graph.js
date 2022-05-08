/*

   2 - 0
  / \
 1 - 3

 */

// Edge List

const graph_edge_list = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
// Index:                    0      1        2        3
const graph_adjacent_list = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graph_adjacent_list_beautified = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

// Adjacent Matrix

const graph_adjacent_matrix = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

const graph_adjacent_matrix_indexed = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
