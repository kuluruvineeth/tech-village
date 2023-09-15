# Easy

### 1. Longest Substring Without Repeating Characters

<details>
<summary><b>1. 	
Longest Substring Without Repeating Characters</b></summary>
<h1>Problem Statement</h1>
<p>
A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

```
Example 1:
Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz".
The only good substring of length 3 is "xyz".
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function countGoodSubstrings(s: string): number {
  const list: string[] = [];
  const slidingWindowSize = 3;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    list.push(s.charAt(i));

    if (list.length > slidingWindowSize) {
      list.shift();
    }

    if (list.length === 3) {
      if (list[0] !== list[1] && list[0] !== list[2] && list[1] !== list[2]) {
        count++;
      }
    }
  }

  return count;
}
```

</details>

### 2. Longest Nice Substring

<details>
<summary><b>2. 	
Longest Nice Substring</b></summary>
<h1>Problem Statement</h1>
<p>
A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

```
Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function getNice(s: string): boolean {
  const lowercaseSet = new Set(s.toLowerCase());
  const originalSet = new Set(s);

  return lowercaseSet.size === Math.floor(originalSet.size / 2);
}

function longestNiceSubstring(s: string): string {
  let windowSize = s.length;

  while (windowSize) {
    for (let i = 0; i <= s.length - windowSize; i++) {
      const substring = s.substring(i, i + windowSize);

      if (getNice(substring)) {
        return substring;
      }
    }

    windowSize--;
  }

  return "";
}
```

</details>

### 3. Find the K-Beauty of a Number

<details>
<summary><b>3. 	
Find the K-Beauty of a Number</b></summary>
<h1>Problem Statement</h1>
<p>
The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

Note:

Leading zeros are allowed.
0 is not a divisor of any value.
A substring is a contiguous sequence of characters in a string.

```
Input: num = 240, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "24" from "240": 24 is a divisor of 240.
- "40" from "240": 40 is a divisor of 240.
Therefore, the k-beauty is 2.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function divisorSubstrings(num: number, k: number): number {
  const str = num.toString();
  let i = 0;
  let j = 0;
  const n = str.length;
  let ind = 0;

  while (j < n) {
    if (j - i + 1 < k) {
      // increment j till we get the window size
      j++;
    } else if (j - i + 1 === k) {
      // on hitting the window size
      // extract the window string and convert it to a number
      // check if it follows the given condition
      const s = str.substring(i, i + k);
      const subNum = parseInt(s, 10);
      if (subNum !== 0 && num % subNum === 0) {
        ind++;
      }

      // shift the window by incrementing i and j
      // remove the previous calculation by incrementing i
      i++;
      j++;
    }
  }

  return ind;
}
```

</details>

### 4. Minimum Recolors to Get K Consecutive Black Blocks

<details>
<summary><b>4. 	
Minimum Recolors to Get K Consecutive Black Blocks</b></summary>
<h1>Problem Statement</h1>
<p>
You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.

You are also given an integer k, which is the desired number of consecutive black blocks.

In one operation, you can recolor a white block such that it becomes a black block.

Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

```
Input: blocks = "WBBWWBBWBW", k = 7
Output: 3
Explanation:
One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
so that blocks = "BBBBBBBWBW".
It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
Therefore, we return 3.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function minimumRecolors(blocks: string, k: number): number {
  let back = 0;
  let front = 0;
  let count_w = 0;
  let ans = Number.MAX_SAFE_INTEGER;

  while (front < blocks.length) {
    if (blocks[front] === "W") {
      count_w++;
    }

    if (front - back + 1 === k) {
      ans = Math.min(ans, count_w);

      if (blocks[back] === "W") {
        count_w--;
      }

      back++;
    }

    front++;
  }

  return ans;
}
```

</details>

### 5. Minimum Difference Between Highest and Lowest of K Scores

<details>
<summary><b>5. 	
Minimum Difference Between Highest and Lowest of K Scores</b></summary>
<h1>Problem Statement</h1>
<p>
You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

Return the minimum possible difference.

```
Input: nums = [9,4,1,7], k = 2
Output: 2
Explanation: There are six ways to pick score(s) of two students:
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
- [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
The minimum possible difference is 2.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function minimumDifference(nums: number[], k: number): number {
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);

  let i = 0;
  let j = k - 1;
  let min = Number.MAX_SAFE_INTEGER;

  while (j < nums.length) {
    min = Math.min(min, nums[j] - nums[i]);
    i++;
    j++;
  }

  return min;
}
```

</details>

### 6. Contains Duplicate II

<details>
<summary><b>6. 	
Contains Duplicate II</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

```
Input: nums = [1,2,3,1], k = 3
Output: true

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums === null || nums.length < 2 || k < 1) {
    return false;
  }

  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i])! <= k) {
      return true;
    }
    map.set(nums[i], i);
  }

  return false;
}
```

</details>

### 7. Maximum Average Subarray I

<details>
<summary><b>7. 	
Maximum Average Subarray I</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

```
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function findMaxAverage(nums: number[], k: number): number {
  // This question will be solved by the sliding window technique.
  // First, we will take a window of size k and move it till the end.
  let sum = 0;
  let maxSum = 0;
  let i = 0;

  for (; i < k; i++) {
    // Calculate the sum for the first k values (initial window).
    sum += nums[i];
  }

  maxSum = sum;

  // Now slide the window, remove elements from the left and add from the right.
  // Make note of the max sum.
  let j = 0;
  while (i < nums.length) {
    sum -= nums[j++];
    sum += nums[i++];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
}
```

</details>

### 8. Longest Even Odd Subarray With Threshold

<details>
<summary><b>8. 	
 Longest Even Odd Subarray With Threshold</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a 0-indexed integer array nums and an integer threshold.

Find the length of the longest subarray of nums starting at index l and ending at index r (0 <= l <= r < nums.length) that satisfies the following conditions:

nums[l] % 2 == 0
For all indices i in the range [l, r - 1], nums[i] % 2 != nums[i + 1] % 2
For all indices i in the range [l, r], nums[i] <= threshold
Return an integer denoting the length of the longest such subarray.

Note: A subarray is a contiguous non-empty sequence of elements within an array.

```
Input: nums = [3,2,5,4], threshold = 5
Output: 3
Explanation: In this example, we can select the subarray that starts at l = 1 and ends at r = 3 => [2,5,4]. This subarray satisfies the conditions.
Hence, the answer is the length of the subarray, 3. We can show that 3 is the maximum possible achievable length.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let ans = 0;
  let i = 0;
  let last = Number.MAX_SAFE_INTEGER;

  while (i < nums.length) {
    if (nums[i] > threshold || (i > 0 && nums[i] % 2 === nums[i - 1] % 2)) {
      ans = Math.max(ans, i - last);
      last = Number.MAX_SAFE_INTEGER;
    }

    if (
      last === Number.MAX_SAFE_INTEGER &&
      nums[i] <= threshold &&
      nums[i] % 2 === 0
    ) {
      last = i;
    }

    i++;
  }

  ans = Math.max(ans, i - last);
  return ans;
}
```

</details>
