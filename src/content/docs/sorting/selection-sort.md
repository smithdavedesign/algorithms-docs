---
title: Selection Sort
description: The basics to Selection Sort
---

## Description
Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the input into a sorted and an unsorted region. In each iteration, it finds the minimum element from the unsorted region and swaps it with the first element of the unsorted region. This process is repeated until the entire array is sorted.

## Optimal Solution
Selection Sort has a time complexity of O(n^2) for the worst and average cases. While it is not the most efficient algorithm for large datasets, it has the advantage of minimizing the number of swaps.

## Code
```javascript
### Selection Sort Algorithm

/**
 * Perform Selection Sort on an array of elements.
 *
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap the found minimum element with the first element
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example Usage
const unsortedArray = [64, 25, 12, 22, 11];

const sortedArray = selectionSort(unsortedArray);

console.log("Sorted Array:", sortedArray);
```
## Time Complexity
The time complexity of Selection Sort is O(n^2), where n is the number of elements.

## Summary
Selection Sort is a simple and easy-to-understand sorting algorithm with a time complexity of O(n^2). It repeatedly selects the minimum element from the unsorted region and swaps it with the first element of the unsorted region until the entire array is sorted.