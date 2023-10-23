---
title: Quick Sort
description: The basics to Quick Sort
---

## Description
Quick Sort is a highly efficient sorting algorithm based on the divide-and-conquer approach. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The process is then applied recursively to the sub-arrays.

## Optimal Solution
Quick Sort is known for its speed and is often faster than other sorting algorithms, such as Merge Sort. It has an average and best-case time complexity of O(n log n), making it suitable for large datasets.

## Code
```javascript

/**
 * Perform Quick Sort on an array.
 *
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example Usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

const sortedArray = quickSort(unsortedArray);

console.log("Sorted Array:", sortedArray);

```
## Time Complexity
The average and best-case time complexity of Quick Sort is O(n log n). However, in the worst case (unbalanced partitions), it can degrade to O(n^2). The average case is commonly observed in practice.

## Summary
Quick Sort is a fast and efficient sorting algorithm with an average and best-case time complexity of O(n log n). It is suitable for large datasets but may degrade in performance in certain scenarios.

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework