---
title: Radix Sort
description: The basics to Radix Sort
---

## Description
Radix Sort is a non-comparative sorting algorithm that works by distributing elements into buckets according to their individual digits. Starting from the least significant digit (LSD), it sorts the elements in each pass and repeats this process until the most significant digit (MSD) is reached. Radix Sort can be applied to integers or strings by considering each digit or character at a time.

## Optimal Solution
Radix Sort has a time complexity of O(k * n), where n is the number of elements and k is the number of digits (or characters) in the maximum element. It is efficient for sorting integers with a fixed number of digits.

## Code
```javascript
### Radix Sort Algorithm

/**
 * Perform Radix Sort on an array of integers.
 *
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function radixSort(arr) {
    const getMax = (arr) => {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    };

    const countSort = (arr, exp) => {
        const output = new Array(arr.length).fill(0);
        const count = new Array(10).fill(0);

        for (let i = 0; i < arr.length; i++) {
            count[Math.floor(arr[i] / exp) % 10]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    };

    const max = getMax(arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countSort(arr, exp);
    }

    return arr;
}

// Example Usage
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];

const sortedArray = radixSort(unsortedArray);

console.log("Sorted Array:", sortedArray);

```

## Time Complexity
The time complexity of Radix Sort is O(k * n), where n is the number of elements and k is the number of digits.

## Summary
Radix Sort is a non-comparative sorting algorithm suitable for integers with a fixed number of digits. It achieves linear time complexity for each pass through the digits, making it efficient for certain scenarios.

