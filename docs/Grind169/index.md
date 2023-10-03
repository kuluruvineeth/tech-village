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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/59455.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNTk0NTUuanBnIiwiaWF0IjoxNjk1Njk2ODYxLCJleHAiOjE4NTMzNzY4NjF9.NFO2vM59sCKthVcy4A8RU0nRn-rJHkdQcGMIcYHQ-eo&t=2023-09-26T02%3A54%3A21.689Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/49938.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNDk5MzguanBnIiwiaWF0IjoxNjk1Njk3NzkzLCJleHAiOjE4NTMzNzc3OTN9.d9vepWbjMyDOJpobilIcqRDp0ychvQJ28gx_YjpadDg&t=2023-09-26T03%3A09%3A53.097Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/72243.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNzIyNDMuanBnIiwiaWF0IjoxNjk1Njk4NDA5LCJleHAiOjE4NTMzNzg0MDl9.hxXD3TL3lFe8tIygsR_Pn5z4TDitnb4oF6znxwTGKRg&t=2023-09-26T03%3A20%3A09.082Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/88650.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODg2NTAuanBnIiwiaWF0IjoxNjk1NzI5NjA4LCJleHAiOjE4NTM0MDk2MDh9.z0wM1UfH75fIy4Ti74vV_SVvCdWWa-r3nHFxyE-wMnc&t=2023-09-26T12%3A00%3A08.160Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/3911.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMzkxMS5qcGciLCJpYXQiOjE2OTU3MzAxNDQsImV4cCI6MTg1MzQxMDE0NH0.ncsJ0OeOLSczwjCh9YZAm4VYbV9wPOWymziIgzxdR18&t=2023-09-26T12%3A09%3A04.311Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/29808.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMjk4MDguanBnIiwiaWF0IjoxNjk1NzMwNzkxLCJleHAiOjE4NTM0MTA3OTF9.1iBSfZnG85GHzLatCR7tPAaicukmZfub98FbfpWQCOU&t=2023-09-26T12%3A19%3A51.664Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87700.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MDAuanBnIiwiaWF0IjoxNjk1NzMxODM1LCJleHAiOjE4NTM0MTE4MzV9.Pp1ZKSf3EQhrg4dugWQQUUpMLIBv4_LaiDqxbNgGelQ&t=2023-09-26T12%3A37%3A15.539Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/13222.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMTMyMjIuanBnIiwiaWF0IjoxNjk1Nzc4NjEwLCJleHAiOjE4NTM0NTg2MTB9.YXcduHiwQCPi5reRn76sQ00XuNtjFS1DR0EqU_Lpos4&t=2023-09-27T01%3A36%3A50.517Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/47979.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNDc5NzkuanBnIiwiaWF0IjoxNjk1Nzc5NzQ0LCJleHAiOjE4NTM0NTk3NDR9.VitPD68sT9joZ2JyyfNTdVP6jcUXN8ACeDLwiTXHt6E&t=2023-09-27T01%3A55%3A44.883Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/90644.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvOTA2NDQuanBnIiwiaWF0IjoxNjk1Nzg3MTc5LCJleHAiOjE4NTM0NjcxNzl9.rHjF6gpXjGwIfuOeBDRGYYRE_CO_oN4VMtlac91uEVo&t=2023-09-27T03%3A59%3A39.494Z" alt="image"></img>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/17293.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMTcyOTMuanBnIiwiaWF0IjoxNjk1Nzg3MjMxLCJleHAiOjE4NTM0NjcyMzF9.hqbqFlriL3yhS36YuVhqGDte1SwhHKtm5-Kk-8xcyYI&t=2023-09-27T04%3A00%3A31.427Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function combinationSum(candidates: number[], target: number): number[][] {
  const solution = new Solution();
  return solution.combinationSum(candidates, target);
}

class Solution {
  findCombination(
    ind: number,
    target: number,
    arr: number[],
    ans: number[][],
    ds: number[]
  ): void {
    if (ind === arr.length) {
      if (target === 0) {
        ans.push([...ds]);
      }
      return;
    }

    // Pick up the element
    if (arr[ind] <= target) {
      ds.push(arr[ind]);
      this.findCombination(ind, target - arr[ind], arr, ans, ds);
      ds.pop();
    }

    this.findCombination(ind + 1, target, arr, ans, ds);
  }

  combinationSum(candidates: number[], target: number): number[][] {
    const ans: number[][] = [];
    const ds: number[] = [];
    this.findCombination(0, target, candidates, ans, ds);
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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/46976.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNDY5NzYuanBnIiwiaWF0IjoxNjk1Nzg4ODYxLCJleHAiOjE4NTM0Njg4NjF9.0OGpN5pgKcsVSn5zLjxfEOzrBqdBgJ-w8ar62qA0xLg&t=2023-09-27T04%3A27%3A42.077Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/85569.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODU1NjkuanBnIiwiaWF0IjoxNjk1ODY2Nzg4LCJleHAiOjE4NTM1NDY3ODh9.N7oJBMgBlJ4NC9Vsdznux6nObf5C8RVqw39GmcFknUQ&t=2023-09-28T02%3A06%3A28.361Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/33108.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMzMxMDguanBnIiwiaWF0IjoxNjk1ODY3OTU5LCJleHAiOjE4NTM1NDc5NTl9.2yYH1ekNcnD9oqE4gx5gWQB6lVcJHMwheBjLDmVU0Tg&t=2023-09-28T02%3A25%3A59.310Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/85782.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODU3ODIuanBnIiwiaWF0IjoxNjk1ODY4NTczLCJleHAiOjE4NTM1NDg1NzN9.8lIHOfeUwoskC4mq-XW7Kw9b2cacVvz9XcRLfcQQixc&t=2023-09-28T02%3A36%3A13.706Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/59770.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNTk3NzAuanBnIiwiaWF0IjoxNjk1ODY5MTM0LCJleHAiOjE4NTM1NDkxMzR9.cyDuIF58Feiwrtg6fLpXx7Vkukw-lq5ZfrlENgKRYAI&t=2023-09-28T02%3A45%3A34.792Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/69437.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNjk0MzcuanBnIiwiaWF0IjoxNjk1ODY5NTIyLCJleHAiOjE4NTM1NDk1MjJ9.7CkFOTK2SiVp8W_lirkXW-CVCV3u-4SJ0mAmNnr7B5c&t=2023-09-28T02%3A52%3A02.475Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/35905.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMzU5MDUuanBnIiwiaWF0IjoxNjk1ODcxNjIyLCJleHAiOjE4NTM1NTE2MjJ9.YbIm74JLNfKUjueR4bH7wsjoEJ7pDpUjIvT4Ef0Bo2Q&t=2023-09-28T03%3A27%3A02.500Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/95472.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvOTU0NzIuanBnIiwiaWF0IjoxNjk1ODczMjQ1LCJleHAiOjE4NTM1NTMyNDV9.PKtB3kc1N8ghq13Ka4hdCmFX-WGw-aVveSLRVfjh-ew&t=2023-09-28T03%3A54%3A06.167Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/33464.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMzM0NjQuanBnIiwiaWF0IjoxNjk1OTUyMDI4LCJleHAiOjE4NTM2MzIwMjh9.rcET52xrWQXbvMBLOCLdkNxhWik0ULiF9B2zOlAdJI0&t=2023-09-29T01%3A47%3A08.683Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/74514.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNzQ1MTQuanBnIiwiaWF0IjoxNjk1OTUyNTM1LCJleHAiOjE4NTM2MzI1MzV9.b7-lyK4bOl3vH6tUoYPEEN2cE-soEpmKgmfkiJ4-_88&t=2023-09-29T01%3A55%3A35.580Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/81772.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODE3NzIuanBnIiwiaWF0IjoxNjk1OTUzODkxLCJleHAiOjE4NTM2MzM4OTF9.yekTGA62hBxtEcEBu9MZfPgvuYcixmQnVm2sV7lqBSg&t=2023-09-29T02%3A18%3A11.474Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/31363.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMzEzNjMuanBnIiwiaWF0IjoxNjk1OTU0NDI3LCJleHAiOjE4NTM2MzQ0Mjd9.87qzsO99JUKyMOHAfEA-yuC5jccdMAxp_TCuoJREtlA&t=2023-09-29T02%3A27%3A07.281Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/19789.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMTk3ODkuanBnIiwiaWF0IjoxNjk1OTU0OTc5LCJleHAiOjE4NTM2MzQ5Nzl9.3dJLUxCqH_geM3KG6KyWhPF1cwBdTLJljjNL4eIpJUg&t=2023-09-29T02%3A36%3A20.050Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/56448.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNTY0NDguanBnIiwiaWF0IjoxNjk2MjIwNDgzLCJleHAiOjE4NTM5MDA0ODN9.XhyQW6h3B3UBO5B9ItrxsAyxM568l93TBlPiEx6VjSk&t=2023-10-02T04%3A21%3A23.806Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/85979.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODU5NzkuanBnIiwiaWF0IjoxNjk2MjIwOTEwLCJleHAiOjE4NTM5MDA5MTB9.DOqbpn8xlDdfgL6TLRQMdSQnxVlLDfpzSSoXQSjFfms&t=2023-10-02T04%3A28%3A30.942Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/85582.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODU1ODIuanBnIiwiaWF0IjoxNjk2MjIxODM3LCJleHAiOjE4NTM5MDE4Mzd9.kve0I4n8ibYsIXocGXkRSXCWjlUd3VnwFVCJwnwd1wg&t=2023-10-02T04%3A43%3A57.574Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/11360.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMTEzNjAuanBnIiwiaWF0IjoxNjk2MjIyOTU2LCJleHAiOjE4NTM5MDI5NTZ9.tOZVeTOWT36e1_5F82M9n2SOZPzWqYZsmVloB0K1SKg&t=2023-10-02T05%3A02%3A36.212Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/69803.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNjk4MDMuanBnIiwiaWF0IjoxNjk2Mjk2MTI5LCJleHAiOjE4NTM5NzYxMjl9.li7m5k7jfLS1aMfOYRJ8qBT8g23HKy_zkoZNF5uqdJ4&t=2023-10-03T01%3A22%3A09.632Z" alt="image"></img>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/23924.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMjM5MjQuanBnIiwiaWF0IjoxNjk2Mjk2MTcwLCJleHAiOjE4NTM5NzYxNzB9.XyCRhGLbqcrkZpYYzabYV8BrK_C1V1ZC6iIuvMivoVc&t=2023-10-03T01%3A22%3A50.486Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/73269.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvNzMyNjkuanBnIiwiaWF0IjoxNjk2Mjk2NTIzLCJleHAiOjE4NTM5NzY1MjN9.r_CihHIkeSah9Pekkvjkd3aHg_Tu5kFH88oN7XvlLYs&t=2023-10-03T01%3A28%3A43.668Z" alt="image"></img>

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
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/33797.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvMzM3OTcuanBnIiwiaWF0IjoxNjk2Mjk3MTg5LCJleHAiOjE4NTM5NzcxODl9.im8-aQ3soDne-0EaA9pCziAXQqAPb3NmBUSYS5VActg&t=2023-10-03T01%3A39%3A50.066Z" alt="image"></img>

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

### 49. Valid Palindrome

<details>
<summary><b>49. 	
Valid Palindrome</b></summary>
<h1>Problem Statement</h1>
<p>

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function isPalindrome(s: string): boolean {
  if (s.length === 0) {
    return true;
  }

  let head: number = 0;
  let tail: number = s.length - 1;
  let cHead: string;
  let cTail: string;

  while (head <= tail) {
    cHead = s.charAt(head);
    cTail = s.charAt(tail);

    if (!isLetterOrDigit(cHead)) {
      head++;
    } else if (!isLetterOrDigit(cTail)) {
      tail--;
    } else {
      if (cHead.toLowerCase() !== cTail.toLowerCase()) {
        return false;
      }
      head++;
      tail--;
    }
  }

  return true;
}

function isLetterOrDigit(char: string): boolean {
  return /^[0-9a-zA-Z]+$/.test(char);
}
```

</details>

</details>

### 50. Valid Anagram

<details>
<summary><b>50. 	
 Valid Anagram</b></summary>
<h1>Problem Statement</h1>
<p>

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

```
Input: s = "anagram", t = "nagaram"
Output: true
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const alphabet: number[] = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    alphabet[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    alphabet[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (const count of alphabet) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}
```

</details>

</details>

### 51. Longest Palindrome

<details>
<summary><b>51. 	
Longest Palindrome</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

```
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function longestPalindrome(s: string): number {
  if (s === null || s.length === 0) {
    return 0;
  }

  const charSet: Set<string> = new Set();
  let count: number = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (charSet.has(char)) {
      charSet.delete(char);
      count++;
    } else {
      charSet.add(char);
    }
  }

  if (charSet.size !== 0) {
    return count * 2 + 1;
  }

  return count * 2;
}
```

</details>

</details>

### 52. Longest Common Prefix

<details>
<summary><b>52. 	
Longest Common Prefix</b></summary>
<h1>Problem Statement</h1>
<p>

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  strs.sort();
  const s1: string = strs[0];
  const s2: string = strs[strs.length - 1];
  let idx: number = 0;

  while (idx < s1.length && idx < s2.length) {
    if (s1.charAt(idx) === s2.charAt(idx)) {
      idx++;
    } else {
      break;
    }
  }

  return s1.substring(0, idx);
}
```

</details>

</details>

## Medium

### 53. Longest Substring Without Repeating Characters

<details>
<summary><b>53. 	
Longest Substring Without Repeating Characters</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s, find the length of the longest substring without repeating characters.

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0;
  }

  const map: Map<string, number> = new Map();
  let max: number = 0;

  for (let i = 0, j = 0; i < s.length; ++i) {
    if (map.has(s.charAt(i))) {
      j = Math.max(j, map.get(s.charAt(i))! + 1);
    }
    map.set(s.charAt(i), i);
    max = Math.max(max, i - j + 1);
  }

  return max;
}
```

</details>

</details>

### 54. String to Integer (atoi)

<details>
<summary><b>54. 	
String to Integer (atoi)</b></summary>
<h1>Problem Statement</h1>
<p>

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

```
Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function myAtoi(s: string): number {
  let i: number = 0;
  let num: number = 0;
  let sign: number = 1;
  const max: number = 2 ** 31 - 1;
  const min: number = 2 ** 31 * -1;

  s = s.trim();

  if (s[i] === "-" || s[i] === "+") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  while (s[i] && s[i].charCodeAt(0) - 48 >= 0 && s[i].charCodeAt(0) - 48 <= 9) {
    num = num * 10 + (s[i].charCodeAt(0) - 48);
    i++;
  }

  num = num * sign;

  return num <= min ? min : num >= max ? max : num;
}
```

</details>

</details>

### 55. Longest Palindromic Substring

<details>
<summary><b>55. 	
Longest Palindromic Substring</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s, return the longest palindromic substring in s.

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function longestPalindrome(s: string): string {
  const solution = new Solution();
  return solution.longestPalindrome(s);
}

class Solution {
  private lo: number = 0;
  private maxLen: number = 0;

  longestPalindrome(s: string): string {
    const len: number = s.length;

    if (len < 2) {
      return s;
    }

    for (let i: number = 0; i < len - 1; i++) {
      this.extendPalindrome(s, i, i); // assume odd length, try to extend Palindrome as much as possible
      this.extendPalindrome(s, i, i + 1); // assume even length
    }

    return s.substring(this.lo, this.lo + this.maxLen);
  }

  private extendPalindrome(s: string, j: number, k: number): void {
    while (j >= 0 && k < s.length && s.charAt(j) === s.charAt(k)) {
      j--;
      k++;
    }

    if (this.maxLen < k - j - 1) {
      this.lo = j + 1;
      this.maxLen = k - j - 1;
    }
  }
}
```

</details>

</details>

### 56. Find All Anagrams in a String

<details>
<summary><b>56. 	
Find All Anagrams in a String</b></summary>
<h1>Problem Statement</h1>
<p>

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

```
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function findAnagrams(s: string, p: string): number[] {
  const ans: number[] = [];
  const hash: number[] = Array(26).fill(0);
  const phash: number[] = Array(26).fill(0);
  const window: number = p.length;
  const len: number = s.length;

  if (len < window) {
    return ans;
  }

  let left: number = 0;
  let right: number = 0;

  while (right < window) {
    phash[p.charCodeAt(right) - "a".charCodeAt(0)] += 1;
    hash[s.charCodeAt(right) - "a".charCodeAt(0)] += 1;
    right++;
  }
  right -= 1;

  while (right < len) {
    if (JSON.stringify(phash) === JSON.stringify(hash)) {
      ans.push(left);
    }

    right += 1;

    if (right !== len) {
      hash[s.charCodeAt(right) - "a".charCodeAt(0)] += 1;
    }

    hash[s.charCodeAt(left) - "a".charCodeAt(0)] -= 1;
    left += 1;
  }

  return ans;
}
```

</details>

</details>

### 57. Group Anagrams

<details>
<summary><b>57. 	
Group Anagrams</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function groupAnagrams(strs: string[]): string[][] {
  if (!strs || strs.length === 0) {
    return [];
  }

  const map: Map<string, string[]> = new Map();

  for (const s of strs) {
    const ca: number[] = new Array(26).fill(0);

    for (const c of s) {
      ca[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const keyStr: string = ca.join(",");

    if (!map.has(keyStr)) {
      map.set(keyStr, []);
    }

    map.get(keyStr)!.push(s);
  }

  return Array.from(map.values());
}
```

</details>

</details>

### 58. Longest Repeating Character Replacement

<details>
<summary><b>58. 	
Longest Repeating Character Replacement</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

```
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achive this answer too.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function characterReplacement(s: string, k: number): number {
  const len = s.length;
  const count = new Array(26).fill(0);
  let start = 0;
  let maxCount = 0;
  let maxLength = 0;

  for (let end = 0; end < len; end++) {
    maxCount = Math.max(
      maxCount,
      ++count[s.charCodeAt(end) - "A".charCodeAt(0)]
    );

    while (end - start + 1 - maxCount > k) {
      count[s.charCodeAt(start) - "A".charCodeAt(0)]--;
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```

</details>

</details>

### 59. Largest Number

<details>
<summary><b>59. 	
Largest Number</b></summary>
<h1>Problem Statement</h1>
<p>

Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

```
Input: nums = [10,2]
Output: "210"
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function largestNumber(nums: number[]): string {
  if (!nums || nums.length === 0) {
    return "";
  }

  // Convert number array to string array for sorting
  const s_num: string[] = nums.map((num) => num.toString());

  // Comparator to decide which string should come first in concatenation
  const comp: (str1: string, str2: string) => number = (str1, str2) => {
    const s1: string = str1 + str2;
    const s2: string = str2 + str1;
    return s2.localeCompare(s1); // reverse order here, so we can do append() later
  };

  s_num.sort(comp);

  // An extreme edge case by lc, say you have only a bunch of 0 in your int array
  if (s_num[0].charAt(0) === "0") {
    return "0";
  }

  return s_num.join("");
}
```

</details>

</details>

## Hard

### 60. Minimum Window Substring

<details>
<summary><b>60. 	
Minimum Window Substring</b></summary>
<h1>Problem Statement</h1>
<p>

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function minWindow(s: string, t: string): string {
  const map: number[] = new Array(128).fill(0);

  for (const c of t) {
    map[c.charCodeAt(0)]++;
  }

  let counter: number = t.length;
  let begin: number = 0;
  let end: number = 0;
  let d: number = Number.MAX_SAFE_INTEGER;
  let head: number = 0;

  while (end < s.length) {
    if (map[s.charCodeAt(end++)]-- > 0) {
      counter--; // in t
    }

    while (counter === 0) {
      // valid
      if (end - begin < d) {
        d = end - (head = begin);
      }

      if (map[s.charCodeAt(begin++)]++ === 0) {
        counter++; // make it invalid
      }
    }
  }

  return d === Number.MAX_SAFE_INTEGER ? "" : s.substring(head, head + d);
}
```

</details>

</details>

### 61. Palindrome Pairs

<details>
<summary><b>61. 	
Palindrome Pairs</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a 0-indexed array of unique strings words.

A palindrome pair is a pair of integers (i, j) such that:

0 <= i, j < words.length,
i != j, and
words[i] + words[j] (the concatenation of the two strings) is a palindrome.
Return an array of all the palindrome pairs of words.

You must write an algorithm with O(sum of words[i].length) runtime complexity.

```
Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["abcddcba","dcbaabcd","slls","llssssll"]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function palindromePairs(words: string[]): number[][] {
  const res: number[][] = [];

  if (!words || words.length === 0) {
    return res;
  }

  const map: Map<string, number> = new Map();

  for (let i = 0; i < words.length; i++) {
    map.set(words[i], i);
  }

  // Special cases: "" can be combined with any palindrome string
  if (map.has("")) {
    const blankIdx: number | undefined = map.get("");
    if (blankIdx !== undefined) {
      for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
          if (i === blankIdx) continue;
          res.push([blankIdx, i]);
          res.push([i, blankIdx]);
        }
      }
    }
  }

  // Find all string and reverse string pairs
  for (let i = 0; i < words.length; i++) {
    const cur_r: string = reverseStr(words[i]);
    if (map.has(cur_r)) {
      const found: number | undefined = map.get(cur_r);
      if (found !== undefined && found !== i) {
        res.push([i, found]);
      }
    }
  }

  // Find the pair s1, s2 that
  // case1: s1[0:cut] is palindrome and s1[cut+1:] = reverse(s2) => (s2, s1)
  // case2: s1[cut+1:] is palindrome and s1[0:cut] = reverse(s2) => (s1, s2)
  for (let i = 0; i < words.length; i++) {
    const cur: string = words[i];
    for (let cut = 1; cut < cur.length; cut++) {
      if (isPalindrome(cur.substring(0, cut))) {
        const cut_r: string = reverseStr(cur.substring(cut));
        if (map.has(cut_r)) {
          const found: number | undefined = map.get(cut_r);
          if (found !== undefined && found !== i) {
            res.push([found, i]);
          }
        }
      }
      if (isPalindrome(cur.substring(cut))) {
        const cut_r: string = reverseStr(cur.substring(0, cut));
        if (map.has(cut_r)) {
          const found: number | undefined = map.get(cut_r);
          if (found !== undefined && found !== i) {
            res.push([i, found]);
          }
        }
      }
    }
  }

  return res;
}

function reverseStr(str: string): string {
  const sb: string[] = str.split("");
  return sb.reverse().join("");
}

function isPalindrome(s: string): boolean {
  let i: number = 0;
  let j: number = s.length - 1;
  while (i <= j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
```

</details>

</details>

## Binary Tree

## Easy

### 62. Invert Binary Tree

<details>
<summary><b>62. 	
Invert Binary Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree, invert the tree, and return its root.

```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const stack: TreeNode[] = [];
  stack.push(root);

  while (stack.length > 0) {
    const node: TreeNode = stack.pop()!;
    const left: TreeNode | null = node.left;
    node.left = node.right;
    node.right = left;

    if (node.left !== null) {
      stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
  }

  return root;
}
```

</details>

</details>

### 63. Balanced Binary Tree

<details>
<summary><b>63. 	
Balanced Binary Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given a binary tree, determine if it is height-balanced.

```
Input: root = [3,9,20,null,null,15,7]
Output: true
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  const solution = new Solution();
  return solution.isBalanced(root);
}

class Solution {
  isBalanced(root: TreeNode | null): boolean {
    if (root === null) {
      return true;
    }
    return this.helper(root) !== -1;
  }

  private helper(root: TreeNode | null): number {
    if (root === null) {
      return 0;
    }
    const left: number = this.helper(root.left);
    const right: number = this.helper(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return Math.max(left, right) + 1;
  }
}
```

</details>

</details>

### 64. Diameter of Binary Tree

<details>
<summary><b>64. 	
Diameter of Binary Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

```
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
  const solution = new Solution();
  return solution.diameterOfBinaryTree(root);
}

class Solution {
  private max: number = 0;

  diameterOfBinaryTree(root: TreeNode | null): number {
    this.maxDepth(root);
    return this.max;
  }

  private maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    const left: number = this.maxDepth(root.left);
    const right: number = this.maxDepth(root.right);

    this.max = Math.max(this.max, left + right);

    return Math.max(left, right) + 1;
  }
}
```

</details>

</details>

### 65. Maximum Depth of Binary Tree

<details>
<summary><b>65. 	
Maximum Depth of Binary Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```

</details>

</details>

### 66. Same Tree

<details>
<summary><b>66. 	
Same Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

```
Input: p = [1,2,3], q = [1,2,3]
Output: true

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
}
```

</details>

</details>

### 67. Symmetric Tree

<details>
<summary><b>67. 	
Symmetric Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

```
Input: root = [1,2,2,3,4,4,3]
Output: true

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  return root === null || isSymmetricHelp(root.left, root.right);
}

function isSymmetricHelp(
  left: TreeNode | null,
  right: TreeNode | null
): boolean {
  if (left === null || right === null) {
    return left === right;
  }
  if (left.val !== right.val) {
    return false;
  }
  return (
    isSymmetricHelp(left.left, right.right) &&
    isSymmetricHelp(left.right, right.left)
  );
}
```

</details>

</details>

### 68. Subtree of Another Tree

<details>
<summary><b>68. 	
 Subtree of Another Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

```
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class Solution {
  isSubtree(s: TreeNode | null, t: TreeNode | null): boolean {
    if (s === null) {
      return false;
    }
    if (this.isSame(s, t)) {
      return true;
    }
    return this.isSubtree(s.left, t) || this.isSubtree(s.right, t);
  }

  private isSame(s: TreeNode | null, t: TreeNode | null): boolean {
    if (s === null && t === null) {
      return true;
    }
    if (s === null || t === null) {
      return false;
    }

    if (s.val !== t.val) {
      return false;
    }

    return this.isSame(s.left, t.left) && this.isSame(s.right, t.right);
  }
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const solution = new Solution();
  return solution.isSubtree(root, subRoot);
}
```

</details>

</details>

## Medium

### 69. Binary Tree Level Order Traversal

<details>
<summary><b>69. 	
Binary Tree Level Order Traversal</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  const queue: TreeNode[] = [];
  const wrapList: number[][] = [];

  if (root === null) {
    return wrapList;
  }

  queue.push(root);
  while (queue.length > 0) {
    const levelNum: number = queue.length;
    const subList: number[] = [];

    for (let i = 0; i < levelNum; i++) {
      if (queue[0].left !== null) {
        queue.push(queue[0].left);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].right);
      }
      subList.push(queue.shift()!.val);
    }

    wrapList.push(subList);
  }

  return wrapList;
}
```

</details>

</details>

### 70. Lowest Common Ancestor of a Binary Tree

<details>
<summary><b>70. 	
Lowest Common Ancestor of a Binary Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  if (root === null || root === p || root === q) {
    return root;
  }

  const left: TreeNode | null = lowestCommonAncestor(root.left, p, q);
  const right: TreeNode | null = lowestCommonAncestor(root.right, p, q);

  return left === null ? right : right === null ? left : root;
}
```

</details>

</details>

### 71. Binary Tree Right Side View

<details>
<summary><b>71. 	
 Binary Tree Right Side View</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

```
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const queue: TreeNode[] = [];
  queue.push(root);
  const result: number[] = [];

  while (queue.length > 0) {
    const size: number = queue.length;

    for (let i = 0; i < size; i++) {
      const current: TreeNode | null = queue.shift();

      if (i === size - 1) {
        result.push(current!.val);
      }

      if (current!.left !== null) {
        queue.push(current!.left);
      }
      if (current!.right !== null) {
        queue.push(current!.right);
      }
    }
  }

  return result;
}
```

</details>

</details>

### 72. Construct Binary Tree from Preorder and Inorder Traversal

<details>
<summary><b>72. 	
Construct Binary Tree from Preorder and Inorder Traversal</b></summary>
<h1>Problem Statement</h1>
<p>

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return helper(0, 0, inorder.length - 1, preorder, inorder);
}

function helper(
  preStart: number,
  inStart: number,
  inEnd: number,
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preStart > preorder.length - 1 || inStart > inEnd) {
    return null;
  }

  const rootValue: number = preorder[preStart];
  const root: TreeNode = new TreeNode(rootValue);

  let inIndex: number = 0; // Index of the current root in inorder

  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === rootValue) {
      inIndex = i;
      break;
    }
  }

  root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder);
  root.right = helper(
    preStart + inIndex - inStart + 1,
    inIndex + 1,
    inEnd,
    preorder,
    inorder
  );

  return root;
}
```

</details>

</details>

### 73. Path Sum II

<details>
<summary><b>73. 	
Path Sum II</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, sum: number): number[][] {
  const res: number[][] = [];
  pathSumHelper(root, sum, [], res);
  return res;
}

function pathSumHelper(
  root: TreeNode | null,
  sum: number,
  sol: number[],
  res: number[][]
): void {
  if (root === null) {
    return;
  }

  sol.push(root.val);

  if (root.left === null && root.right === null && sum === root.val) {
    res.push([...sol]);
  } else {
    pathSumHelper(root.left, sum - root.val, sol, res);
    pathSumHelper(root.right, sum - root.val, sol, res);
  }

  sol.pop();
}
```

</details>

</details>

### 74. Maximum Width of Binary Tree

<details>
<summary><b>74. 	
Maximum Width of Binary Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree, return the maximum width of the given tree.

The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

It is guaranteed that the answer will in the range of a 32-bit signed integer.

```
Input: root = [1,3,2,5,3,null,9]
Output: 4
Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function widthOfBinaryTree(root: TreeNode | null): number {
  let max: number = 0;

  const queue: [TreeNode, number][] = [[root, 1]];

  while (queue.length > 0) {
    let queueLength: number = queue.length;

    let firstNonNull: number = 0;
    let lastNonNull: number = 0;

    for (let i = 0; i < queueLength; i++) {
      const currNode = queue.shift();
      if (i === 0) firstNonNull = currNode[1];
      if (i === queueLength - 1) lastNonNull = currNode[1];

      if (currNode[0].left !== null) {
        queue.push([currNode[0].left, currNode[1] * 2 - firstNonNull]);
      }

      if (currNode[0].right !== null) {
        queue.push([currNode[0].right, currNode[1] * 2 + 1 - firstNonNull]);
      }
    }

    max = Math.max(max, lastNonNull - firstNonNull + 1);
  }

  return max;
}
```

</details>

</details>

### 75. Binary Tree Zigzag Level Order Traversal

<details>
<summary><b>75. 	
Binary Tree Zigzag Level Order Traversal</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) return res;

  const queue: TreeNode[] = [root];
  let order = true;
  let size = 1;

  while (queue.length > 0) {
    const tmp: number[] = [];
    for (let i = 0; i < size; ++i) {
      const node = queue.shift()!;
      if (order) {
        tmp.push(node.val);
      } else {
        tmp.unshift(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(tmp);
    size = queue.length;
    order = !order;
  }
  return res;
}
```

</details>

</details>

### 76. Path Sum III

<details>
<summary><b>76. 	
 Path Sum III</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

```
Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, sum: number): number {
  const preSum: Map<number, number> = new Map();
  preSum.set(0, 1);
  return helper(root, 0, sum, preSum);
}

function helper(
  root: TreeNode | null,
  currSum: number,
  target: number,
  preSum: Map<number, number>
): number {
  if (!root) {
    return 0;
  }

  currSum += root.val;
  let res = preSum.get(currSum - target) || 0;
  preSum.set(currSum, (preSum.get(currSum) || 0) + 1);

  res +=
    helper(root.left, currSum, target, preSum) +
    helper(root.right, currSum, target, preSum);
  preSum.set(currSum, (preSum.get(currSum) || 0) - 1);

  return res;
}
```

</details>

</details>

### 77. All Nodes Distance K in Binary Tree

<details>
<summary><b>77. 	
 All Nodes Distance K in Binary Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  const solution = new Solution();
  return solution.distanceK(root, target, k);
}

class Solution {
  private map: Map<TreeNode, number> = new Map();

  public distanceK(
    root: TreeNode | null,
    target: TreeNode | null,
    K: number
  ): number[] {
    const res: number[] = [];
    this.find(root, target);
    this.dfs(root, target, K, this.map.get(root), res);
    return res;
  }

  // Find target node first and store the distance in that path that we could use it later directly
  private find(root: TreeNode | null, target: TreeNode | null): number {
    if (!root) return -1;
    if (root === target) {
      this.map.set(root, 0);
      return 0;
    }
    const left = this.find(root.left, target);
    if (left >= 0) {
      this.map.set(root, left + 1);
      return left + 1;
    }
    const right = this.find(root.right, target);
    if (right >= 0) {
      this.map.set(root, right + 1);
      return right + 1;
    }
    return -1;
  }

  private dfs(
    root: TreeNode | null,
    target: TreeNode | null,
    K: number,
    length: number,
    res: number[]
  ): void {
    if (!root) return;
    if (this.map.has(root)) length = this.map.get(root)!;
    if (length === K) res.push(root.val);
    this.dfs(root.left, target, K, length + 1, res);
    this.dfs(root.right, target, K, length + 1, res);
  }
}
```

</details>

</details>

## Hard

### 78.Serialize and Deserialize Binary Tree

<details>
<summary><b>78. 	
Serialize and Deserialize Binary Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

```
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const codec = new Codec();
  return codec.serialize(root);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const codec = new Codec();
  return codec.deserialize(data);
}

class Codec {
  private static spliter: string = ",";
  private static NN: string = "X";

  // Encodes a tree to a single string.
  public serialize(root: TreeNode | null): string {
    const sb: string[] = [];
    this.buildString(root, sb);
    return sb.join("");
  }

  private buildString(node: TreeNode | null, sb: string[]): void {
    if (!node) {
      sb.push(Codec.NN);
      sb.push(Codec.spliter);
    } else {
      sb.push(node.val.toString());
      sb.push(Codec.spliter);
      this.buildString(node.left, sb);
      this.buildString(node.right, sb);
    }
  }

  // Decodes your encoded data to a tree.
  public deserialize(data: string): TreeNode | null {
    const nodes: string[] = data.split(Codec.spliter);
    const queue: string[] = nodes.slice();
    return this.buildTree(queue);
  }

  private buildTree(nodes: string[]): TreeNode | null {
    const val: string = nodes.shift()!;
    if (val === Codec.NN) return null;
    else {
      const node: TreeNode = new TreeNode(Number(val));
      node.left = this.buildTree(nodes);
      node.right = this.buildTree(nodes);
      return node;
    }
  }
}
```

</details>

</details>

### 79. Binary Tree Maximum Path Sum

<details>
<summary><b>79. 	
Binary Tree Maximum Path Sum</b></summary>
<h1>Problem Statement</h1>
<p>

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

```
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
  let res = -Infinity;

  const traverse = (node: TreeNode | null): number => {
    if (!node) return 0;
    const left = Math.max(0, traverse(node.left));
    const right = Math.max(0, traverse(node.right));
    res = Math.max(res, node.val + left + right);
    return node.val + Math.max(left, right);
  };

  traverse(root);
  return res;
}
```

</details>

</details>

## Binary Search

## Easy

### 80. Binary Search

<details>
<summary><b>80. 	
Binary Search</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function search(nums: number[], target: number): number {
  let lo: number = 0;
  let hi: number = nums.length - 1;

  while (lo < hi) {
    let mid: number = lo + Math.floor((hi - lo + 1) / 2);

    if (target < nums[mid]) {
      hi = mid - 1;
    } else {
      lo = mid;
    }
  }

  return nums[lo] === target ? lo : -1;
}
```

</details>

</details>

### 81. First Bad Version

<details>
<summary><b>81. 	
First Bad Version</b></summary>
<h1>Problem Statement</h1>
<p>

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let start: number = 1;
    let end: number = n;

    while (start < end) {
      let mid: number = start + Math.floor((end - start) / 2);

      if (!isBadVersion(mid)) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    return start;
  };
};
```

</details>

</details>

## Medium

### 82. Search in Rotated Sorted Array

<details>
<summary><b>82. 	
Search in Rotated Sorted Array</b></summary>
<h1>Problem Statement</h1>
<p>

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function search(nums: number[], target: number): number {
  let lo: number = 0;
  let hi: number = nums.length - 1;

  // Find the index of the smallest value using binary search.
  // The loop will terminate since mid < hi, and lo or hi will shrink by at least 1.
  // Proof by contradiction that mid < hi: if mid == hi, then lo == hi, and the loop would have been terminated.
  while (lo < hi) {
    let mid: number = Math.floor((lo + hi) / 2);
    if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  // lo == hi is the index of the smallest value and also the number of places rotated.
  const rot: number = lo;
  lo = 0;
  hi = nums.length - 1;

  // The usual binary search and accounting for rotation.
  while (lo <= hi) {
    let mid: number = Math.floor((lo + hi) / 2);
    let realMid: number = (mid + rot) % nums.length;

    if (nums[realMid] === target) {
      return realMid;
    }

    if (nums[realMid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
}
```

</details>

</details>

### 83. Time Based Key-Value Store

<details>
<summary><b>83. 	
Time Based Key-Value Store</b></summary>
<h1>Problem Statement</h1>
<p>

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

```
Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]

Explanation
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class TimeMap {
  private m: Record<string, Array<[number, string]>>;

  constructor() {
    this.m = {};
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.m[key]) {
      this.m[key] = [];
    }
    this.m[key].push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    if (!this.m[key]) {
      return "";
    }

    let start = 0;
    let end = this.m[key].length;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (this.m[key][mid][0] > timestamp) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }

    return start > 0 && start <= this.m[key].length
      ? this.m[key][start - 1][1]
      : "";
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
```

</details>

</details>

### 84. Search a 2D Matrix

<details>
<summary><b>84. 	
Search a 2D Matrix</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m \* n)) time complexity.

```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function searchMatrix(matrix: number[][], target: number): boolean {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    const cur = matrix[row][col];
    if (cur === target) {
      return true;
    } else if (target > cur) {
      row++;
    } else {
      col--;
    }
  }

  return false;
}
```

</details>

</details>

### 85. Find Minimum in Rotated Sorted Array

<details>
<summary><b>85. 	
Find Minimum in Rotated Sorted Array</b></summary>
<h1>Problem Statement</h1>
<p>

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

```
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function findMin(num: number[]): number {
  let start: number = 0;
  let end: number = num.length - 1;

  while (start < end) {
    if (num[start] < num[end]) {
      return num[start];
    }

    let mid: number = Math.floor((start + end) / 2);

    if (num[mid] >= num[start]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return num[start];
}
```

</details>

</details>

## Hard

### 86. Maximum Profit in Job Scheduling

<details>
<summary><b>86. 	
Maximum Profit in Job Scheduling</b></summary>
<h1>Problem Statement</h1>
<p>

We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts at time X.

```
Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job.
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  const solution = new Solution();
  return solution.jobScheduling(startTime, endTime, profit);
}

class Solution {
  private nums: {
    st: number;
    en: number;
    profit: number;
  }[];
  private dp: number[];

  constructor() {
    this.nums = [];
    this.dp = [];
  }

  private getLowerBound(idx: number): number {
    let low = idx + 1;
    let high = this.nums.length - 1;
    let ans = -1;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (this.nums[mid].st >= this.nums[idx].en) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }

  private getMaxProfit(idx: number = 0): number {
    if (idx >= this.nums.length) return 0;
    if (this.dp[idx] !== -1) return this.dp[idx];

    // Get the index of the next element whose start time >= current index end time.
    const nextElementIdx = this.getLowerBound(idx);

    // Try to include the current element and get the profit of remaining elements.
    const include =
      this.nums[idx].profit +
      (nextElementIdx === -1 ? 0 : this.getMaxProfit(nextElementIdx));

    // Try to exclude the current element and get the profit of remaining elements.
    const exclude = this.getMaxProfit(idx + 1);

    // Return the maximum profit from both possibilities.
    return (this.dp[idx] = Math.max(exclude, include));
  }

  public jobScheduling(
    startTime: number[],
    endTime: number[],
    profit: number[]
  ): number {
    const n = startTime.length;
    this.nums = new Array(n);
    this.dp = new Array(n + 1).fill(-1);

    for (let i = 0; i < n; i++) {
      this.nums[i] = {
        st: startTime[i],
        en: endTime[i],
        profit: profit[i],
      };
    }

    // Sort the elements according to start time.
    this.nums.sort((a, b) => a.st - b.st);

    // Function to get the maximum Profit.
    return this.getMaxProfit();
  }
}
```

</details>

</details>

### 87. Median of Two Sorted Arrays

<details>
<summary><b>87. 	
Median of Two Sorted Arrays</b></summary>
<h1>Problem Statement</h1>
<p>

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const N1 = nums1.length;
  const N2 = nums2.length;
  if (N1 < N2) return findMedianSortedArrays(nums2, nums1); // Make sure nums2 is the shorter one.

  let lo = 0;
  let hi = N2 * 2;
  while (lo <= hi) {
    const mid2 = Math.floor((lo + hi) / 2); // Try Cut 2
    const mid1 = N1 + N2 - mid2; // Calculate Cut 1 accordingly

    const L1 =
      mid1 === 0 ? Number.MIN_SAFE_INTEGER : nums1[Math.floor((mid1 - 1) / 2)]; // Get L1, R1, L2, R2 respectively
    const L2 =
      mid2 === 0 ? Number.MIN_SAFE_INTEGER : nums2[Math.floor((mid2 - 1) / 2)];
    const R1 =
      mid1 === N1 * 2 ? Number.MAX_SAFE_INTEGER : nums1[Math.floor(mid1 / 2)];
    const R2 =
      mid2 === N2 * 2 ? Number.MAX_SAFE_INTEGER : nums2[Math.floor(mid2 / 2)];

    if (L1 > R2) {
      lo = mid2 + 1; // nums1's lower half is too big; need to move mid1 right (mid2 left)
    } else if (L2 > R1) {
      hi = mid2 - 1; // nums2's lower half too big; need to move mid2 left.
    } else {
      return (Math.max(L1, L2) + Math.min(R1, R2)) / 2; // Otherwise, that's the right cut.
    }
  }
  return -1;
}
```

</details>

</details>

## Graph

## Easy

### 88. Flood Fill

<details>
<summary><b>88. 	
Flood Fill</b></summary>
<h1>Problem Statement</h1>
<p>

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

```
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const solution = new Solution();
  return solution.floodFill(image, sr, sc, color);
}

class Solution {
  floodFill(
    image: number[][],
    sr: number,
    sc: number,
    newColor: number
  ): number[][] {
    if (image[sr][sc] === newColor) return image;
    this.fill(image, sr, sc, image[sr][sc], newColor);
    return image;
  }

  private fill(
    image: number[][],
    sr: number,
    sc: number,
    color: number,
    newColor: number
  ): void {
    if (
      sr < 0 ||
      sr >= image.length ||
      sc < 0 ||
      sc >= image[0].length ||
      image[sr][sc] !== color
    )
      return;
    image[sr][sc] = newColor;
    this.fill(image, sr + 1, sc, color, newColor);
    this.fill(image, sr - 1, sc, color, newColor);
    this.fill(image, sr, sc + 1, color, newColor);
    this.fill(image, sr, sc - 1, color, newColor);
  }
}
```

</details>

</details>

## Medium

### 89. 01 Matrix

<details>
<summary><b>89. 	
01 Matrix</b></summary>
<h1>Problem Statement</h1>
<p>

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

```
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function updateMatrix(matrix: number[][]): number[][] {
  const m: number = matrix.length;
  const n: number = matrix[0].length;

  const queue: number[][] = [];
  const dirs: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // Initialize the queue and set non-zero values in the matrix to Integer.MAX_VALUE
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j]);
      } else {
        matrix[i][j] = Number.MAX_VALUE;
      }
    }
  }

  while (queue.length > 0) {
    const cell: number[] = queue.shift()!;
    for (const d of dirs) {
      const r: number = cell[0] + d[0];
      const c: number = cell[1] + d[1];
      if (
        r < 0 ||
        r >= m ||
        c < 0 ||
        c >= n ||
        matrix[r][c] <= matrix[cell[0]][cell[1]] + 1
      )
        continue;
      queue.push([r, c]);
      matrix[r][c] = matrix[cell[0]][cell[1]] + 1;
    }
  }

  return matrix;
}
```

</details>

</details>

### 90. Clone Graph

<details>
<summary><b>90. 	
Clone Graph</b></summary>
<h1>Problem Statement</h1>
<p>

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

```
class Node {
public int val;
public List<Node> neighbors;
}
```

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

```
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function dfs(node: Node, copy: Node, visited: (Node | null)[]): void {
  visited[copy.val] = copy;

  for (const n of node.neighbors) {
    if (visited[n.val] === null) {
      const newNode = new Node(n.val);
      copy.neighbors.push(newNode);
      dfs(n, newNode, visited);
    } else {
      copy.neighbors.push(visited[n.val]!);
    }
  }
}

function cloneGraph(node: Node | null): Node | null {
  if (node === null) return null;
  const copy = new Node(node.val);
  const visited: (Node | null)[] = new Array(101).fill(null);
  dfs(node, copy, visited);
  return copy;
}
```

</details>

</details>

### 91. Course Schedule

<details>
<summary><b>91. 	
Course Schedule</b></summary>
<h1>Problem Statement</h1>
<p>

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const matrix: number[][] = new Array(numCourses)
    .fill(0)
    .map(() => new Array(numCourses).fill(0)); // i -> j
  const indegree: number[] = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    const ready: number = prerequisites[i][0];
    const pre: number = prerequisites[i][1];
    if (matrix[pre][ready] === 0) {
      indegree[ready]++; // duplicate case
    }
    matrix[pre][ready] = 1;
  }

  let count: number = 0;
  const queue: number[] = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const course: number = queue.shift()!;
    count++;
    for (let i = 0; i < numCourses; i++) {
      if (matrix[course][i] !== 0) {
        if (--indegree[i] === 0) {
          queue.push(i);
        }
      }
    }
  }

  return count === numCourses;
}
```

</details>

</details>

### 92. Number of Islands

<details>
<summary><b>92. 	
Number of Islands</b></summary>
<h1>Problem Statement</h1>
<p>

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function numIslands(grid: string[][]): number {
  const solution = new Solution();
  return solution.numIslands(grid);
}

class Solution {
  private n: number;
  private m: number;

  numIslands(grid: string[][]): number {
    let count = 0;
    this.n = grid.length;
    if (this.n === 0) return 0;
    this.m = grid[0].length;
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.m; j++) {
        if (grid[i][j] === "1") {
          this.DFSMarking(grid, i, j);
          ++count;
        }
      }
    }
    return count;
  }

  private DFSMarking(grid: string[][], i: number, j: number): void {
    if (i < 0 || j < 0 || i >= this.n || j >= this.m || grid[i][j] !== "1")
      return;
    grid[i][j] = "0";
    this.DFSMarking(grid, i + 1, j);
    this.DFSMarking(grid, i - 1, j);
    this.DFSMarking(grid, i, j + 1);
    this.DFSMarking(grid, i, j - 1);
  }
}
```

</details>

</details>

### 93. Rotting Oranges

<details>
<summary><b>93. 	
Rotting Oranges</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

```
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function orangesRotting(grid: number[][]): number {
  if (grid === null || grid.length === 0) return 0;
  const rows: number = grid.length;
  const cols: number = grid[0].length;
  const queue: number[][] = [];
  let countFresh: number = 0;

  // Put the position of all rotten oranges in the queue
  // Count the number of fresh oranges
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        countFresh++;
      }
    }
  }

  // If count of fresh oranges is zero, return 0
  if (countFresh === 0) return 0;
  let count: number = 0;
  const dirs: number[][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // BFS starting from initially rotten oranges
  while (queue.length > 0) {
    count++;
    const size: number = queue.length;
    for (let i = 0; i < size; i++) {
      const point: number[] = queue.shift()!;
      for (const dir of dirs) {
        const x: number = point[0] + dir[0];
        const y: number = point[1] + dir[1];
        // If x or y is out of bound
        // or the orange at (x , y) is already rotten
        // or the cell at (x , y) is empty
        // we do nothing
        if (
          x < 0 ||
          y < 0 ||
          x >= rows ||
          y >= cols ||
          grid[x][y] === 0 ||
          grid[x][y] === 2
        )
          continue;
        // Mark the orange at (x , y) as rotten
        grid[x][y] = 2;
        // Put the new rotten orange at (x , y) in the queue
        queue.push([x, y]);
        // Decrease the count of fresh oranges by 1
        countFresh--;
      }
    }
  }

  return countFresh === 0 ? count - 1 : -1;
}
```

</details>

</details>

### 94. Accounts Merge

<details>
<summary><b>94. 	
Accounts Merge</b></summary>
<h1>Problem Statement</h1>
<p>

Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

```
Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Explanation:
The first and second John's are the same person as they have the common email "johnsmith@mail.com".
The third John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'],
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function accountsMerge(acts: string[][]): string[][] {
  const owner: Map<string, string> = new Map();
  const parents: Map<string, string> = new Map();
  const unions: Map<string, Set<string>> = new Map();

  for (const a of acts) {
    for (let i = 1; i < a.length; i++) {
      parents.set(a[i], a[i]);
      owner.set(a[i], a[0]);
    }
  }

  function find(s: string, p: Map<string, string>): string {
    return p.get(s) === s ? s : find(p.get(s)!, p);
  }

  for (const a of acts) {
    const p = find(a[1], parents);
    for (let i = 2; i < a.length; i++) {
      parents.set(find(a[i], parents), p);
    }
  }

  for (const a of acts) {
    const p = find(a[1], parents);
    if (!unions.has(p)) unions.set(p, new Set());
    for (let i = 1; i < a.length; i++) {
      unions.get(p)!.add(a[i]);
    }
  }

  const res: string[][] = [];
  for (const p of unions.keys()) {
    const emails = Array.from(unions.get(p)!);
    emails.sort(); // Sort the emails alphabetically
    emails.unshift(owner.get(p)!);
    res.push(emails);
  }

  return res;
}
```

</details>

</details>

### 95. Word Search

<details>
<summary><b>95. 	
Word Search</b></summary>
<h1>Problem Statement</h1>
<p>

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function exist(board: string[][], word: string): boolean {
  const w: string[] = word.split("");
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (existHelper(board, y, x, w, 0)) return true;
    }
  }
  return false;
}

function existHelper(
  board: string[][],
  y: number,
  x: number,
  word: string[],
  i: number
): boolean {
  if (i === word.length) return true;
  if (y < 0 || x < 0 || y === board.length || x === board[y].length)
    return false;
  if (board[y][x] !== word[i]) return false;
  board[y][x] = String.fromCharCode(board[y][x].charCodeAt(0) ^ 256); // Toggle the character

  const exist =
    existHelper(board, y, x + 1, word, i + 1) ||
    existHelper(board, y, x - 1, word, i + 1) ||
    existHelper(board, y + 1, x, word, i + 1) ||
    existHelper(board, y - 1, x, word, i + 1);

  board[y][x] = String.fromCharCode(board[y][x].charCodeAt(0) ^ 256); // Toggle it back
  return exist;
}
```

</details>

</details>

### 96. Minimum Height Trees

<details>
<summary><b>96. 	
Minimum Height Trees</b></summary>
<h1>Problem Statement</h1>
<p>

A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h)) are called minimum height trees (MHTs).

Return a list of all MHTs' root labels. You can return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

```
Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) return [0];

  const adj: Set<number>[] = new Array(n)
    .fill(null)
    .map(() => new Set<number>());

  for (const edge of edges) {
    adj[edge[0]].add(edge[1]);
    adj[edge[1]].add(edge[0]);
  }

  const leaves: number[] = [];

  for (let i = 0; i < n; ++i) {
    if (adj[i].size === 1) leaves.push(i);
  }

  while (n > 2) {
    n -= leaves.length;
    const newLeaves: number[] = [];

    for (const i of leaves) {
      const j = adj[i].values().next().value;
      adj[j].delete(i);

      if (adj[j].size === 1) newLeaves.push(j);
    }

    leaves.length = 0;
    for (const leaf of newLeaves) {
      leaves.push(leaf);
    }
  }

  return leaves;
}
```

</details>

</details>

### 97. Pacific Atlantic Water Flow

<details>
<summary><b>97. 	
Pacific Atlantic Water Flow</b></summary>
<h1>Problem Statement</h1>
<p>

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

```
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function pacificAtlantic(heights: number[][]): number[][] {
  const solution = new Solution();
  return solution.pacificAtlantic(heights);
}

class Solution {
  private dir: number[][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  pacificAtlantic(matrix: number[][]): number[][] {
    const res: number[][] = [];
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return res;
    }
    const n: number = matrix.length;
    const m: number = matrix[0].length;

    // One visited map for each ocean
    const pacific: boolean[][] = new Array(n)
      .fill(null)
      .map(() => new Array(m).fill(false));
    const atlantic: boolean[][] = new Array(n)
      .fill(null)
      .map(() => new Array(m).fill(false));
    const pQueue: number[][] = [];
    const aQueue: number[][] = [];

    for (let i = 0; i < n; i++) {
      // Vertical border
      pQueue.push([i, 0]);
      aQueue.push([i, m - 1]);
      pacific[i][0] = true;
      atlantic[i][m - 1] = true;
    }

    for (let i = 0; i < m; i++) {
      // Horizontal border
      pQueue.push([0, i]);
      aQueue.push([n - 1, i]);
      pacific[0][i] = true;
      atlantic[n - 1][i] = true;
    }

    this.bfs(matrix, pQueue, pacific);
    this.bfs(matrix, aQueue, atlantic);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (pacific[i][j] && atlantic[i][j]) {
          res.push([i, j]);
        }
      }
    }

    return res;
  }

  private bfs(
    matrix: number[][],
    queue: number[][],
    visited: boolean[][]
  ): void {
    const n: number = matrix.length;
    const m: number = matrix[0].length;

    while (queue.length > 0) {
      const cur: number[] = queue.shift()!;
      for (const d of this.dir) {
        const x: number = cur[0] + d[0];
        const y: number = cur[1] + d[1];
        if (
          x < 0 ||
          x >= n ||
          y < 0 ||
          y >= m ||
          visited[x][y] ||
          matrix[x][y] < matrix[cur[0]][cur[1]]
        ) {
          continue;
        }
        visited[x][y] = true;
        queue.push([x, y]);
      }
    }
  }
}
```

</details>

</details>

### 98. Course Schedule II

<details>
<summary><b>98. 	
Course Schedule II</b></summary>
<h1>Problem Statement</h1>
<p>

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  if (numCourses === 0) return [];

  const indegree: number[] = new Array(numCourses).fill(0);
  const order: number[] = new Array(numCourses).fill(0);
  let index = 0;

  for (let i = 0; i < prerequisites.length; i++) {
    indegree[prerequisites[i][0]]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      order[index++] = i;
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const prerequisite: number = queue.shift()!;
    for (let i = 0; i < prerequisites.length; i++) {
      if (prerequisites[i][1] === prerequisite) {
        indegree[prerequisites[i][0]]--;
        if (indegree[prerequisites[i][0]] === 0) {
          order[index++] = prerequisites[i][0];
          queue.push(prerequisites[i][0]);
        }
      }
    }
  }

  return index === numCourses ? order : [];
}
```

</details>

</details>

### 99. Cheapest Flights Within K Stops

<details>
<summary><b>99. 	
Cheapest Flights Within K Stops</b></summary>
<h1>Problem Statement</h1>
<p>

There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

```
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  K: number
): number {
  const cost: number[] = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  cost[src] = 0;

  for (let i = 0; i <= K; i++) {
    const temp: number[] = [...cost];

    for (const f of flights) {
      const curr: number = f[0];
      const next: number = f[1];
      const price: number = f[2];

      if (cost[curr] === Number.MAX_SAFE_INTEGER) {
        continue;
      }

      temp[next] = Math.min(temp[next], cost[curr] + price);
    }

    cost.splice(0, n, ...temp);
  }

  return cost[dst] === Number.MAX_SAFE_INTEGER ? -1 : cost[dst];
}
```

</details>

</details>

## Hard

### 100. Word Ladder

<details>
<summary><b>100. 	
Word Ladder</b></summary>
<h1>Problem Statement</h1>
<p>

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const wordSet: Set<string> = new Set(wordList);

  if (!wordSet.has(endWord)) {
    return 0; // The endWord is not in the wordList, so no transformation sequence is possible.
  }

  const visited: Set<string> = new Set();
  visited.add(beginWord);

  const queue: string[] = [beginWord];
  let level: number = 1;

  while (queue.length > 0) {
    const levelSize: number = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentWord: string = queue.shift()!;

      for (let j = 0; j < currentWord.length; j++) {
        for (let k = 97; k <= 122; k++) {
          const newChar: string = String.fromCharCode(k);
          const newWord: string =
            currentWord.slice(0, j) + newChar + currentWord.slice(j + 1);

          if (newWord === endWord) {
            return level + 1; // Found the endWord, return the transformation length.
          }

          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push(newWord);
          }
        }
      }
    }

    level++;
  }

  return 0; // No transformation sequence found.
}
```

</details>

</details>

### 101. Longest Increasing Path in a Matrix

<details>
<summary><b>101. 	
Longest Increasing Path in a Matrix</b></summary>
<h1>Problem Statement</h1>
<p>

Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

```
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
const dirs: number[][] = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function longestIncreasingPath(matrix: number[][]): number {
  if (matrix.length === 0) return 0;
  const m: number = matrix.length;
  const n: number = matrix[0].length;
  const cache: number[][] = new Array(m)
    .fill(null)
    .map(() => new Array(n).fill(0));
  let max: number = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const len: number = dfs(matrix, i, j, m, n, cache);
      max = Math.max(max, len);
    }
  }

  return max;
}

function dfs(
  matrix: number[][],
  i: number,
  j: number,
  m: number,
  n: number,
  cache: number[][]
): number {
  if (cache[i][j] !== 0) return cache[i][j];
  let max: number = 1;

  for (const dir of dirs) {
    const x: number = i + dir[0];
    const y: number = j + dir[1];

    if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j])
      continue;

    const len: number = 1 + dfs(matrix, x, y, m, n, cache);
    max = Math.max(max, len);
  }

  cache[i][j] = max;
  return max;
}
```

</details>

</details>

### 102. Word Search II

<details>
<summary><b>102. 	
Word Search II</b></summary>
<h1>Problem Statement</h1>
<p>

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

```
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class TrieNode {
  next: TrieNode[] = Array(26);
  word: string | null = null;
}

function buildTrie(words: string[]): TrieNode {
  const root: TrieNode = new TrieNode();
  for (const word of words) {
    let p: TrieNode = root;
    for (const c of word) {
      const i: number = c.charCodeAt(0) - "a".charCodeAt(0);
      if (!p.next[i]) {
        p.next[i] = new TrieNode();
      }
      p = p.next[i];
    }
    p.word = word;
  }
  return root;
}

function findWords(board: string[][], words: string[]): string[] {
  const res: string[] = [];
  const root: TrieNode = buildTrie(words);
  const m: number = board.length;
  const n: number = board[0].length;

  function dfs(i: number, j: number, p: TrieNode) {
    const c: string = board[i][j];
    if (c === "#" || !p.next[c.charCodeAt(0) - "a".charCodeAt(0)]) return;
    p = p.next[c.charCodeAt(0) - "a".charCodeAt(0)];
    if (p.word !== null) {
      res.push(p.word);
      p.word = null;
    }

    board[i][j] = "#";
    if (i > 0) dfs(i - 1, j, p);
    if (j > 0) dfs(i, j - 1, p);
    if (i < m - 1) dfs(i + 1, j, p);
    if (j < n - 1) dfs(i, j + 1, p);
    board[i][j] = c;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, root);
    }
  }

  return res;
}
```

</details>

</details>

### 103. Bus Routes

<details>
<summary><b>103. 	
Bus Routes</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.

For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.

Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

```
Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
Output: 2
Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function numBusesToDestination(
  routes: number[][],
  S: number,
  T: number
): number {
  const visited: Set<number> = new Set();
  const queue: number[] = [];
  const map: Map<number, number[]> = new Map();
  let ret: number = 0;

  if (S === T) return 0;

  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      const buses: number[] = map.get(routes[i][j]) || [];
      buses.push(i);
      map.set(routes[i][j], buses);
    }
  }

  queue.push(S);

  while (queue.length > 0) {
    const len: number = queue.length;
    ret++;

    for (let i = 0; i < len; i++) {
      const cur: number = queue.shift()!;
      const buses: number[] | undefined = map.get(cur);

      if (buses) {
        for (const bus of buses) {
          if (visited.has(bus)) continue;
          visited.add(bus);

          for (let j = 0; j < routes[bus].length; j++) {
            if (routes[bus][j] === T) return ret;
            queue.push(routes[bus][j]);
          }
        }
      }
    }
  }

  return -1;
}
```

</details>

</details>

## Binary Search Tree

## Easy

### 104. Lowest Common Ancestor of a Binary Search Tree

<details>
<summary><b>104. 	
Lowest Common Ancestor of a Binary Search Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) {
    return null;
  }

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}
```

</details>

</details>

### 105. Convert Sorted Array to Binary Search Tree

<details>
<summary><b>105. 	
Convert Sorted Array to Binary Search Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

```
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }
  const head: TreeNode | null = helper(nums, 0, nums.length - 1);
  return head;
}

function helper(nums: number[], low: number, high: number): TreeNode | null {
  if (low > high) {
    // Done
    return null;
  }
  const mid: number = Math.floor((low + high) / 2);
  const node: TreeNode = new TreeNode(nums[mid]);
  node.left = helper(nums, low, mid - 1);
  node.right = helper(nums, mid + 1, high);
  return node;
}
```

</details>

</details>

## Medium

### 106. Validate Binary Search Tree

<details>
<summary><b>106. 	
Validate Binary Search Tree</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

```
Input: root = [2,1,3]
Output: true


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  const stack: TreeNode[] = [];
  let pre: TreeNode | null = null;

  while (root !== null || stack.length > 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop()!;
    if (pre !== null && root.val <= pre.val) {
      return false;
    }
    pre = root;
    root = root.right;
  }
  return true;
}
```

</details>

</details>

### 107. Kth Smallest Element in a BST

<details>
<summary><b>107. 	
 Kth Smallest Element in a BST</b></summary>
<h1>Problem Statement</h1>
<p>

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

```
Input: root = [3,1,4,null,2], k = 1
Output: 1


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class KthSmallestFinder {
  count: number = 0;
  result: number = Number.MIN_SAFE_INTEGER;

  kthSmallest(root: TreeNode | null, k: number): number {
    this.traverse(root, k);
    return this.result;
  }

  traverse(root: TreeNode | null, k: number): void {
    if (root === null) {
      return;
    }
    this.traverse(root.left, k);
    // Real code starts here
    this.count++;
    if (this.count === k) {
      this.result = root.val;
      return;
    }
    // Real code ends here
    this.traverse(root.right, k);
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  const solution = new KthSmallestFinder();
  return solution.kthSmallest(root, k);
}
```

</details>

</details>

## Hash Table

## Easy

### 108. Ransom Note

<details>
<summary><b>108. 	
Ransom Note</b></summary>
<h1>Problem Statement</h1>
<p>

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

```
Input: ransomNote = "a", magazine = "b"
Output: false


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const alphabetCounter: number[] = new Array(26).fill(0);

  for (const c of magazine) {
    alphabetCounter[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (const c of ransomNote) {
    if (alphabetCounter[c.charCodeAt(0) - "a".charCodeAt(0)] === 0) {
      return false;
    }
    alphabetCounter[c.charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  return true;
}
```

</details>

</details>

## Medium

### 109. Insert Delete GetRandom O(1)

<details>
<summary><b>109. 	
 Insert Delete GetRandom O(1)</b></summary>
<h1>Problem Statement</h1>
<p>

Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

```
Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class RandomizedSet {
  private nums: number[];
  private locs: Map<number, number>;
  private rand: () => number;

  constructor() {
    this.nums = [];
    this.locs = new Map();
    this.rand = Math.random;
  }

  insert(val: number): boolean {
    if (this.locs.has(val)) {
      return false;
    }

    this.locs.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.locs.has(val)) {
      return false;
    }

    const loc = this.locs.get(val);

    if (loc! < this.nums.length - 1) {
      const lastOne = this.nums[this.nums.length - 1];
      this.nums[loc!] = lastOne;
      this.locs.set(lastOne, loc!);
    }

    this.locs.delete(val);
    this.nums.pop();
    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(this.rand() * this.nums.length);
    return this.nums[randomIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```

</details>

</details>

## Hard

### 110. First Missing Positive

<details>
<summary><b>110. 	
 First Missing Positive</b></summary>
<h1>Problem Statement</h1>
<p>

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

```
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  // 1. Mark numbers (num < 0) and (num > n) with a special marker number (n+1)
  // (we can ignore those because if all numbers are > n then we'll simply return 1)
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = n + 1;
    }
  }
  // Note: All numbers in the array are now positive and in the range 1..n+1

  // 2. Mark each cell appearing in the array by converting the index for that number to negative
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (num > n) {
      continue;
    }
    const index = num - 1; // -1 for zero-indexed array (so the number 1 will be at position 0)
    if (nums[index] > 0) {
      // Prevents double negative operations
      nums[index] = -1 * nums[index];
    }
  }

  // 3. Find the first cell which isn't negative (doesn't appear in the array)
  for (let i = 0; i < n; i++) {
    if (nums[i] >= 0) {
      return i + 1;
    }
  }

  // 4. No positive numbers were found, which means the array contains all numbers 1..n
  return n + 1;
}
```

</details>

</details>

## Dynamic Programming

## Easy

### 111. Climbing Stairs

<details>
<summary><b>111. 	
 Climbing Stairs</b></summary>
<h1>Problem Statement</h1>
<p>

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps


```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function climbStairs(n: number): number {
  // Base cases
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let oneStepBefore: number = 2;
  let twoStepsBefore: number = 1;
  let allWays: number = 0;

  for (let i = 2; i < n; i++) {
    allWays = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = allWays;
  }

  return allWays;
}
```

</details>

</details>

## Medium

### 112. Maximum Subarray

<details>
<summary><b>112. 	
 Maximum Subarray</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums, find the subarray with the largest sum, and return its sum.

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function maxSubArray(A: number[]): number {
  let maxSoFar: number = A[0];
  let maxEndingHere: number = A[0];

  for (let i = 1; i < A.length; ++i) {
    maxEndingHere = Math.max(maxEndingHere + A[i], A[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
```

</details>

</details>

### 113. Coin Change

<details>
<summary><b>113. 	
 Coin Change</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

```
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function coinChange(coins: number[], amount: number): number {
  if (amount < 1) return 0;
  const dp: number[] = new Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let sum = 1; sum <= amount; sum++) {
    let min = Number.MAX_VALUE;
    for (const coin of coins) {
      if (sum >= coin && dp[sum - coin] !== -1) {
        const temp = dp[sum - coin] + 1;
        min = Math.min(min, temp);
      }
    }
    dp[sum] = min === Number.MAX_VALUE ? -1 : min;
  }

  return dp[amount];
}
```

</details>

</details>

### 114. Partition Equal Subset Sum

<details>
<summary><b>114. 	
 Partition Equal Subset Sum</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

```
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function canPartition(nums: number[]): boolean {
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  if (sum % 2 !== 0) {
    return false;
  }

  sum /= 2;

  const n = nums.length;
  const dp: boolean[] = new Array(sum + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let i = sum; i > 0; i--) {
      if (i >= num) {
        dp[i] = dp[i] || dp[i - num];
      }
    }
  }

  return dp[sum];
}
```

</details>

</details>

### 115. Unique Paths

<details>
<summary><b>115. 	
 Unique Paths</b></summary>
<h1>Problem Statement</h1>
<p>

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 \* 109.

```
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function uniquePaths(m: number, n: number): number {
  const map: number[][] = new Array(m)
    .fill(null)
    .map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    map[i][0] = 1;
  }

  for (let j = 0; j < n; j++) {
    map[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      map[i][j] = map[i - 1][j] + map[i][j - 1];
    }
  }

  return map[m - 1][n - 1];
}
```

</details>

</details>

### 116. House Robber

<details>
<summary><b>116. 	
 House Robber</b></summary>
<h1>Problem Statement</h1>
<p>

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function rob(nums: number[]): number {
  if (nums.length === 0) return 0;

  const memo: number[] = new Array(nums.length + 1);
  memo[0] = 0;
  memo[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const val = nums[i];
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + val);
  }

  return memo[nums.length];
}
```

</details>

</details>

### 117. Maximum Product Subarray

<details>
<summary><b>117. 	
Maximum Product Subarray</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

```
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function maxProduct(A: number[]): number {
  let n: number = A.length;
  let res: number = A[0];
  let l: number = 0;
  let r: number = 0;

  for (let i: number = 0; i < n; i++) {
    l = (l === 0 ? 1 : l) * A[i];
    r = (r === 0 ? 1 : r) * A[n - 1 - i];
    res = Math.max(res, Math.max(l, r));
  }

  return res;
}
```

</details>

</details>

### 118. Longest Increasing Subsequence

<details>
<summary><b>118. 	
Longest Increasing Subsequence</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums, return the length of the longest strictly increasing subsequence.

```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function lengthOfLIS(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(0);
  let len: number = 0;

  for (const x of nums) {
    let i: number = binarySearch(dp, 0, len, x);
    if (i < 0) i = -(i + 1);
    dp[i] = x;
    if (i === len) len++;
  }

  return len;
}

function binarySearch(
  arr: number[],
  left: number,
  right: number,
  target: number
): number {
  while (left < right) {
    const mid: number = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -(left + 1);
}
```

</details>

</details>

### 119. Jump Game

<details>
<summary><b>119. 	
Jump Game</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function canJump(A: number[]): boolean {
  let last: number = A.length - 1;

  for (let i: number = A.length - 2; i >= 0; i--) {
    if (i + A[i] >= last) {
      last = i;
    }
  }

  return last <= 0;
}
```

</details>

</details>

### 120. Maximal Square

<details>
<summary><b>120. 	
Maximal Square</b></summary>
<h1>Problem Statement</h1>
<p>

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

```
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function maximalSquare(a: string[][]): number {
  if (a.length === 0 || a[0].length === 0) {
    return 0;
  }

  const m: number = a.length;
  const n: number = a[0].length;
  let result: number = 0;

  const b: number[][] = new Array(m + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));

  for (let i: number = 1; i <= m; i++) {
    for (let j: number = 1; j <= n; j++) {
      if (a[i - 1][j - 1] === "1") {
        b[i][j] =
          Math.min(b[i][j - 1], Math.min(b[i - 1][j - 1], b[i - 1][j])) + 1;
        result = Math.max(b[i][j], result);
      }
    }
  }

  return result * result;
}
```

</details>

</details>

### 121. Decode Ways

<details>
<summary><b>121. 	
Decode Ways</b></summary>
<h1>Problem Statement</h1>
<p>

A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.

```
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function numDecodings(s: string): number {
  if (s === null || s.length === 0) {
    return 0;
  }

  const n: number = s.length;
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = s.charAt(0) !== "0" ? 1 : 0;

  for (let i: number = 2; i <= n; i++) {
    const first: number = parseInt(s.substring(i - 1, i), 10);
    const second: number = parseInt(s.substring(i - 2, i), 10);

    if (first >= 1 && first <= 9) {
      dp[i] += dp[i - 1];
    }

    if (second >= 10 && second <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}
```

</details>

</details>

### 122. Combination Sum IV

<details>
<summary><b>122. 	
Combination Sum IV</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.

```
Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
let dp: number[];

function combinationSum4(nums: number[], target: number): number {
  dp = new Array(target + 1).fill(-1);
  dp[0] = 1;
  return helper(nums, target);
}

function helper(nums: number[], target: number): number {
  if (dp[target] !== -1) {
    return dp[target];
  }
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (target >= nums[i]) {
      res += helper(nums, target - nums[i]);
    }
  }
  dp[target] = res;
  return res;
}
```

</details>

</details>

## Binary

## Easy

### 123. Add Binary

<details>
<summary><b>123. 	
Add Binary</b></summary>
<h1>Problem Statement</h1>
<p>

Given two binary strings a and b, return their sum as a binary string.

```
Input: a = "11", b = "1"
Output: "100"

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function addBinary(a: string, b: string): string {
  const sb: string[] = [];
  let i: number = a.length - 1;
  let j: number = b.length - 1;
  let carry: number = 0;

  while (i >= 0 || j >= 0) {
    let sum: number = carry;
    if (j >= 0) sum += parseInt(b.charAt(j--), 10);
    if (i >= 0) sum += parseInt(a.charAt(i--), 10);
    sb.push((sum % 2).toString());
    carry = Math.floor(sum / 2);
  }

  if (carry !== 0) sb.push(carry.toString());

  return sb.reverse().join("");
}
```

</details>

</details>

### 124. Counting Bits

<details>
<summary><b>124. 	
Counting Bits</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

```
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function countBits(num: number): number[] {
  const f: number[] = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    f[i] = f[i >> 1] + (i & 1);
  }
  return f;
}
```

</details>

</details>

### 125. Number of 1 Bits

<details>
<summary><b>125. 	
Number of 1 Bits</b></summary>
<h1>Problem Statement</h1>
<p>

Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

```
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function hammingWeight(n: number): number {
  let ones: number = 0;
  while (n !== 0) {
    ones += n & 1;
    n = n >>> 1;
  }
  return ones;
}
```

</details>

</details>

### 126. Single Number

<details>
<summary><b>126. 	
Single Number</b></summary>
<h1>Problem Statement</h1>
<p>

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

```
Input: nums = [2,2,1]
Output: 1

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function singleNumber(nums: number[]): number {
  let ans: number = 0;

  const len: number = nums.length;
  for (let i: number = 0; i !== len; i++) {
    ans ^= nums[i];
  }

  return ans;
}
```

</details>

</details>

### 127. Missing Number

<details>
<summary><b>127. 	
Missing Number</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function missingNumber(nums: number[]): number {
  let xor: number = 0;
  let i: number = 0;
  for (i = 0; i < nums.length; i++) {
    xor = xor ^ i ^ nums[i];
  }

  return xor ^ i;
}
```

</details>

</details>

### 128. Reverse Bits

<details>
<summary><b>128. 	
 Reverse Bits</b></summary>
<h1>Problem Statement</h1>
<p>

Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

```
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function reverseBits(n: number): number {
  if (!n) return 0;

  let ans: number = 0;

  for (let i: number = 0; i < 32; i++) {
    ans = ans * 2 + (n & 1);
    n >>>= 1;
  }

  return ans;
}
```

</details>

</details>

## Medium

### 129. Find the Duplicate Number

<details>
<summary><b>129. 	
 Find the Duplicate Number</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

```
Input: nums = [1,3,4,2,2]
Output: 2

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function findDuplicate(nums: number[]): number {
  if (nums.length > 1) {
    let slow: number = nums[0];
    let fast: number = nums[nums[0]];
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[nums[fast]];
    }

    fast = 0;
    while (fast !== slow) {
      fast = nums[fast];
      slow = nums[slow];
    }
    return slow;
  }
  return -1;
}
```

</details>

</details>

## Math

## Easy

### 130. Roman to Integer

<details>
<summary><b>130. 	
Roman to Integer</b></summary>
<h1>Problem Statement</h1>
<p>

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

```
Input: s = "III"
Output: 3
Explanation: III = 3.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function romanToInt(s: string): number {
  let ans: number = 0;
  let num: number = 0;

  for (let i: number = s.length - 1; i >= 0; i--) {
    switch (s.charAt(i)) {
      case "I":
        num = 1;
        break;
      case "V":
        num = 5;
        break;
      case "X":
        num = 10;
        break;
      case "L":
        num = 50;
        break;
      case "C":
        num = 100;
        break;
      case "D":
        num = 500;
        break;
      case "M":
        num = 1000;
        break;
    }
    if (4 * num < ans) {
      ans -= num;
    } else {
      ans += num;
    }
  }
  return ans;
}
```

</details>

</details>

### 131. Palindrome Number

<details>
<summary><b>131. 	
Palindrome Number</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer x, return true if x is a palindrome, and false otherwise.

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function isPalindrome(x: number): boolean {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  let rev: number = 0;
  while (x > rev) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === rev || x === Math.floor(rev / 10);
}
```

</details>

</details>

## Medium

### 132. Random Pick with Weight

<details>
<summary><b>132. 	
Random Pick with Weight</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.

You need to implement the function pickIndex(), which randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it. The probability of picking an index i is w[i] / sum(w).

For example, if w = [1, 3], the probability of picking index 0 is 1 / (1 + 3) = 0.25 (i.e., 25%), and the probability of picking index 1 is 3 / (1 + 3) = 0.75 (i.e., 75%).

```
Input
["Solution","pickIndex"]
[[[1]],[]]
Output
[null,0]

Explanation
Solution solution = new Solution([1]);
solution.pickIndex(); // return 0. The only option is to return 0 since there is only one element in w.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class Solution {
  private wSums: number[];

  constructor(w: number[]) {
    for (let i = 1; i < w.length; ++i) {
      w[i] += w[i - 1];
    }
    this.wSums = w;
  }

  pickIndex(): number {
    const len: number = this.wSums.length;
    const idx: number = Math.floor(Math.random() * this.wSums[len - 1]) + 1;
    let left: number = 0;
    let right: number = len - 1;

    // Search position
    while (left < right) {
      const mid: number = left + Math.floor((right - left) / 2);
      if (this.wSums[mid] === idx) {
        return mid;
      } else if (this.wSums[mid] < idx) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}
```

</details>

</details>

### 133. Pow(x, n)

<details>
<summary><b>133. 	
Pow(x, n)</b></summary>
<h1>Problem Statement</h1>
<p>

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

```
Input: x = 2.00000, n = 10
Output: 1024.00000

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  return n % 2 === 0
    ? myPow(x * x, Math.floor(n / 2))
    : x * myPow(x * x, Math.floor(n / 2));
}
```

</details>

</details>

### 134. Reverse Integer

<details>
<summary><b>134. 	
Reverse Integer</b></summary>
<h1>Problem Statement</h1>
<p>

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

```
Input: x = 123
Output: 321

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function reverse(x: number): number {
  const INT_MAX: number = 2 ** 31 - 1;
  const INT_MIN: number = -(2 ** 31);

  let result: number = 0;

  while (x !== 0) {
    const tail: number = x % 10;
    const newResult: number = result * 10 + tail;

    if (newResult > INT_MAX || newResult < INT_MIN) {
      return 0;
    }

    result = newResult;
    x = (x / 10) | 0; // Use bitwise OR to truncate decimal places for negative numbers
  }

  return result;
}
```

</details>

</details>

## Heap

## Medium

### 135. K Closest Points to Origin

<details>
<summary><b>135. 	
K Closest Points to Origin</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

```
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function kClosest(points: number[][], K: number): number[][] {
  points.sort((a, b) => {
    const distA: number = a[0] * a[0] + a[1] * a[1];
    const distB: number = b[0] * b[0] + b[1] * b[1];
    return distA - distB;
  });

  return points.slice(0, K);
}
```

</details>

</details>

### 136.Task Scheduler

<details>
<summary><b>136. 	
Task Scheduler</b></summary>
<h1>Problem Statement</h1>
<p>

Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

```
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation:
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class Task {
  // I need a task name for debugging.
  name: string;
  count: number = 0;
}

function leastInterval(tasks: string[], n: number): number {
  let maxHeap = new BinaryHeap<Task>((a, b) => a.count > b.count);

  let tasksMap = {};
  for (const task of tasks) {
    if (!(task in tasksMap)) tasksMap[task] = 0;
    tasksMap[task]++;
  }

  for (const task of Object.keys(tasksMap)) {
    const taskObject = new Task();
    taskObject.name = task;
    taskObject.count = tasksMap[task];

    maxHeap.push(taskObject);
  }

  // Let's make an IDLE task for consistency.
  const idle = new Task();
  idle.name = "IDLE";
  idle.count = 0;

  const used = [];
  while (maxHeap.size() > 0) {
    const task = maxHeap.pop();
    used.push(task);
    for (let j = 0; j < n; j++) {
      if (maxHeap.size() > 0) {
        const anotherTask = maxHeap.pop();
        used.push(anotherTask);
      } else {
        used.push(idle);
      }
    }

    // Reduce a counter for the last n tasks.
    for (let i = used.length - n - 1; i < used.length; i++) {
      const task = used[i];
      task.count--;
      if (task.count > 0) {
        maxHeap.push(task);
      }
    }
  }

  // Remove IDLE tasks at the end.
  let len = used.length;
  while (len > 0 && used[len - 1] === idle) {
    len--;
  }
  return len;
}

function swap<T>(list: T[], i: number, j: number): T[] {
  if (i !== j) {
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

class BinaryHeap<T> {
  private harr: T[] = [];

  constructor(private lessThan: (a: T, b: T) => boolean) {}

  size() {
    return this.harr.length;
  }

  push(v: T) {
    this.harr.push(v);
    let i = this.harr.length - 1;
    while (i > 0 && this.lessThan(this.harr[i], this.harr[this.parent(i)])) {
      swap(this.harr, i, this.parent(i));
      i = this.parent(i);
    }
  }

  pop() {
    if (this.harr.length === 0) throw new Error("Overflow");

    const [head] = this.harr;
    this.harr[0] = this.harr[this.harr.length - 1];
    this.harr.length -= 1;

    this.heapify(0);

    return head;
  }

  private heapify(i: number) {
    const l = this.left(i);
    const r = this.right(i);
    let smallest = i;
    if (l < this.harr.length && this.lessThan(this.harr[l], this.harr[i])) {
      smallest = l;
    }
    if (
      r < this.harr.length &&
      this.lessThan(this.harr[r], this.harr[smallest])
    ) {
      smallest = r;
    }
    if (smallest !== i) {
      swap(this.harr, smallest, i);
      this.heapify(smallest);
    }
  }

  private parent(i: number) {
    return Math.floor((i - 1) / 2);
  }

  private left(i: number) {
    return 2 * i + 1;
  }

  private right(i: number) {
    return 2 * i + 2;
  }
}
```

</details>

</details>

### 137.Top K Frequent Words

<details>
<summary><b>137. 	
Top K Frequent Words</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

```
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
type QueueNodeType = {
  element: any;
  priority: number;
};

const PriorityQueue1 = () => {
  let queue: QueueNodeType[] = [];

  function enqueue({ element, priority }: { element: any; priority: number }) {
    const newNode: QueueNodeType = {
      element,
      priority,
    };
    if (queue.length === 0) {
      queue.push(newNode);
    } else {
      let added = false;
      for (let i = 0; i < queue.length; i++) {
        if (queue[i].priority < priority) {
          queue.splice(i, 0, newNode);
          added = true;
          break;
        }

        if (queue[i].priority === priority) {
          if (element.localeCompare(queue[i].element) < 0) {
            queue.splice(i, 0, newNode);
            added = true;
            break;
          }
        }
      }
      if (!added) {
        queue.push(newNode);
      }
    }
  }

  function dequeue() {
    return queue.shift();
  }

  function clear() {
    queue = [];
  }

  function size() {
    return queue.length;
  }

  function print() {
    console.table(queue);
  }

  return {
    enqueue,
    dequeue,
    clear,
    size,
    print,
  };
};

function topKFrequent(words: string[], k: number): string[] {
  let map = new Map();
  let pq = PriorityQueue1();
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const curr = words[i];
    if (map.get(curr) !== undefined) {
      map.set(curr, map.get(curr) + 1);
    } else {
      map.set(curr, 1);
    }
  }

  map.forEach((value, key) => {
    const node: QueueNodeType = {
      element: key,
      priority: value,
    };
    pq.enqueue(node);
  });

  let qIndex = 0;
  while (qIndex < k) {
    result.push(pq.dequeue().element);
    qIndex++;
  }

  return result;
}
```

</details>

</details>

### 138.Find K Closest Elements

<details>
<summary><b>138. 	
Find K Closest Elements</b></summary>
<h1>Problem Statement</h1>
<p>

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b

```
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
const findClosestElements = (arr: number[], k: number, x: number): number[] => {
  let left = findLowestClosest(arr, x);
  let right = left + 1;

  for (let i = 0; i < k; i++) {
    if (isLeftCloser(arr, left, right, x)) {
      left--;
    } else {
      right++;
    }
  }
  return arr.slice(left + 1, right);
};

const findLowestClosest = (arr: number[], x: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < x) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (arr[left] >= x) {
    return -1;
  }
  return arr[right] <= x ? right : left;
};

const isLeftCloser = (
  arr: number[],
  left: number,
  right: number,
  x: number
): boolean => {
  if (left < 0) {
    return false;
  }
  if (right >= arr.length) {
    return true;
  }

  if (x - arr[left] != arr[right] - x) {
    return x - arr[left] < arr[right] - x;
  }

  return true;
};
```

</details>

</details>

### 139.Kth Largest Element in an Array

<details>
<summary><b>139. 	
Kth Largest Element in an Array</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

```
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class MinHeap {
  private k: number;
  public heap: number[];
  constructor(nums: number[], k: number) {
    this.k = k;
    this.heap = [];

    for (let i = 0; i < nums.length; i++) {
      this.add(nums[i]);
    }
  }

  _heapifyUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  _heapifyDown(index: number): void {
    const length: number = this.heap.length;
    while (index < length) {
      let smallest: number = index;
      const leftChild: number = index * 2 + 1;
      const rightChild: number = index * 2 + 2;

      if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }

      if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }

      if (index !== smallest) {
        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }

  remove(num: number): void {
    this.heap.push(num);
    [this.heap[this.heap.length - 1], this.heap[0]] = [
      this.heap[0],
      this.heap[this.heap.length - 1],
    ];
    this.heap.pop();
    this._heapifyDown(0);
  }

  add(num: number): void {
    if (this.heap.length < this.k) {
      this.heap.push(num);
      this._heapifyUp(this.heap.length - 1);
    } else if (num > this.heap[0]) {
      this.remove(num);
    }
  }
}

function findKthLargest(nums: number[], k: number): number {
  const kLargest: MinHeap = new MinHeap(nums, k);
  return kLargest.heap[0];
}
```

</details>

</details>

## Hard

### 140.Find Median from Data Stream

<details>
<summary><b>140. 	
Find Median from Data Stream</b></summary>
<h1>Problem Statement</h1>
<p>

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

```
Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class Heap {
  private readonly heap: number[];

  constructor(isMax: boolean = false, list: number[] = []) {
    // we will use the same min heap but all values will be multiplied by -1
    // that trick helps us to avoid extra heaps logic
    this.heap = [isMax ? -1 : 1];
    list.forEach((item) => this.add(item));
  }

  peek = (): number => {
    let peekVal: number = this.size() > 0 ? this.heap[1] : null;
    return peekVal && this.isMaxHeap() ? -1 * peekVal : peekVal;
  };

  add = (node: number) => {
    node = this.isMaxHeap() ? -1 * node : node;
    this.heap.push(node);
    if (this.heap.length == 2) return node;
    this._heapifyUp();

    return this.heap[1];
  };

  poll = (): number | null => {
    if (this.heap.length == 1) return null;
    if (this.heap.length == 2) return this.heap.pop();
    const prevRoot = this.heap[1];
    // bring last val to root
    this.heap[1] = this.heap.pop();
    // reorder top to bottom
    this._heapifyDown();

    return this.isMaxHeap() ? -1 * prevRoot : prevRoot;
  };

  isMaxHeap = (): boolean => this.heap[0] == -1;

  isMinHeap = (): boolean => this.heap[0] == 1;

  size = (): number => this.heap.length - 1;

  _heapifyUp = (): void => {
    let i = this.heap.length - 1;
    const val = this.heap[i];

    while (!this._isRoot(i) && this._getParentNode(i) > val) {
      //swap values
      [this.heap[this._getParentIndex(i)], this.heap[i]] = [
        this.heap[i],
        this.heap[this._getParentIndex(i)],
      ];
      i = this._getParentIndex(i);
    }
  };

  _heapifyDown = (): void => {
    if (this.heap.length < 3) return;
    let i = 1;
    const currentVal = this.heap[1];
    let leftVal = this._getLeftNode(i);
    let rightVal = this._getRightNode(i);
    while (
      leftVal !== undefined &&
      (currentVal > leftVal || currentVal > rightVal)
    ) {
      if (
        currentVal > leftVal &&
        (rightVal === undefined || leftVal < rightVal)
      ) {
        // swap
        [this.heap[this._getLeftIndex(i)], this.heap[i]] = [
          currentVal,
          leftVal,
        ];
        i = this._getLeftIndex(i);
      } else {
        [this.heap[this._getRightIndex(i)], this.heap[i]] = [
          currentVal,
          rightVal,
        ];
        i = this._getRightIndex(i);
      }
      leftVal = this._getLeftNode(i);
      rightVal = this._getRightNode(i);
    }
  };

  _isRoot = (i) => i == 1;

  _getLeftIndex = (i) => i * 2;

  _getLeftNode = (i) => this.heap[this._getLeftIndex(i)];

  _getRightIndex = (i) => i * 2 + 1;

  _getRightNode = (i) => this.heap[this._getRightIndex(i)];

  _getParentIndex = (i) => Math.floor(i / 2);

  _getParentNode = (i) => this.heap[this._getParentIndex(i)];
}

class MedianFinder {
  private minHeap: Heap;
  private maxHeap: Heap;

  constructor() {
    // Example: [1, 2, 3, 4, 5, 6]
    // [4, 5, 6] => 4
    this.minHeap = new Heap(); // large numbers  (the right part of the while ordered list)

    // [3, 2, 1] => 3
    this.maxHeap = new Heap(true); // small numbers (the left part of the while ordered list)
  }

  addNum(num: number): void {
    // Make sure every num from small heap <= every number in max heap
    if (num < this.maxHeap.peek()) {
      this.maxHeap.add(num);
    } else {
      this.minHeap.add(num);
    }

    // this.maxHeap.add(num);
    // if (this.minHeap.size() > 0 && this.maxHeap.peek() > this.minHeap.peek()) {
    //   this.minHeap.add(this.maxHeap.poll());
    // }

    // Rebalancing our heaps (the difference should be not greater than 1)
    if (this.minHeap.size() - this.maxHeap.size() > 1) {
      this.maxHeap.add(this.minHeap.poll());
    }
    if (this.maxHeap.size() - this.minHeap.size() > 1) {
      this.minHeap.add(this.maxHeap.poll());
    }
  }

  findMedian(): number {
    // the list is odd -> median in maxHeap (the size is greater)
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek();
    }
    // the list is odd -> median in minHeap (the size is greater)
    if (this.maxHeap.size() < this.minHeap.size()) {
      return this.minHeap.peek();
    }

    // the list is even - we should take 2 medians and return the mean
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
}
```

</details>

</details>

### 140.Merge k Sorted Lists

<details>
<summary><b>140. 	
Merge k Sorted Lists</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

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

function swap<T>(list: T[], i: number, j: number): T[] {
  if (i !== j) {
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

class BinaryHeap<T> {
  private harr: T[] = [];

  constructor(private lessThan: (a: T, b: T) => boolean) {}

  size() {
    return this.harr.length;
  }

  push(v: T) {
    this.harr.push(v);
    let i = this.harr.length - 1;
    while (i > 0 && this.lessThan(this.harr[i], this.harr[this.parent(i)])) {
      swap(this.harr, i, this.parent(i));
      i = this.parent(i);
    }
  }

  peek() {
    if (this.harr.length === 0) throw new Error("Overflow");

    const [head] = this.harr;
    this.harr[0] = this.harr[this.harr.length - 1];
    this.harr.length -= 1;

    this.heapify(0);

    return head;
  }

  private heapify(i: number) {
    const l = this.left(i);
    const r = this.right(i);
    let smallest = i;
    if (l < this.harr.length && this.lessThan(this.harr[l], this.harr[i])) {
      smallest = l;
    }
    if (
      r < this.harr.length &&
      this.lessThan(this.harr[r], this.harr[smallest])
    ) {
      smallest = r;
    }
    if (smallest !== i) {
      swap(this.harr, smallest, i);
      this.heapify(smallest);
    }
  }

  private parent(i: number) {
    return Math.floor((i - 1) / 2);
  }

  private left(i: number) {
    return 2 * i + 1;
  }

  private right(i: number) {
    return 2 * i + 2;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const pq = new BinaryHeap<ListNode>((a, b) => a.val < b.val);

  for (const listNode of lists) {
    if (listNode !== null) pq.push(listNode);
  }

  let dummyHead = new ListNode();
  let head = dummyHead;
  while (pq.size() > 0) {
    const listNode = pq.peek();
    if (listNode.next) pq.push(listNode.next);

    head.next = listNode;
    head = head.next;
  }

  return dummyHead.next;
}
```

</details>

</details>

### 141.Smallest Range Covering Elements from K Lists

<details>
<summary><b>141. 	
Smallest Range Covering Elements from K Lists</b></summary>
<h1>Problem Statement</h1>
<p>

You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.

We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.

```
Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
Output: [20,24]
Explanation:
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function smallestRange(nums: number[][]): number[] {
  const minHeap = new MinPriorityQueue({ priority: (a) => a[0] });
  let rangeStart = 0;
  let rangeEnd = Infinity;
  let maxNumber = -Infinity;

  for (let num of nums) {
    minHeap.enqueue([num[0], 0, num]);
    maxNumber = Math.max(maxNumber, num[0]);
  }

  while (minHeap.size() == nums.length) {
    let [num, i, list] = minHeap.dequeue().element;

    if (rangeEnd - rangeStart > maxNumber - num) {
      rangeStart = num;
      rangeEnd = maxNumber;
    }

    if (list.length > i + 1) {
      minHeap.enqueue([list[i + 1], i + 1, list]);
      maxNumber = Math.max(maxNumber, list[i + 1]);
    }
  }

  return [rangeStart, rangeEnd];
}
```

</details>

</details>

## Trie

## Medium

### 142.Implement Trie (Prefix Tree)

<details>
<summary><b>142. 	
Implement Trie (Prefix Tree)</b></summary>
<h1>Problem Statement</h1>
<p>

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

```
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class TrieNode {
  children: Map<string, TrieNode>;
  isword: boolean;

  constructor() {
    this.children = new Map();
    this.isword = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let cur: TrieNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.children.has(word[i])) {
        cur.children.set(word[i], new TrieNode());
      }
      cur = cur.children.get(word[i])!;
    }
    cur.isword = true;
  }

  search(word: string): boolean {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.children.has(word[i])) {
        return false;
      }
      cur = cur.children.get(word[i])!;
    }
    return cur.isword;
  }

  startsWith(prefix: string): boolean {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!cur.children.has(prefix[i])) {
        return false;
      }
      cur = cur.children.get(prefix[i])!;
    }
    return true;
  }
}
```

</details>

</details>

### 143.Word Break

<details>
<summary><b>143. 	
Word Break</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

```
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function wordBreak(s: string, wordDict: string[]): boolean {
  const root = new TrieNode();
  for (const word of wordDict) {
    root.addWord(word);
  }

  const n = s.length;
  const dp: boolean[] = new Array(n + 1).fill(false);
  dp[n] = true;

  for (let i = n - 1; i >= 0; i--) {
    let cur: TrieNode = root;
    for (let j = i + 1; j <= n; j++) {
      const c = s.charAt(j - 1);
      if (!cur.child.has(c)) break; // s[i:j] does not exist in our trie
      cur = cur.child.get(c)!;
      if (cur.isWord && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[0];
}

class TrieNode {
  isWord: boolean;
  child: Map<string, TrieNode>;

  constructor() {
    this.isWord = false;
    this.child = new Map<string, TrieNode>();
  }

  addWord(word: string): void {
    let cur: TrieNode = this;
    for (const c of word) {
      if (!cur.child.has(c)) {
        cur.child.set(c, new TrieNode());
      }
      cur = cur.child.get(c)!;
    }
    cur.isWord = true;
  }
}
```

</details>

</details>

### 144.Design Add and Search Words Data Structure

<details>
<summary><b>144. 	
Design Add and Search Words Data Structure</b></summary>
<h1>Problem Statement</h1>
<p>

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

```
Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
class WordDictionary {
  isWord: boolean;
  child: { [Key: string]: WordDictionary };
  constructor() {
    this.child = {};
    this.isWord = false;
  }

  addWord(word: string): void {
    let curr: WordDictionary = this;
    for (const c of word) {
      if (!curr.child[c]) {
        curr.child[c] = new WordDictionary();
      }
      curr = curr.child[c];
    }
    curr.isWord = true;
  }

  search(word: string, i = 0): boolean {
    let curr: WordDictionary = this;
    for (; i < word.length; i++) {
      const c = word[i];
      if (c !== ".") {
        if (!curr.child[c]) {
          return false;
        }
        curr = curr.child[c];
      } else {
        for (const key in curr.child) {
          if (curr.child[key].search(word, i + 1)) {
            return true;
          }
        }
        return false;
      }
    }
    return curr.isWord;
  }
}
```

</details>

</details>

## Recursion

## Medium

### 145.Permutations

<details>
<summary><b>145. 	
Permutations</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function permute(nums: number[]): number[][] {
  const list: number[][] = [];
  // No need to sort nums in TypeScript

  function backtrack(tempList: number[], nums: number[]): void {
    if (tempList.length === nums.length) {
      list.push([...tempList]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (tempList.includes(nums[i])) continue; // Element already exists, skip
        tempList.push(nums[i]);
        backtrack(tempList, nums);
        tempList.pop();
      }
    }
  }

  backtrack([], nums);
  return list;
}
```

</details>

</details>

### 146.Subsets

<details>
<summary><b>146. 	
Subsets</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function subsets(nums: number[]): number[][] {
  const list: number[][] = [];
  nums.sort((a, b) => a - b);

  function backtrack(tempList: number[], nums: number[], start: number): void {
    list.push([...tempList]);

    for (let i = start; i < nums.length; i++) {
      tempList.push(nums[i]);
      backtrack(tempList, nums, i + 1);
      tempList.pop();
    }
  }

  backtrack([], nums, 0);
  return list;
}
```

</details>

</details>

### 147.Letter Combinations of a Phone Number

<details>
<summary><b>147. 	
Letter Combinations of a Phone Number</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function letterCombinations(digits: string): string[] {
  const solution = new Solution();
  return solution.letterCombinations(digits);
}

class Solution {
  private static readonly KEYS: string[] = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  letterCombinations(digits: string): string[] {
    const ret: string[] = [];
    if (digits.length === 0) {
      return ret; // Return an empty array for an empty string
    }
    this.combination("", digits, 0, ret);
    return ret;
  }

  private combination(
    prefix: string,
    digits: string,
    offset: number,
    ret: string[]
  ): void {
    if (offset >= digits.length) {
      ret.push(prefix);
      return;
    }
    const letters: string = Solution.KEYS[parseInt(digits.charAt(offset))];
    for (let i = 0; i < letters.length; i++) {
      this.combination(prefix + letters.charAt(i), digits, offset + 1, ret);
    }
  }
}
```

</details>

</details>

### 148.Next Permutation

<details>
<summary><b>148. 	
Next Permutation</b></summary>
<h1>Problem Statement</h1>
<p>

A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

```
Input: nums = [1,2,3]
Output: [1,3,2]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  const solution = new Solution();
  solution.nextPermutation(nums);
}

class Solution {
  nextPermutation(nums: number[]): void {
    // pivot is the element just before the non-increasing (weakly decreasing) suffix
    const pivot: number = this.indexOfLastPeak(nums) - 1;
    // partitions nums into [prefix pivot suffix]
    if (pivot !== -1) {
      const nextPrefix: number = this.lastIndexOfGreater(nums, nums[pivot]); // in the worst case it's suffix[0]
      // next prefix must exist because pivot < suffix[0], otherwise pivot would be part of suffix
      this.swap(nums, pivot, nextPrefix); // this minimizes the change in prefix
    }
    this.reverseSuffix(nums, pivot + 1); // reverses the whole list if there was no pivot
  }

  /**
   * Find the last element which is a peak.
   * In case there are multiple equal peaks, return the first of those.
   * @return first index of last peak
   */
  indexOfLastPeak(nums: number[]): number {
    for (let i = nums.length - 1; i > 0; --i) {
      if (nums[i - 1] < nums[i]) return i;
    }
    return 0;
  }

  /** @return last index where the {@code num > threshold} or -1 if not found */
  lastIndexOfGreater(nums: number[], threshold: number): number {
    for (let i = nums.length - 1; i >= 0; --i) {
      if (threshold < nums[i]) return i;
    }
    return -1;
  }

  /** Reverse numbers starting from an index till the end. */
  reverseSuffix(nums: number[], start: number): void {
    let end: number = nums.length - 1;
    while (start < end) {
      this.swap(nums, start++, end--);
    }
  }

  swap(nums: number[], i: number, j: number): void {
    const temp: number = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}
```

</details>

</details>

### 149.Generate Parentheses

<details>
<summary><b>149. 	
Generate Parentheses</b></summary>
<h1>Problem Statement</h1>
<p>

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function generateParenthesis(n: number): string[] {
  const list: string[] = [];
  backtrack(list, "", 0, 0, n);
  return list;
}

function backtrack(
  list: string[],
  str: string,
  open: number,
  close: number,
  max: number
): void {
  if (str.length === max * 2) {
    list.push(str);
    return;
  }

  if (open < max) {
    backtrack(list, str + "(", open + 1, close, max);
  }
  if (close < open) {
    backtrack(list, str + ")", open, close + 1, max);
  }
}
```

</details>

</details>

## Hard

### 150.N-Queens

<details>
<summary><b>150. 	
N-Queens</b></summary>
<h1>Problem Statement</h1>
<p>

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

```
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function solveNQueens(n: number): string[][] {
  const solution = new Solution();
  return solution.solveNQueens(n);
}

class Solution {
  solveNQueens(n: number): string[][] {
    const res: string[][] = [];
    const nQueens: any[] = new Array(n)
      .fill("")
      .map(() => new Array(n).fill("."));
    this.solveNQueensHelper(res, nQueens, 0, n);
    return res;
  }

  private solveNQueensHelper(
    res: string[][],
    nQueens: string[][],
    row: number,
    n: number
  ): void {
    if (row === n) {
      res.push(nQueens.map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; ++col) {
      if (this.isValid(nQueens, row, col, n)) {
        nQueens[row][col] = "Q";
        this.solveNQueensHelper(res, nQueens, row + 1, n);
        nQueens[row][col] = ".";
      }
    }
  }

  private isValid(
    nQueens: string[][],
    row: number,
    col: number,
    n: number
  ): boolean {
    // Check if the column had a queen before.
    for (let i = 0; i < row; ++i) {
      if (nQueens[i][col] === "Q") {
        return false;
      }
    }
    // Check if the 45° diagonal had a queen before.
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
      if (nQueens[i][j] === "Q") {
        return false;
      }
    }
    // Check if the 135° diagonal had a queen before.
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; --i, ++j) {
      if (nQueens[i][j] === "Q") {
        return false;
      }
    }
    return true;
  }
}
```

</details>

</details>

## Matrix

## Medium

### 151.Spiral Matrix

<details>
<summary><b>151. 	
Spiral Matrix</b></summary>
<h1>Problem Statement</h1>
<p>

Given an m x n matrix, return all elements of the matrix in spiral order.

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];

  if (matrix.length === 0) {
    return res;
  }

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // Traverse Right
    for (let j = colBegin; j <= colEnd; j++) {
      res.push(matrix[rowBegin][j]);
    }
    rowBegin++;

    // Traverse Down
    for (let j = rowBegin; j <= rowEnd; j++) {
      res.push(matrix[j][colEnd]);
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      // Traverse Left
      for (let j = colEnd; j >= colBegin; j--) {
        res.push(matrix[rowEnd][j]);
      }
    }
    rowEnd--;

    if (colBegin <= colEnd) {
      // Traverse Up
      for (let j = rowEnd; j >= rowBegin; j--) {
        res.push(matrix[j][colBegin]);
      }
    }
    colBegin++;
  }

  return res;
}
```

</details>

</details>

### 152.Valid Sudoku

<details>
<summary><b>152. 	
Valid Sudoku</b></summary>
<h1>Problem Statement</h1>
<p>

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

```
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const rows = new Set<string>();
    const columns = new Set<string>();
    const cube = new Set<string>();

    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== "." && !rows.has(board[i][j])) {
        rows.add(board[i][j]);
      } else if (board[i][j] !== ".") {
        return false;
      }

      if (board[j][i] !== "." && !columns.has(board[j][i])) {
        columns.add(board[j][i]);
      } else if (board[j][i] !== ".") {
        return false;
      }

      const rowIndex = 3 * Math.floor(i / 3);
      const colIndex = 3 * (i % 3);
      const cubeValue = board[rowIndex + Math.floor(j / 3)][colIndex + (j % 3)];

      if (cubeValue !== "." && !cube.has(cubeValue)) {
        cube.add(cubeValue);
      } else if (cubeValue !== ".") {
        return false;
      }
    }
  }
  return true;
}
```

</details>

</details>

### 153.Rotate Image

<details>
<summary><b>153. 	
Rotate Image</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }
}
```

</details>

</details>

### 154.Set Matrix Zeroes

<details>
<summary><b>154. 	
Set Matrix Zeroes</b></summary>
<h1>Problem Statement</h1>
<p>

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
function setZeroes(matrix: number[][]): void {
  let fr = false;
  let fc = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) fr = true;
        if (j === 0) fc = true;
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (fr) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }

  if (fc) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
}
```

</details>

</details>

## Hard

### 155.Sudoku Solver

<details>
<summary><b>155. 	
Sudoku Solver</b></summary>
<h1>Problem Statement</h1>
<p>

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

```
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

<details>
<summary><b1>toggle code</b1></summary>

```typescript
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const solution = new Solution();
  solution.solveSudoku(board);
}

class Solution {
  solveSudoku(board: string[][]): void {
    if (board === null || board.length === 0) {
      return;
    }
    this.solve(board);
  }

  solve(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === ".") {
          for (
            let charCode = "1".charCodeAt(0);
            charCode <= "9".charCodeAt(0);
            charCode++
          ) {
            const c = String.fromCharCode(charCode);
            if (this.isValid(board, i, j, c)) {
              board[i][j] = c; // Put c for this cell

              if (this.solve(board)) {
                return true; // If it's the solution, return true
              } else {
                board[i][j] = "."; // Otherwise, go back
              }
            }
          }

          return false;
        }
      }
    }
    return true;
  }

  private isValid(
    board: string[][],
    row: number,
    col: number,
    c: string
  ): boolean {
    for (let i = 0; i < 9; i++) {
      if (board[i][col] !== "." && board[i][col] === c) return false; // Check row
      if (board[row][i] !== "." && board[row][i] === c) return false; // Check column
      if (
        board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
          3 * Math.floor(col / 3) + (i % 3)
        ] !== "." &&
        board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
          3 * Math.floor(col / 3) + (i % 3)
        ] === c
      )
        return false; // Check 3*3 block
    }
    return true;
  }
}
```

</details>

</details>
