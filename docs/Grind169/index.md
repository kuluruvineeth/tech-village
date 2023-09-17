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
