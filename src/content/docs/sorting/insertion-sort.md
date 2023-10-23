---
title: Insertion Sort
description: The basics to Insertion Sort
---

## Description
Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it performs well for small datasets or nearly sorted lists.

## Optimal Solution
Insertion Sort is efficient for small datasets or lists that are almost sorted. It has a time complexity of O(n^2), making it less suitable for large datasets compared to more advanced algorithms.

## Code
```javascript

/**
 * Perform Insertion Sort on an array.
 *
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function insertionSort(arr) {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }

    return arr;
}

// Example Usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

const sortedArray = insertionSort(unsortedArray);

console.log("Sorted Array:", sortedArray);
```

## Time Complexity
The time complexity of Insertion Sort is O(n^2), where n is the number of elements in the array. It involves iterating over the array and inserting each element into its correct position.

## Summary
Insertion Sort is a simple sorting algorithm suitable for small datasets or nearly sorted lists. It builds the final sorted array one item at a time and has a time complexity of O(n^2), making it less efficient for large datasets.

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework