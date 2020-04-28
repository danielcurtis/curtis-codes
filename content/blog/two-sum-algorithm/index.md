---
title: Two Sum Algorithm in JavaScript (NodeJS)
date: '2020-02-07T22:12:03.284Z'
tags: ['algorithms', 'node']
---

I'm going to start solving algorithm challenges and writing about my methods in varrying languages from LeetCode. I'll probably focus on JavaScript and C/C++. This is the first problem I've ever attempted. I'll focus on harder one's from here on out.

## Two Some Problem

Given an array of integers, return indices of the two numbers such that they
add up to a specific target.

You may assume that each input would have exactly one solution, and you may
not use the same element twice.

## Example:

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## My solution

A brute force approach would be to iterate over the array twice:

1. Loop over every element
2. Loop over every other element, comparing sum of element A target to element B

This would look something like:

```js
for (let a = 0, a < nums.length; a++) { // loop over every element
  for (let b = a + 1; b < nums.length; b++) { // loop over every *other* element
    if (nums[b] === target - nums[a]) return [a, b;
  }
}
```

This brute force approach would have a time complexity of O(n^2). Why? Because
for every element n we look up, we interate the array twice. But hash tables have
constant time for looking up elements. So if we implement a hash table to store
the elements, we can reduce the time complexity to O(n) because we only iterate
the number array once to store the elements in the hash table. A `Map` in JavaScript
is a specific type of object with `set`, `get`, and `has` methods, i.e. a hash table.

```js
// nums = [4, 3, 6, 1]
// target = 9

const hashTable = new Map() // create an empty hash table

// 1st iteration
for (let i = 0; i < nums.length; i++) {
  // i = 0
  const complement = target - nums[i] // complement == 9 - 4
  if (hashTable.has(complement))
    // 5 doesn't exist in hash table
    return [hashTable.get(complement), i] // doesn't run
  hashTable.set(nums[i], i) // store [4 the value, 0 the index] in the hash table
}

// 3rd iteration
for (let i = 0; i < nums.length; i++) {
  // i = 2
  const complement = target - nums[i] // complement == 9 - 6
  if (hashTable.has(complement))
    // 3 exists in hash table
    return [hashTable.get(complement), i] // return 3s index, and current index 2
  hashTable.set(nums[i], i) // doesn't run
}
```

It's important to note the difference between `hashTable.has` and `hashTable.get`.
`has` checks the key of the hash table, and get returns the value of the hash table
at the given key.

```
hashTable = {
  key: value
  4: 0, // has checks against 4
  3: 1 // get returns 1
}
```

Using a hash table takes up more memory, but reduces the time complexity and the run-time
in larger datasets. The brute force approach doesn't take up any extra memory because we
use the original array passed in as a parameter. This would have a space complexity of O(1).
Whereas, the hash table approach requires creating a new record for every element resulting
in a space-complexity of O(n).

> Hashing uses a varible of set size to map to information of any size

JavaScript Map's store information in the order it is entered, which resembles a stack data
structure more than a hash table. However, it assigns the entered element a index which is
the "hash function." In the future, I plan on translating the JavaScript solutions into C and
breaking down these data structures at a deeper level.
