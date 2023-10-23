---
title: Merge Sort
description: The basics to Merge Sort
---

## Description
Merge Sort is a popular sorting algorithm that follows the divide-and-conquer paradigm. It works by dividing the unsorted list into n sub-lists, each containing one element, and then repeatedly merging sub-lists to produce new sorted sub-lists until there is only one sub-list remaining.

## Optimal Solution
Merge Sort is an efficient and stable sorting algorithm. It guarantees O(n log n) time complexity, making it suitable for large datasets. However, it requires additional space for the merging process.

## Code
```javascript

/**
 * Perform Merge Sort on an array.
 *
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merge two sorted arrays into a single sorted array.
 *
 * @param {Array} left - The left array.
 * @param {Array} right - The right array.
 * @returns {Array} - The merged and sorted array.
 */
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example Usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

const sortedArray = mergeSort(unsortedArray);

console.log("Sorted Array:", sortedArray);

```

## Time Complexity
The time complexity of Merge Sort is O(n log n), where n is the number of elements in the array. It divides the array into halves and recursively sorts them, followed by the merging process.

## Summary
Merge Sort is an efficient and stable sorting algorithm with a time complexity of O(n log n). It is suitable for large datasets but requires additional space for the merging process.

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework