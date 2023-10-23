---
title: Binary Search
description: The basics to binary search
---

## Description
The Binary Search algorithm is a divide-and-conquer search algorithm used to efficiently locate a target value in a sorted array. It repeatedly divides the array into halves and compares the target value with the middle element, narrowing down the search space until the target is found or the array is exhausted.

## Optimal Solution
The optimal solution involves dividing the array into halves at each step, reducing the search space exponentially. This ensures efficient searching in logarithmic time.

## Code
```javascript
// Binary Search Algorithm

/**
 * Perform binary search on a sorted array to find the index of the target value.
 *
 * @param {Array} arr - The sorted array.
 * @param {number} target - The target value to search for.
 * @returns {number} - The index of the target value or -1 if not found.
 */
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            low = mid + 1; // Search in the right half
        } else {
            high = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// Example Usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;

const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`The target value ${targetValue} is found at index ${result}.`);
} else {
    console.log(`The target value ${targetValue} is not present in the array.`);
}

```

## Time Complexity
The time complexity of Binary Search is O(log n), where n is the number of elements in the array. This logarithmic complexity signifies the efficient nature of the algorithm.

## Summary
Binary Search is a highly efficient search algorithm, especially for large datasets, due to its logarithmic time complexity. It is widely used in various applications where quick retrieval of information from sorted datasets is crucial.