---
title: Linear Search
description: The basics to linear search
---

## Description
The Linear Search algorithm, also known as sequential search, is a straightforward searching algorithm that iterates through each element in a collection until a match is found or the entire collection is searched. It is suitable for unsorted or randomly ordered datasets.

## Optimal Solution
While not as efficient as some other search algorithms, the linear search is straightforward and effective for small datasets or when the target element is near the beginning of the collection.

## Code
```javascript
// Linear Search Algorithm

/**
 * Perform linear search on an array to find the index of the target value.
 *
 * @param {Array} arr - The array to search.
 * @param {number} target - The target value to search for.
 * @returns {number} - The index of the target value or -1 if not found.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found
        }
    }

    return -1; // Target not found
}

// Example Usage
const dataArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const targetValue = 2;

const result = linearSearch(dataArray, targetValue);

if (result !== -1) {
    console.log(`The target value ${targetValue} is found at index ${result}.`);
} else {
    console.log(`The target value ${targetValue} is not present in the array.`);
}
```

## Time Complexity
The time complexity of Linear Search is O(n), where n is the number of elements in the array. It involves checking each element in the worst-case scenario.

## Summary
Linear Search is a simple yet effective algorithm for finding a target element in an array. While not as fast as some other search algorithms, it performs well for smaller datasets or unsorted collections.

