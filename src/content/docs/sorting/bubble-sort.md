---
title: Bubble Sort
description: The basics to Bubble Sort
---

## Description
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

## Optimal Solution
While Bubble Sort is easy to understand and implement, it is not the most efficient sorting algorithm, especially for large datasets. It has a time complexity of O(n^2), making it less suitable for big datasets.

## Code
```javascript
### Bubble Sort Algorithm

/**
 * Perform Bubble Sort on an array.
 *
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function bubbleSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example Usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];

const sortedArray = bubbleSort(unsortedArray);

console.log("Sorted Array:", sortedArray);
```

## Time Complexity
The time complexity of Bubble Sort is O(n^2), where n is the number of elements in the array. It involves nested iterations over the array.

## Summary
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. While easy to understand, its time complexity makes it less efficient for larger datasets.

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework