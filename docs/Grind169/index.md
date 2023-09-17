---
sidebar_position: 1
---

# Grind 169 Questions

Grouped By Topics

## Arrays

## Easy

### 1. Two Sum

<details>
<summary><b>1. 	
Two Sum</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function twoSum(numbers: number[], target: number): number[] {
  const result: number[] = [0, 0];
  const map: Map<number, number> = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      result[1] = i;
      result[0] = map.get(target - numbers[i])!;
      return result;
    }
    map.set(numbers[i], i);
  }

  return result;
}
```

</details>

### 2. Best Time to Buy and Sell Stock

<details>
<summary><b>2. 	
Best Time to Buy and Sell Stock</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxProfit(prices: number[]): number {
  let left: number = 0; // Buy
  let right: number = 1; // Sell
  let max_profit: number = 0;

  while (right < prices.length) {
    const currentProfit: number = prices[right] - prices[left]; // Current Profit

    if (prices[left] < prices[right]) {
      max_profit = Math.max(currentProfit, max_profit);
    } else {
      left = right;
    }

    right++;
  }

  return max_profit;
}
```

</details>

### 3. Majority Element

<details>
<summary><b>3. 	
Majority Element</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function majorityElement(nums: number[]): number {
  let major: number = nums[0];
  let count: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      count++;
      major = nums[i];
    } else if (major === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return major;
}
```

</details>

### 4. Contains Duplicate

<details>
<summary><b>4. 	
Contains Duplicate</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function containsDuplicate(nums: number[]): boolean {
  const distinct = new Set<number>();

  for (const num of nums) {
    if (distinct.has(num)) {
      return true;
    }
    distinct.add(num);
  }

  return false;
}
```

</details>

### 5. Move Zeroes

<details>
<summary><b>5. 	
Move Zeroes</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function moveZeroes(nums: number[]): void {
  if (nums === null || nums.length === 0) return;

  let insertPos = 0;
  for (const num of nums) {
    if (num !== 0) {
      nums[insertPos++] = num;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
}
```

</details>

### 6. Squares of a Sorted Array

<details>
<summary><b>6. 	
Squares of a Sorted Array</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

```
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function sortedSquares(A: number[]): number[] {
  const n: number = A.length;
  const result: number[] = new Array(n);
  let i: number = 0;
  let j: number = n - 1;

  for (let p: number = n - 1; p >= 0; p--) {
    if (Math.abs(A[i]) > Math.abs(A[j])) {
      result[p] = A[i] * A[i];
      i++;
    } else {
      result[p] = A[j] * A[j];
      j--;
    }
  }

  return result;
}
```

</details>

## Medium

### 7. Insert Interval

<details>
<summary><b>7. 	
Insert Interval</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const n: number = intervals.length;
  let i: number = 0;
  const res: number[][] = [];

  // Case 1: No overlapping case before the merge intervals
  // Compare ending point of intervals to starting point of newInterval
  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push([...intervals[i]]);
    i++;
  }

  // Case 2: Overlapping case and merging of intervals
  while (i < n && newInterval[1] >= intervals[i][0]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  res.push([...newInterval]);

  // Case 3: No overlapping of intervals after newInterval being merged
  while (i < n) {
    res.push([...intervals[i]]);
    i++;
  }

  return res;
}
```

</details>

### 8. 3Sum

<details>
<summary><b>8. 	
3Sum</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const target: number = -nums[i];
    let front: number = i + 1;
    let back: number = nums.length - 1;

    while (front < back) {
      const sum: number = nums[front] + nums[back];

      // Finding an answer that starts from number nums[i]
      if (sum < target) {
        front++;
      } else if (sum > target) {
        back--;
      } else {
        const triplet: number[] = [nums[i], nums[front], nums[back]];
        res.push([...triplet]);

        // Processing duplicates of Number 2
        // Rolling the front pointer to the next different number forwards
        while (front < back && nums[front] === triplet[1]) {
          front++;
        }

        // Processing duplicates of Number 3
        // Rolling the back pointer to the next different number backwards
        while (front < back && nums[back] === triplet[2]) {
          back--;
        }
      }
    }

    // Processing duplicates of Number 1
    while (i + 1 < nums.length && nums[i + 1] === nums[i]) {
      i++;
    }
  }

  return res;
}
```

</details>

### 9. Product of Array Except Self

<details>
<summary><b>9. 	
Product of Array Except Self</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function productExceptSelf(nums: number[]): number[] {
  const n: number = nums.length;
  const res: number[] = new Array(n);
  res[0] = 1;

  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let right: number = 1;

  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
}
```

</details>

### 10. Combination Sum

<details>
<summary><b>10. 	
Combination Sum</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function combinationSum(candidates: number[], target: number): number[][] {
  const solution = new Solution();
  return solution.combinationSum(candidates, target);
}

class Solution {
  combination(
    candidates: number[],
    target: number,
    currComb: number[],
    currSum: number,
    currIndex: number,
    ans: number[][]
  ): void {
    if (currSum > target) return; // Backtrack
    if (currSum === target) {
      ans.push([...currComb]); // Store the solution and backtrack
      return;
    }

    for (let i = currIndex; i < candidates.length; i++) {
      // Try all possible options for the next level
      currComb.push(candidates[i]); // Put one option into the combination
      currSum += candidates[i];
      this.combination(candidates, target, currComb, currSum, i, ans); // Try with this combination, whether it gives a solution or not.
      currComb.pop(); // When this option backtracks to here, remove this and go on to the next option.
      currSum -= candidates[i];
    }
  }

  combinationSum(candidates: number[], target: number): number[][] {
    const ans: number[][] = [];
    const currComb: number[] = [];
    this.combination(candidates, target, currComb, 0, 0, ans);
    return ans;
  }
}
```

</details>

### 11. Merge Intervals

<details>
<summary><b>11. 	
Merge Intervals</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort by ascending starting point
  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [];
  let newInterval: number[] = intervals[0];
  result.push(newInterval);

  for (const interval of intervals) {
    if (interval[0] <= newInterval[1]) {
      // Overlapping intervals, update the end if needed
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    } else {
      // Disjoint intervals, add the new interval to the list
      newInterval = interval;
      result.push(newInterval);
    }
  }

  return result;
}
```

</details>

### 12. Sort Colors

<details>
<summary><b>12. 	
Sort Colors</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(A: number[]): void {
  let second: number = A.length - 1;
  let zero: number = 0;

  for (let i = 0; i <= second; i++) {
    while (A[i] === 2 && i < second) {
      swap(A, i, second);
      second--;
    }

    while (A[i] === 0 && i > zero) {
      swap(A, i, zero);
      zero++;
    }
  }
}

function swap(arr: number[], i: number, j: number): void {
  const temp: number = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```

</details>

### 13. Container With Most Water

<details>
<summary><b>13. 	
Container With Most Water</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxArea(height: number[]): number {
  let i: number = 0;
  let j: number = height.length - 1;
  let water: number = 0;

  while (i < j) {
    water = Math.max(water, (j - i) * Math.min(height[i], height[j]));

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return water;
}
```

</details>

### 14. Gas Station

<details>
<summary><b>14. 	
Gas Station</b></summary>
<h1>Problem Statement</h1>
<p>

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

```
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let total: number = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
  }

  if (total < 0) {
    return -1;
  }

  let tank: number = 0;
  let start: number = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];

    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return start;
}
```

</details>

### 15. Longest Consecutive Sequence

<details>
<summary><b>15. 	
Longest Consecutive Sequence</b></summary>
<h1>Problem Statement</h1>
<p>

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function longestConsecutive(nums: number[]): number {
  const numSet: Set<number> = new Set(nums);
  let best: number = 0;

  for (const x of numSet) {
    if (!numSet.has(x - 1)) {
      let y: number = x + 1;

      while (numSet.has(y)) {
        y++;
      }

      best = Math.max(best, y - x);
    }
  }

  return best;
}
```

</details>

### 16. Rotate Array

<details>
<summary><b>16. 	
Rotate Array</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function rotate(nums: number[], k: number): void {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    const temp: number = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
```

</details>

### 17. Contiguous Array

<details>
<summary><b>17. 	
Contiguous Array</b></summary>
<h1>Problem Statement</h1>
<p>

Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

```
Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function findMaxLength(nums: number[]): number {
  const mp: Map<number, number> = new Map();
  mp.set(0, -1);
  let sum: number = 0;
  let longestSubarray: number = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;

    if (mp.has(sum)) {
      if (longestSubarray < i - mp.get(sum)!) {
        longestSubarray = i - mp.get(sum)!;
      }
    } else {
      mp.set(sum, i);
    }
  }

  return longestSubarray;
}
```

</details>

### 18. Subarray Sum Equals K

<details>
<summary><b>18. 	
Subarray Sum Equals K</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

```
Input: nums = [1,1,1], k = 2
Output: 2
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function subarraySum(nums: number[], k: number): number {
  const mp: Map<number, number> = new Map();
  let sum: number = 0;
  let ans: number = 0;
  mp.set(sum, 1);

  for (const num of nums) {
    sum += num;
    const find: number = sum - k;

    if (mp.has(find)) {
      ans += mp.get(find)!;
    }

    if (mp.has(sum)) {
      mp.set(sum, mp.get(sum)! + 1);
    } else {
      mp.set(sum, 1);
    }
  }

  return ans;
}
```

</details>

### 19. 3Sum Closest

<details>
<summary><b>19. 	
 3Sum Closest</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function threeSumClosest(nums: number[], target: number): number {
  if (nums.length < 3) return 0;
  let closest: number = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);

  for (let first = 0; first < nums.length - 2; ++first) {
    if (first > 0 && nums[first] === nums[first - 1]) continue;
    let second: number = first + 1;
    let third: number = nums.length - 1;

    while (second < third) {
      const curSum: number = nums[first] + nums[second] + nums[third];
      if (curSum === target) return curSum;

      if (Math.abs(target - curSum) < Math.abs(target - closest)) {
        closest = curSum;
      }

      if (curSum > target) {
        --third;
      } else {
        ++second;
      }
    }
  }

  return closest;
}
```

</details>

### 20. Non-overlapping Intervals

<details>
<summary><b>20. 	
 Non-overlapping Intervals</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

```
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function eraseOverlapIntervals(intervals: number[][]): number {
  if (!intervals || intervals.length === 0) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let prevEnd = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (prevEnd > intervals[i][0]) {
      count++;
      prevEnd = Math.min(intervals[i][1], prevEnd);
    } else {
      prevEnd = intervals[i][1];
    }
  }

  return count;
}
```

</details>

## Hard

### 21. Sliding Window Maximum

<details>
<summary><b>21. 	
 Sliding Window Maximum</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxSlidingWindow(a: number[], k: number): number[] {
  if (!a || k <= 0) {
    return [];
  }

  const n: number = a.length;
  const r: number[] = new Array(n - k + 1);
  let ri: number = 0;

  // Store index
  const q: number[] = [];

  for (let i = 0; i < a.length; i++) {
    // Remove numbers out of range k
    while (q.length > 0 && q[0] < i - k + 1) {
      q.shift();
    }

    // Remove smaller numbers in k range as they are useless
    while (q.length > 0 && a[q[q.length - 1]] < a[i]) {
      q.pop();
    }

    // q contains index, r contains content
    q.push(i);

    if (i >= k - 1) {
      r[ri++] = a[q[0]];
    }
  }

  return r;
}
```

</details>

## Stack

## Easy

### 22. Valid Parentheses

<details>
<summary><b>22. 	
Valid Parentheses</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

```
Input: s = "()[]{}"
Output: true
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const c of s) {
    if (c === "(") stack.push(")");
    else if (c === "{") stack.push("}");
    else if (c === "[") stack.push("]");
    else if (stack.length === 0 || stack.pop() !== c) return false;
  }

  return stack.length === 0;
}
```

</details>

### 23. Implement Queue using Stacks

<details>
<summary><b>23. 	
Implement Queue using Stacks</b></summary>
<h1>Problem Statement</h1>
<p>

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

```
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
class MyQueue {
  private inStk: number[] = [];
  private outStk: number[] = [];

  push(x: number): void {
    this.inStk.push(x);
  }

  pop(): number {
    this.peek();
    const val = this.outStk.pop()!;
    return val;
  }

  peek(): number {
    if (this.outStk.length === 0) {
      while (this.inStk.length > 0) {
        this.outStk.push(this.inStk.pop()!);
      }
    }
    return this.outStk[this.outStk.length - 1];
  }

  empty(): boolean {
    return this.inStk.length === 0 && this.outStk.length === 0;
  }
}
```

</details>

### 24. Backspace String Compare

<details>
<summary><b>24. 	
Backspace String Compare</b></summary>
<h1>Problem Statement</h1>
<p>

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

```
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function backspaceCompare(S: string, T: string): boolean {
  let i: number = S.length - 1;
  let j: number = T.length - 1;
  let back: number;

  while (true) {
    back = 0;

    while (i >= 0 && (back > 0 || S[i] === "#")) {
      back += S[i] === "#" ? 1 : -1;
      i--;
    }

    back = 0;

    while (j >= 0 && (back > 0 || T[j] === "#")) {
      back += T[j] === "#" ? 1 : -1;
      j--;
    }

    if (i >= 0 && j >= 0 && S[i] === T[j]) {
      i--;
      j--;
    } else {
      break;
    }
  }

  return i === -1 && j === -1;
}
```

</details>

## Medium

### 25. Evaluate Reverse Polish Notation

<details>
<summary><b>25. 	
Evaluate Reverse Polish Notation</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '\*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.

```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (token === "/") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(Math.trunc(a / b));
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (token === "-") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a - b);
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack.pop() || 0;
}
```

</details>

### 26. Min Stack

<details>
<summary><b>26. 	
Min Stack</b></summary>
<h1>Problem Statement</h1>
<p>

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
class MinStack {
  private min: number = Number.MAX_VALUE;
  private stack: number[] = [];

  push(x: number): void {
    // Only push the old minimum value when the current
    // minimum value changes after pushing the new value x
    if (x <= this.min) {
      this.stack.push(this.min);
      this.min = x;
    }
    this.stack.push(x);
  }

  pop(): void {
    // If pop operation could result in changing the current minimum value,
    // pop twice and change the current minimum value to the last minimum value.
    if (this.stack.pop() === this.min) {
      this.min = this.stack.pop()!;
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}
```

</details>

### 27. Daily Temperatures

<details>
<summary><b>27. 	
Daily Temperatures</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

```
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function dailyTemperatures(temperatures: number[]): number[] {
  const res: number[] = Array.from({ length: temperatures.length }, () => 0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const j: number = stack.pop()!;
      res[j] = i - j;
    }
    stack.push(i);
  }

  return res;
}
```

</details>

### 28. Decode String

<details>
<summary><b>28. 	
Decode String</b></summary>
<h1>Problem Statement</h1>
<p>

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

```
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function decodeString(s: string): string {
  let res = "";
  const countStack: number[] = [];
  const resStack: string[] = [];
  let idx = 0;

  while (idx < s.length) {
    if (/\d/.test(s[idx])) {
      let count = 0;
      while (/\d/.test(s[idx])) {
        count = 10 * count + parseInt(s[idx]);
        idx++;
      }
      countStack.push(count);
    } else if (s[idx] === "[") {
      resStack.push(res);
      res = "";
      idx++;
    } else if (s[idx] === "]") {
      let temp = resStack.pop()!;
      const repeatTimes = countStack.pop()!;
      for (let i = 0; i < repeatTimes; i++) {
        temp += res;
      }
      res = temp;
      idx++;
    } else {
      res += s[idx++];
    }
  }
  return res;
}
```

</details>

### 29. Asteroid Collision

<details>
<summary><b>29. 	
Asteroid Collision</b></summary>
<h1>Problem Statement</h1>
<p>

We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

```
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroid)
      ) {
        stack.pop();
      }

      if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(asteroid);
      } else if (stack[stack.length - 1] + asteroid === 0) {
        stack.pop();
      }
    }
  }

  return stack;
}
```

</details>

### 30. Basic Calculator II

<details>
<summary><b>30. 	
Basic Calculator II</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

```
Input: s = "3+2*2"
Output: 7
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function calculate(s: string): number {
  const len = s.length;
  if (!s || len === 0) return 0;

  const stack: number[] = [];
  let num = 0;
  let sign = "+";

  for (let i = 0; i < len; i++) {
    if (/\d/.test(s[i])) {
      num = num * 10 + parseInt(s[i]);
    }

    if ((!/\d/.test(s[i]) && s[i] !== " ") || i === len - 1) {
      if (sign === "-") {
        stack.push(-num);
      }
      if (sign === "+") {
        stack.push(num);
      }
      if (sign === "*") {
        stack.push(stack.pop() * num);
      }
      if (sign === "/") {
        stack.push(Math.trunc(stack.pop() / num));
      }
      sign = s[i];
      num = 0;
    }
  }

  let result = 0;
  for (const val of stack) {
    result += val;
  }

  return result;
}
```

</details>

## Hard

### 31. Trapping Rain Water

<details>
<summary><b>31. 	
Trapping Rain Water</b></summary>
<h1>Problem Statement</h1>
<p>

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function trap(height: number[]): number {
  if (height === null) return 0;
  const stack: number[] = [];
  let i = 0,
    maxWater = 0,
    maxBotWater = 0;

  while (i < height.length) {
    if (stack.length === 0 || height[i] <= height[stack[stack.length - 1]]) {
      stack.push(i++);
    } else {
      const bot = stack.pop();
      maxBotWater =
        stack.length === 0
          ? 0
          : (Math.min(height[stack[stack.length - 1]], height[i]) -
              height[bot]) *
            (i - stack[stack.length - 1] - 1);
      maxWater += maxBotWater;
    }
  }

  return maxWater;
}
```

</details>

</details>

### 32. Basic Calculator

<details>
<summary><b>32. 	
Basic Calculator</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

```
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function calculate(s: string): number {
  const stack: number[] = [];
  let result = 0;
  let number = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);

    if (/\d/.test(c)) {
      number = 10 * number + parseInt(c);
    } else if (c === "+") {
      result += sign * number;
      number = 0;
      sign = 1;
    } else if (c === "-") {
      result += sign * number;
      number = 0;
      sign = -1;
    } else if (c === "(") {
      stack.push(result);
      stack.push(sign);
      sign = 1;
      result = 0;
    } else if (c === ")") {
      result += sign * number;
      number = 0;
      result *= stack.pop()!;
      result += stack.pop()!;
    }
  }

  if (number !== 0) result += sign * number;

  return result;
}
```

</details>

</details>

### 33. Largest Rectangle in Histogram

<details>
<summary><b>33. 	
Largest Rectangle in Histogram</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

```
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function largestRectangleArea(heights: number[]): number {
  const len = heights.length;
  const stack: number[] = [];
  let maxArea = 0;

  for (let i = 0; i <= len; i++) {
    const h = i === len ? 0 : heights[i];

    if (stack.length === 0 || h >= heights[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      const tp = stack.pop()!;
      maxArea = Math.max(
        maxArea,
        heights[tp] * (stack.length === 0 ? i : i - 1 - stack[stack.length - 1])
      );
      i--;
    }
  }

  return maxArea;
}
```

</details>

</details>

### 34. Maximum Frequency Stack

<details>
<summary><b>34. 	
Maximum Frequency Stack</b></summary>
<h1>Problem Statement</h1>
<p>

Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:

FreqStack() constructs an empty frequency stack.
void push(int val) pushes an integer val onto the top of the stack.
int pop() removes and returns the most frequent element in the stack.
If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.

```
Input
["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
[[], [5], [7], [5], [7], [4], [5], [], [], [], []]
Output
[null, null, null, null, null, null, null, 5, 7, 5, 4]

Explanation
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class FreqStack {
  freq: Map<number, number> = new Map();
  m: Map<number, number[]> = new Map();
  maxfreq: number = 0;

  push(x: number): void {
    const f: number = (this.freq.get(x) || 0) + 1;
    this.freq.set(x, f);
    this.maxfreq = Math.max(this.maxfreq, f);
    if (!this.m.has(f)) this.m.set(f, []);
    this.m.get(f)!.push(x);
  }

  pop(): number {
    const x: number = this.m.get(this.maxfreq)!.pop()!;
    this.freq.set(x, this.maxfreq - 1);
    if (this.m.get(this.maxfreq)!.length === 0) this.maxfreq--;
    return x;
  }
}
```

</details>

</details>

### 35. Longest Valid Parentheses

<details>
<summary><b>35. 	
Longest Valid Parentheses</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

```
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function longestValidParentheses(s: string): number {
  const n: number = s.length;
  let longest: number = 0;
  const st: number[] = [];

  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      st.push(i);
    } else {
      if (st.length !== 0) {
        if (s[st[st.length - 1]] === "(") {
          st.pop();
        } else {
          st.push(i);
        }
      } else {
        st.push(i);
      }
    }
  }

  if (st.length === 0) {
    longest = n;
  } else {
    let a: number = n;
    let b: number = 0;
    while (st.length !== 0) {
      b = st.pop()!;
      longest = Math.max(longest, a - b - 1);
      a = b;
    }
    longest = Math.max(longest, a);
  }

  return longest;
}
```

</details>

</details>

## LinkedList

## Easy

### 36. Merge Two Sorted Lists

<details>
<summary><b>36. 	
Merge Two Sorted Lists</b></summary>
<h1>Problem Statement</h1>
<p>

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // If list1 is null, return list2.
  if (list1 === null) {
    return list2;
  }

  // If list2 is null, return list1.
  if (list2 === null) {
    return list1;
  }

  let ptr: ListNode | null = list1;

  if (list1.val > list2.val) {
    ptr = list2;
    list2 = list2.next;
  } else {
    list1 = list1.next;
  }

  let curr: ListNode | null = ptr;

  // Merge the two lists while they are not empty.
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  // Add the remaining elements of the non-empty list.
  if (!list1) {
    curr.next = list2;
  } else {
    curr.next = list1;
  }

  return ptr;
}
```

</details>

</details>

### 37. Linked List Cycle

<details>
<summary><b>37. 	
Linked List Cycle</b></summary>
<h1>Problem Statement</h1>
<p>

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  // Initialize two pointers, "fast" and "slow," and assign them to the head of the linked list.
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  // Traverse the linked list using "fast" and "slow" pointers.
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next; // Move "fast" two steps at a time.
    slow = slow?.next; // Move "slow" one step at a time.

    // If "fast" and "slow" meet at the same node, there is a cycle in the linked list.
    if (fast === slow) {
      return true;
    }
  }

  // If the traversal reaches the end of the linked list, there is no cycle.
  return false;
}
```

</details>

</details>

### 38. Reverse Linked List

<details>
<summary><b>38. 	
Reverse Linked List</b></summary>
<h1>Problem Statement</h1>
<p>

Given the head of a singly linked list, reverse the list, and return the reversed list.

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let newHead: ListNode | null = null;
  while (head !== null) {
    const next: ListNode | null = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }
  return newHead;
}

// function reverseListRecursive(head: ListNode | null): ListNode | null {
//     function reverseListInt(current: ListNode | null, newHead: ListNode | null): ListNode | null {
//         if (current === null)
//             return newHead;
//         const next: ListNode | null = current.next;
//         current.next = newHead;
//         return reverseListInt(next, current);
//     }

//     return reverseListInt(head, null);
// }
```

</details>

</details>

### 39. Middle of the Linked List

<details>
<summary><b>39. 	
Middle of the Linked List</b></summary>
<h1>Problem Statement</h1>
<p>

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

```
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast!.next!.next;
  }
  return slow;
}
```

</details>

</details>

### 40. Palindrome Linked List

<details>
<summary><b>40. 	
Palindrome Linked List</b></summary>
<h1>Problem Statement</h1>
<p>

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

```
Input: head = [1,2,2,1]
Output: true
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  // Move fast and slow pointers to find the middle of the list
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow!.next;
  }

  // If the fast pointer is not null, it's an odd-length list, so move slow one step further
  if (fast !== null) {
    slow = slow!.next;
  }

  // Reverse the second half of the list
  slow = reverse(slow);
  fast = head;

  // Compare the first half with the reversed second half
  while (slow !== null) {
    if (fast!.val !== slow.val) {
      return false;
    }
    fast = fast!.next;
    slow = slow!.next;
  }

  return true;
}

function reverse(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  while (head !== null) {
    const next: ListNode | null = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
```

</details>

</details>

## Medium

### 41. LRU Cache

<details>
<summary><b>41. 	
 LRU Cache</b></summary>
<h1>Problem Statement</h1>
<p>

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

```
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class Node {
  key: number;
  val: number;
  prev: Node | null;
  next: Node | null;
  constructor(k: number, v: number) {
    this.key = k;
    this.val = v;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  capacity: number;
  dic: { [key: number]: Node };
  head: Node;
  tail: Node;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.dic = {};
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (key in this.dic) {
      const n = this.dic[key];
      this._remove(n);
      this._add(n);
      return n.val;
    }
    return -1;
  }

  put(key: number, value: number): void {
    if (key in this.dic) {
      this._remove(this.dic[key]);
    }
    const n = new Node(key, value);
    this._add(n);
    this.dic[key] = n;
    if (Object.keys(this.dic).length > this.capacity) {
      const n = this.head.next;
      this._remove(n);
      delete this.dic[n.key];
    }
  }

  _remove(node: Node): void {
    const p = node.prev;
    const n = node.next;
    p.next = n;
    n.prev = p;
  }

  _add(node: Node): void {
    const p = this.tail.prev;
    p.next = node;
    this.tail.prev = node;
    node.prev = p;
    node.next = this.tail;
  }
}
```

</details>

</details>

### 42. Remove Nth Node From End of List

<details>
<summary><b>42. 	
Remove Nth Node From End of List</b></summary>
<h1>Problem Statement</h1>
<p>

Given the head of a linked list, remove the nth node from the end of the list and return its head.

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
c;
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const start = new ListNode(0);
  let slow: ListNode | null = start;
  let fast: ListNode | null = start;
  slow.next = head;

  // Move fast in front so that the gap between slow and fast becomes n
  for (let i = 1; i <= n + 1; i++) {
    if (fast === null) {
      return null; // Invalid input, n is greater than the length of the linked list
    }
    fast = fast.next;
  }

  // Move fast to the end, maintaining the gap
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // Skip the desired node
  slow.next = slow.next!.next;

  return start.next;
}
```

</details>

</details>

### 42. Swap Nodes in Pairs

<details>
<summary><b>42. 	
Swap Nodes in Pairs</b></summary>
<h1>Problem Statement</h1>
<p>

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;
  let current: ListNode | null = dummy;

  while (current.next !== null && current.next.next !== null) {
    const first: ListNode | null = current.next;
    const second: ListNode | null = current.next.next;
    first.next = second.next;
    current.next = second;
    current.next.next = first;
    current = current.next.next;
  }

  return dummy.next;
}
```

</details>

</details>

### 43. Odd Even Linked List

<details>
<summary><b>43. 	
Odd Even Linked List</b></summary>
<h1>Problem Statement</h1>
<p>

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

```
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head !== null) {
    let odd: ListNode | null = head;
    let even: ListNode | null = head.next;
    let evenHead: ListNode | null = even;

    while (even !== null && even.next !== null) {
      odd.next = odd.next?.next || null;
      even.next = even.next?.next || null;
      odd = odd.next;
      even = even.next;
    }

    odd.next = evenHead;
  }

  return head;
}
```

</details>

</details>

### 44. Add Two Numbers

<details>
<summary><b>44. 	
Add Two Numbers</b></summary>
<h1>Problem Statement</h1>
<p>

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy: ListNode = new ListNode(0); // Create a dummy node.
  let curr: ListNode | null = dummy; // Initialize a pointer to the dummy node.
  let carry: number = 0; // Initialize the carry to 0.

  // Iterate through the linked lists until both lists reach null, or carry has a value.
  while (l1 !== null || l2 !== null || carry === 1) {
    let sum: number = 0; // Initialize the sum.

    // Add the values of l1 and l2 to the sum and move to the next nodes if they exist.
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += carry; // Add the carry to the sum.

    carry = Math.floor(sum / 10); // Calculate the carry.

    const node: ListNode = new ListNode(sum % 10); // Create a new node with the value obtained by taking the modulo of sum.

    curr.next = node; // Set the next pointer of the current node to the new node.
    curr = curr.next; // Move the current pointer to the new node.
  }

  return dummy.next; // Return the next node of the dummy, which is the head of the resulting linked list.
}
```

</details>

</details>

### 45. Sort List

<details>
<summary><b>45. 	
Sort List</b></summary>
<h1>Problem Statement</h1>
<p>

Given the head of a linked list, return the list after sorting it in ascending order.

```
Input: head = [4,2,1,3]
Output: [1,2,3,4]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy: ListNode = new ListNode(0);
  let p: ListNode | null = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }

  if (l1 !== null) {
    p.next = l1;
  }

  if (l2 !== null) {
    p.next = l2;
  }

  return dummy.next;
}

function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  // Step 1: Cut the list into two halves
  let prev: ListNode | null = null;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (prev !== null) {
    prev.next = null;
  }

  // Step 2: Sort each half
  let l1: ListNode | null = sortList(head);
  let l2: ListNode | null = sortList(slow);

  // Step 3: Merge l1 and l2
  return merge(l1, l2);
}
```

</details>

</details>

### 46. Reorder List

<details>
<summary><b>46. 	
Reorder List</b></summary>
<h1>Problem Statement</h1>
<p>

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

```
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (head === null || head.next === null) {
    return;
  }

  // Find the middle of the list
  let p1: ListNode | null = head;
  let p2: ListNode | null = head;
  while (p2.next !== null && p2.next.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  // Reverse the half after the middle: 1->2->3->4->5->6 to 1->2->3->6->5->4
  let preMiddle: ListNode | null = p1;
  let preCurrent: ListNode | null = p1.next;
  while (preCurrent.next !== null) {
    let current: ListNode | null = preCurrent.next;
    preCurrent.next = current.next;
    current.next = preMiddle.next;
    preMiddle.next = current;
  }

  // Start reorder one by one: 1->2->3->6->5->4 to 1->6->2->5->3->4
  p1 = head;
  p2 = preMiddle.next;
  while (p1 !== preMiddle) {
    preMiddle.next = p2.next;
    p2.next = p1.next;
    p1.next = p2;
    p1 = p2.next;
    p2 = preMiddle.next;
  }
}
```

</details>

</details>

### 47. Rotate List

<details>
<summary><b>47. 	
Rotate List</b></summary>
<h1>Problem Statement</h1>
<p>

Given the head of a linked list, rotate the list to the right by k places.

```
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  const dummy: ListNode = new ListNode(0);
  dummy.next = head;
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  let i: number;
  for (i = 0; fast.next !== null; i++) {
    fast = fast.next;
  }

  for (let j = i - (k % i); j > 0; j--) {
    slow = slow!.next;
  }

  fast.next = dummy.next;
  dummy.next = slow!.next;
  slow!.next = null;

  return dummy.next;
}
```

</details>

</details>

## Hard

### 48. Reverse Nodes in k-Group

<details>
<summary><b>48. 	
Reverse Nodes in k-Group</b></summary>
<h1>Problem Statement</h1>
<p>

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let curr: ListNode | null = head;
  let count: number = 0;

  while (curr !== null && count !== k) {
    curr = curr.next;
    count++;
  }

  if (count === k) {
    curr = reverseKGroup(curr, k);

    while (count-- > 0) {
      const tmp: ListNode | null = head!.next;
      head!.next = curr;
      curr = head;
      head = tmp;
    }

    head = curr;
  }

  return head;
}
```

</details>

</details>

## String

## Easy

### 49. Reverse Nodes in k-Group

<details>
<summary><b>49. 	
Reverse Nodes in k-Group</b></summary>
<h1>Problem Statement</h1>
<p>

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let curr: ListNode | null = head;
  let count: number = 0;

  while (curr !== null && count !== k) {
    curr = curr.next;
    count++;
  }

  if (count === k) {
    curr = reverseKGroup(curr, k);

    while (count-- > 0) {
      const tmp: ListNode | null = head!.next;
      head!.next = curr;
      curr = head;
      head = tmp;
    }

    head = curr;
  }

  return head;
}
```

</details>

</details>
