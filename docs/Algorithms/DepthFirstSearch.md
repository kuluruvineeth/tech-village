---
sidebar_position: 1
---

# Depth First Search

```typescript
import Stack from "../data-structures/Stack";
import nullthrows from "../utils/nullthrows";

/**
 * Returns a non-null version of a value, throws otherwise.
 *
 * @param {?T} value Nullable value.
 * @return {T} Non-null value.
 */
function nullthrows<T>(value: T | null | undefined): T {
  if (value == null) {
    throw Error("Unexpected null value");
  }

  return value;
}

export default nullthrows;

interface Graph<T> {
  [key: string]: Array<T>;
}

/**
 * Performs a depth-first search on a graph given a starting node.
 * @param {Object} graph Node to array of neighboring nodes.
 * @param {T} source Source node to start traversal from.
 *  It has to exist as a node in the graph.
 * @return {Array<T>} A DFS-traversed order of nodes.
 */
function depthFirstSearch<T>(graph: Graph<T>, source: T): Array<T> {
  if (Object.keys(graph).length === 0) {
    return [];
  }

  const stack = new Stack<T>();
  stack.push(source);
  const visited = new Set<T>([source]);

  while (!stack.isEmpty()) {
    const node = nullthrows(stack.pop());
    visited.add(node);

    const neighbors = graph[String(node)];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return Array.from(visited);
}

export default depthFirstSearch;
```
