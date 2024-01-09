// 743. Network Delay Time
// You are given a network of n nodes, labeled from 1 to n. 
// You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi),
// where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
// We will send a signal from a given node k. 
// Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const distances = new Array(n).fill(Infinity); // Store shortest distances to nodes
    const adjList = new Array(n).fill(null).map(() => []); // Adjacency list for edges
    
    // The distance of the starting node is 0
    distances[k-1] = 0;

    // Generate a priority queue to get the min value of the distances array - min heap
    // pick the least weighted value to process the dijkstra's algorithm
    const heap = new PriorityQueue2((a,b) => distances[a] < distances[b]);

    // Start the dijkstra's algorithm with k
    // Need to subtract 1 from all the index since the graph is from 1 to n not 0 to n
    heap.push(k-1);
    // Build adjacency list
    for (const [u, v, w] of times) {
        adjList[u - 1].push([v - 1, w]); // Adjust for 1-based node indices
    }

    // Dijkstra's algorithm
    while (!heap.isEmpty()) {
        const currentVertex = heap.pop();

        for (const [neighbor, weight] of adjList[currentVertex]) {
        const newDistance = distances[currentVertex] + weight;
        if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
            heap.push(neighbor);
        }
        }
    }

    // Find the maximum distance (longest path)
    const maxDistance = Math.max(...distances);
    return maxDistance === Infinity ? -1 : maxDistance; // Indicate unreachable nodes
};


class PriorityQueue2 {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}


// Time Complexity: O (ElogN)
// Space Complexity: O (E + N)
