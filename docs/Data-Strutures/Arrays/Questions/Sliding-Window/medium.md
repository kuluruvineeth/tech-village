# Medium

### 1. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

<details>
<summary><b>1. 	
 Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

```
Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let cnt = 0; // cnt for count
  let s = 0; // s for sum of sliding window
  const t = k * threshold; // t is the minimum sum for a subarray of length k

  for (let i = 0; i < arr.length; i++) {
    s += arr[i]; // accumulative sum adding the current element

    if (i < k - 1) {
      continue; // Wait until we have a window of size k.
    }

    if (i > k - 1) {
      s -= arr[i - k]; // Accumulative sum subtracting the tail element.
    }

    if (s >= t) {
      cnt++; // Found one subarray with sum greater than or equal to t.
    }
  }

  return cnt;
}
```

</details>

### 2. Maximize the Confusion of an Exam

<details>
<summary><b>2. 	
Maximize the Confusion of an Exam</b></summary>
<h1>Problem Statement</h1>
<p>

A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).

You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:

Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.

```
Input: answerKey = "TTFF", k = 2
Output: 4
Explanation: We can replace both the 'F's with 'T's to make answerKey = "TTTT".
There are four consecutive 'T's.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxConsecutiveAnswers(s: string, k: number): number {
  let size = s.length;
  let left = 0;
  let res = 0;
  let cnt = 0;

  // Maximum substring of 'T' which contains k 'F'.
  for (let i = 0; i < size; i++) {
    if (s[i] === "F") {
      cnt++;
    }

    while (cnt > k) {
      if (s[left] === "F") {
        cnt--;
      }
      left++;
    }

    res = Math.max(i - left + 1, res);
  }

  // Maximum substring of 'F' which contains k 'T'.
  cnt = 0;
  left = 0;

  for (let i = 0; i < size; i++) {
    if (s[i] === "T") {
      cnt++;
    }

    while (cnt > k) {
      if (s[left] === "T") {
        cnt--;
      }
      left++;
    }

    res = Math.max(i - left + 1, res);
  }

  return res;
}
```

</details>

### 3. Longest Subarray of 1's After Deleting One Element

<details>
<summary><b>3. 	
Longest Subarray of 1's After Deleting One Element</b></summary>
<h1>Problem Statement</h1>
<p>

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

```
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function longestSubarray(A: number[]): number {
  let i = 0;
  let j = 0;
  let k = 1;
  let res = 0;

  for (j = 0; j < A.length; ++j) {
    if (A[j] === 0) {
      k--;
    }

    while (k < 0) {
      if (A[i] === 0) {
        k++;
      }
      i++;
    }

    res = Math.max(res, j - i);
  }

  return res;
}
```

</details>

### 4. Number of Substrings Containing All Three Characters

<details>
<summary><b>4. 	
Number of Substrings Containing All Three Characters</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

```
Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function numberOfSubstrings(s: string): number {
  // Use a dynamic sliding window with an auxiliary data structure
  const charFreqMap: Map<string, number> = new Map();
  let numSubstrings = 0;
  let leftWindowIdx = 0;

  // Basic window algorithm setup
  for (let rightWindowIdx = 0; rightWindowIdx < s.length; rightWindowIdx++) {
    // Increase the window size
    const rightChar = s.charAt(rightWindowIdx);

    // Add the frequency of characters to the map
    charFreqMap.set(rightChar, (charFreqMap.get(rightChar) || 0) + 1);

    // If there are at least three different characters, reduce the window size
    while (charFreqMap.size >= 3) {
      // Close the window and decrease the character count for the left-most character
      const leftChar = s.charAt(leftWindowIdx);
      charFreqMap.set(leftChar, charFreqMap.get(leftChar)! - 1);

      // Remove any characters with a count of 0
      if (charFreqMap.get(leftChar)! === 0) {
        charFreqMap.delete(leftChar);
      }

      // Close the window
      leftWindowIdx++;
    }

    // Each index after closing will contribute to the number of substrings after this index
    numSubstrings += leftWindowIdx;
  }

  return numSubstrings;
}
```

</details>

### 5. Count Complete Subarrays in an Array

<details>
<summary><b>5. 	
Count Complete Subarrays in an Array</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array nums consisting of positive integers.

We call a subarray of an array complete if the following condition is satisfied:

The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.
Return the number of complete subarrays.

A subarray is a contiguous non-empty part of an array.

```
Input: nums = [1,3,1,2,2]
Output: 4
Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function countCompleteSubarrays(nums: number[]): number {
  const mp = new Map<number, number>();
  const all = new Map<number, number>();

  for (const n of nums) {
    all.set(n, (all.get(n) || 0) + 1); // Put all elements to get the size of discrete elements
  }

  let front = 0;
  let back = 0;
  let ans = 0;

  while (front < nums.length) {
    mp.set(nums[front], (mp.get(nums[front]) || 0) + 1);

    while (back <= front && mp.size === all.size) {
      const value = mp.get(nums[back]) || 0;
      if (value === 1) {
        mp.delete(nums[back]); // Remove the entry from the Map
      } else {
        mp.set(nums[back], value - 1); // Update the count in the Map
      }

      back++;
      ans += nums.length - front; // Update the answer with the number of arrays possible starting at the pointer value of "back"
    }
    front++;
  }

  return ans;
}
```

</details>

### 6. Count Number of Nice Subarrays

<details>
<summary><b>6. 	
Count Number of Nice Subarrays</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

```
Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function numberOfSubarrays(nums: number[], k: number): number {
  let oddCount = 0;
  let res = 0;
  let i = 0;
  let count = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] % 2 === 1) {
      oddCount++;
      count = 0;
    }

    while (oddCount === k) {
      if (nums[i++] % 2 === 1) {
        oddCount--;
      }
      count++;
    }

    res += count;
  }

  return res;
}
```

</details>

### 7. Max Consecutive Ones III

<details>
<summary><b>7. 	
Max Consecutive Ones III</b></summary>
<h1>Problem Statement</h1>
<p>

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

```
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function longestOnes(nums: number[], k: number): number {
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    k -= nums[i++] === 1 ? 0 : 1;

    if (k < 0) {
      k += nums[j++] === 1 ? 0 : 1;
    }
  }

  return i - j;
}
```

</details>

### 8. Maximum Sum of Two Non-Overlapping Subarrays

<details>
<summary><b>8. 	
Maximum Sum of Two Non-Overlapping Subarrays</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums and two integers firstLen and secondLen, return the maximum sum of elements in two non-overlapping subarrays with lengths firstLen and secondLen.

The array with length firstLen could occur before or after the array with length secondLen, but they have to be non-overlapping.

A subarray is a contiguous part of an array.

```
Input: nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
Output: 20
Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function findMaxSum(
  prefixSums: number[],
  firstLen: number,
  secondLen: number
): number {
  let globalMax = prefixSums[firstLen + secondLen - 1];
  let max1 = prefixSums[firstLen - 1];

  for (let i = 0; i < prefixSums.length - firstLen - secondLen; i++) {
    const sum1 = prefixSums[i + firstLen] - prefixSums[i];
    const sum2 =
      prefixSums[i + firstLen + secondLen] - prefixSums[i + firstLen];
    max1 = Math.max(max1, sum1);
    globalMax = Math.max(globalMax, max1 + sum2);
  }

  return globalMax;
}

function maxSumTwoNoOverlap(
  nums: number[],
  firstLen: number,
  secondLen: number
): number {
  const prefixSums: number[] = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixSums[i] = nums[i];
    } else {
      prefixSums[i] = prefixSums[i - 1] + nums[i];
    }
  }

  const max1 = findMaxSum(prefixSums, firstLen, secondLen);
  const max2 = findMaxSum(prefixSums, secondLen, firstLen);

  return Math.max(max1, max2);
}
```

</details>

### 9. Maximum Number of Vowels in a Substring of Given Length

<details>
<summary><b>9. 	
Maximum Number of Vowels in a Substring of Given Length</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

```
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxVowels(s: string, k: number): number {
  let res = 0;
  let j = 0;
  let vowels = 0;

  for (let i = 0; i < s.length; i++) {
    vowels += "aeiou".includes(s[i]) ? 1 : 0;

    if (i - j + 1 > k) {
      vowels -= "aeiou".includes(s[j]) ? 1 : 0;
      j++;
    }

    if (i - j + 1 === k) {
      res = Math.max(res, vowels);
    }
  }

  return res;
}
```

</details>

### 10. Maximum Erasure Value

<details>
<summary><b>10. 	
Maximum Erasure Value</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

Return the maximum score you can get by erasing exactly one subarray.

An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

```
Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maximumUniqueSubarray(nums: number[]): number {
  const set = new Set<number>();
  let sum = 0;
  let ans = 0;
  let j = 0;
  let i = 0;

  while (i < nums.length && j < nums.length) {
    if (!set.has(nums[j])) {
      sum += nums[j];
      ans = Math.max(sum, ans);
      set.add(nums[j++]);
    } else {
      sum -= nums[i];
      set.delete(nums[i++]);
    }
  }

  return ans;
}
```

</details>

### 11. Grumpy Bookstore Owner

<details>
<summary><b>11. 	
Grumpy Bookstore Owner</b></summary>
<h1>Problem Statement</h1>
<p>

There is a bookstore owner that has a store open for n minutes. Every minute, some number of customers enter the store. You are given an integer array customers of length n where customers[i] is the number of the customer that enters the store at the start of the ith minute and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.

When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise, they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for minutes consecutive minutes, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

```
Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes.
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  let satisfied = 0;
  let maxMakeSatisfied = 0;

  for (let i = 0, winOfMakeSatisfied = 0; i < grumpy.length; ++i) {
    if (grumpy[i] === 0) {
      satisfied += customers[i];
    } else {
      winOfMakeSatisfied += customers[i];
    }

    if (i >= minutes) {
      winOfMakeSatisfied -= grumpy[i - minutes] * customers[i - minutes];
    }

    maxMakeSatisfied = Math.max(winOfMakeSatisfied, maxMakeSatisfied);
  }

  return satisfied + maxMakeSatisfied;
}
```

</details>

### 12. Binary Subarrays With Sum

<details>
<summary><b>12. 	
Binary Subarrays With Sum</b></summary>
<h1>Problem Statement</h1>
<p>

Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.

```
Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function atmostSubarray(nums: number[], goal: number): number {
  if (goal < 0) {
    return 0;
  }

  let sum = 0;
  let i = 0;
  let j = 0;
  let res = 0;

  while (j < nums.length) {
    sum += nums[j];

    while (sum > goal) {
      sum -= nums[i];
      i++;
    }

    res += j - i + 1;

    j++;
  }

  return res;
}

function numSubarraysWithSum(nums: number[], goal: number): number {
  return atmostSubarray(nums, goal) - atmostSubarray(nums, goal - 1);
}
```

</details>

### 13. Longest Repeating Character Replacement

<details>
<summary><b>13. 	
Longest Repeating Character Replacement</b></summary>
<h1>Problem Statement</h1>
<p>

GYou are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

```
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

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

### 14. Maximum Points You Can Obtain from Cards

<details>
<summary><b>14. 	
 Maximum Points You Can Obtain from Cards</b></summary>
<h1>Problem Statement</h1>
<p>

There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

```
Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxScore(cardPoints: number[], k: number): number {
  const size: number = cardPoints.length - k;
  let minSubArraySum: number = 0;
  let curr: number = 0;

  for (let i = 0; i < size; i++) {
    curr += cardPoints[i];
  }

  minSubArraySum = curr;

  for (let i = size; i < cardPoints.length; i++) {
    curr += cardPoints[i] - cardPoints[i - size];
    minSubArraySum = Math.min(minSubArraySum, curr);
  }

  return cardPoints.reduce((a, b) => a + b, 0) - minSubArraySum;
}
```

</details>

### 15. Maximum Number of Occurrences of a Substring

<details>
<summary><b>15. 	
 Maximum Number of Occurrences of a Substring</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s, return the maximum number of occurrences of any substring under the following rules:

The number of unique characters in the substring must be less than or equal to maxLetters.
The substring size must be between minSize and maxSize inclusive.

```
Input: s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
Output: 2
Explanation: Substring "aab" has 2 occurrences in the original string.
It satisfies the conditions, 2 unique letters and size 3 (between minSize and maxSize).

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxFreq(
  s: string,
  maxLetters: number,
  minSize: number,
  maxSize: number
): number {
  const cnt: number[] = Array(26).fill(0);
  const mp: Map<string, number> = new Map();
  let str = "";
  let unique = 0;
  let mx = 0;

  for (let i = 0; i < minSize; i++) {
    const charIndex = s.charCodeAt(i) - "a".charCodeAt(0);
    if (cnt[charIndex]++ === 0) {
      unique++;
    }
    str += s[i];
  }

  if (unique <= maxLetters) {
    mp.set(str, (mp.get(str) || 0) + 1);
    mx = Math.max(mx, mp.get(str)!);
  }

  for (let i = minSize; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - "a".charCodeAt(0);
    if (cnt[charIndex]++ === 0) {
      unique++;
    }

    const charIndexToRemove = s.charCodeAt(i - minSize) - "a".charCodeAt(0);
    if (--cnt[charIndexToRemove] === 0) {
      unique--;
    }

    str += s[i];
    str = str.slice(1);

    if (unique <= maxLetters) {
      mp.set(str, (mp.get(str) || 0) + 1);
      mx = Math.max(mx, mp.get(str)!);
    }
  }

  return mx;
}
```

</details>

### 16. Minimum Swaps to Group All 1's Together II

<details>
<summary><b>16. 	
 Minimum Swaps to Group All 1's Together II</b></summary>
<h1>Problem Statement</h1>
<p>

A swap is defined as taking two distinct positions in an array and swapping the values in them.

A circular array is defined as an array where we consider the first element and the last element to be adjacent.

Given a binary circular array nums, return the minimum number of swaps required to group all 1's present in the array together at any location.

```
Input: nums = [0,1,0,1,1,0,0]
Output: 1
Explanation: Here are a few of the ways to group all the 1's together:
[0,0,1,1,1,0,0] using 1 swap.
[0,1,1,1,0,0,0] using 1 swap.
[1,1,0,0,0,0,1] using 2 swaps (using the circular property of the array).
There is no way to group all 1's together with 0 swaps.
Thus, the minimum number of swaps required is 1.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function minSwaps(nums: number[]): number {
  let ones = 0;
  let x = 0;
  let onesInWindow = 0;
  let i = 0;
  const n = nums.length;

  ones = nums.filter((num) => num === 1).length;

  const nums2: number[] = new Array(n * 2);

  for (i = 0; i < n * 2; i++) {
    nums2[i] = nums[i % n];
  }

  for (i = 0; i < n * 2; i++) {
    if (i >= ones && nums2[i - ones] === 1) {
      x--;
    }
    if (nums2[i] === 1) {
      x++;
    }
    onesInWindow = Math.max(x, onesInWindow);
  }

  return ones - onesInWindow;
}
```

</details>

### 17. Maximum Length of Repeated Subarray

<details>
<summary><b>17. 	
 Maximum Length of Repeated Subarray</b></summary>
<h1>Problem Statement</h1>
<p>

Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

```
Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function findLength(nums1: number[], nums2: number[]): number {
  let res = 0;
  for (let i = 0; i < nums1.length + nums2.length - 1; i++) {
    // Calculate start1 and start2 positions
    const start1 = Math.max(0, nums1.length - i - 1);
    const start2 = Math.max(0, i - nums1.length + 1);
    let count = 0;

    for (
      let j = start1, k = start2;
      j < nums1.length && k < nums2.length;
      j++, k++
    ) {
      if (nums1[j] === nums2[k]) {
        count++;
      } else {
        count = 0;
      }
      res = Math.max(res, count);
    }
  }
  return res;
}
```

</details>

### 18. Minimum Consecutive Cards to Pick Up

<details>
<summary><b>18. 	
 Minimum Consecutive Cards to Pick Up</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

```
Input: cards = [3,4,2,3,4,7]
Output: 4
Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function minimumCardPickup(cards: number[]): number {
  const seen: Record<number, number> = {};
  const s = cards;
  let smallestCardLen = Number.MAX_SAFE_INTEGER;
  let start = 0;
  let end = 0;

  if (s.length === 0) {
    return 0;
  }

  while (end < s.length) {
    const c = s[end];

    if (c in seen) {
      // Invalid window, update start
      start = seen[c] + 1;
      smallestCardLen = Math.min(smallestCardLen, end - start + 1);
    }

    seen[c] = end;
    end++;
  }

  if (smallestCardLen === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return smallestCardLen + 1;
}
```

</details>

### 19. Find All Anagrams in a String

<details>
<summary><b>19. 	
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

### 20. Longest Nice Subarray

<details>
<summary><b>20. 	
Longest Nice Subarray</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array nums consisting of positive integers.

We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.

Return the length of the longest nice subarray.

A subarray is a contiguous part of an array.

Note that subarrays of length 1 are always considered nice.

```
Input: nums = [1,3,8,48,10]
Output: 3
Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
- 3 AND 8 = 0.
- 3 AND 48 = 0.
- 8 AND 48 = 0.
It can be proven that no longer nice subarray can be obtained, so we return 3.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function longestNiceSubarray(nums: number[]): number {
  let used = 0;
  let j = 0;
  let res = 0;

  for (let i = 0; i < nums.length; ++i) {
    while ((used & nums[i]) !== 0) {
      used ^= nums[j++];
    }
    used |= nums[i];
    res = Math.max(res, i - j + 1);
  }

  return res;
}
```

</details>

### 21. Get Equal Substrings Within Budget

<details>
<summary><b>21. 	
Get Equal Substrings Within Budget</b></summary>
<h1>Problem Statement</h1>
<p>

You are given two strings s and t of the same length and an integer maxCost.

You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).

Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.

```
Input: s = "abcd", t = "bcdf", maxCost = 3
Output: 3
Explanation: "abc" of s can change to "bcd".
That costs 3, so the maximum length is 3.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function equalSubstring(s: string, t: string, k: number): number {
  const n = s.length;
  let i = 0;
  let j = 0;

  for (j = 0; j < n; ++j) {
    k -= Math.abs(s.charCodeAt(j) - t.charCodeAt(j));
    if (k < 0) {
      k += Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
      ++i;
    }
  }

  return j - i;
}
```

</details>

### 22. Count the Number of Good Subarrays

<details>
<summary><b>22. 	
Count the Number of Good Subarrays</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums and an integer k, return the number of good subarrays of nums.

A subarray arr is good if it there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].

A subarray is a contiguous non-empty sequence of elements within an array.

```
Input: nums = [3,1,4,3,2,2,4], k = 2
Output: 4
Explanation: There are 4 different good subarrays:
- [3,1,4,3,2,2] that has 2 pairs.
- [3,1,4,3,2,2,4] that has 3 pairs.
- [1,4,3,2,2,4] that has 2 pairs.
- [4,3,2,2,4] that has 2 pairs.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function countGood(A: number[], k: number): number {
  let res = 0;
  const count: Map<number, number> = new Map();

  for (let i = 0, j = 0; j < A.length; ++j) {
    k -= count.get(A[j]) || 0;
    count.set(A[j], (count.get(A[j]) || 0) + 1);

    while (k <= 0) {
      count.set(A[i], (count.get(A[i]) || 0) - 1);
      k += count.get(A[i]) || 0;
      i++;
    }
    res += i;
  }

  return res;
}
```

</details>

### 23. Longest Substring Of All Vowels in Order

<details>
<summary><b>23. 	
 Longest Substring Of All Vowels in Order</b></summary>
<h1>Problem Statement</h1>
<p>

A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

A substring is a contiguous sequence of characters in a string.

```
Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function longestBeautifulSubstring(word: string): number {
  let longest = 0;
  const seen = new Set<string>();

  for (let lo = -1, hi = 0; hi < word.length; ++hi) {
    if (hi > 0 && word.charAt(hi - 1) > word.charAt(hi)) {
      seen.clear();
      lo = hi - 1;
    }
    seen.add(word.charAt(hi));
    if (seen.size === 5) {
      longest = Math.max(longest, hi - lo);
    }
  }

  return longest;
}
```

</details>

### 24. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

<details>
<summary><b>24. 	
 Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

```
Input: nums = [8,2,4,7], limit = 4
Output: 2
Explanation: All subarrays are:
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4.
Therefore, the size of the longest subarray is 2.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function longestSubarray(nums: number[], limit: number): number {
  const maxDeque: number[] = [];
  const minDeque: number[] = [];
  let res = 1;
  let l = 0;

  // Find the longest subarray for every right pointer by shrinking the left pointer
  for (let r = 0; r < nums.length; ++r) {
    // Update maxDeque with the new right pointer
    while (maxDeque.length > 0 && maxDeque[maxDeque.length - 1] < nums[r]) {
      maxDeque.pop();
    }
    maxDeque.push(nums[r]);

    // Update minDeque with the new right pointer
    while (minDeque.length > 0 && minDeque[minDeque.length - 1] > nums[r]) {
      minDeque.pop();
    }
    minDeque.push(nums[r]);

    // Shrink the left pointer if it exceeds the limit
    while (maxDeque[0] - minDeque[0] > limit) {
      if (maxDeque[0] === nums[l]) maxDeque.shift();
      if (minDeque[0] === nums[l]) minDeque.shift();
      ++l; // Shrink it!
    }

    // Update res
    res = Math.max(res, r - l + 1);
  }

  return res;
}
```

</details>

### 25. Repeated DNA Sequences

<details>
<summary><b>25. 	
Repeated DNA Sequences</b></summary>
<h1>Problem Statement</h1>
<p>

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

```
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function findRepeatedDnaSequences(s: string): string[] {
  const ans: string[] = [];
  const m: Map<string, number> = new Map();
  const n: number = s.length;
  let i: number = 0;
  let j: number = 9; // window size = 10

  while (j < n) {
    const substr: string = s.substring(i, j + 1);
    m.set(substr, (m.get(substr) || 0) + 1); // store the string from i to j in the map
    i++; // slide the window one index right to maintain window size = 10
    j++;
  }

  for (const [key, value] of m.entries()) {
    if (value > 1) {
      ans.push(key);
    }
  }

  return ans;
}
```

</details>

### 26. K Radius Subarray Averages

<details>
<summary><b>26. 	
K Radius Subarray Averages</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a 0-indexed array nums of n integers, and an integer k.

The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.

The average of x elements is the sum of the x elements divided by x, using integer division. The integer division truncates toward zero, which means losing its fractional part.

For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.

```
Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
Output: [-1,-1,-1,5,4,4,-1,-1,-1]
Explanation:
- avg[0], avg[1], and avg[2] are -1 because there are less than k elements before each index.
- The sum of the subarray centered at index 3 with radius 3 is: 7 + 4 + 3 + 9 + 1 + 8 + 5 = 37.
  Using integer division, avg[3] = 37 / 7 = 5.
- For the subarray centered at index 4, avg[4] = (4 + 3 + 9 + 1 + 8 + 5 + 2) / 7 = 4.
- For the subarray centered at index 5, avg[5] = (3 + 9 + 1 + 8 + 5 + 2 + 6) / 7 = 4.
- avg[6], avg[7], and avg[8] are -1 because there are less than k elements after each index.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function getAverages(nums: number[], k: number): number[] {
  const res: number[] = new Array(nums.length).fill(-1);

  let left = 0;
  let curWindowSum = 0;
  const diameter = 2 * k + 1;

  for (let right = 0; right < nums.length; right++) {
    curWindowSum += nums[right];

    if (right - left + 1 >= diameter) {
      res[left + k] = Math.floor(curWindowSum / diameter);
      curWindowSum -= nums[left];
      left++;
    }
  }

  return res;
}
```

</details>

### 27. Longest Turbulent Subarray

<details>
<summary><b>27. 	
Longest Turbulent Subarray</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.
Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd.

```
Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxTurbulenceSize(arr: number[]): number {
  let n: number = arr.length;
  let i: number = 0;
  let j: number = 0;
  let ans: number = 1;
  let flag: boolean = true;

  while (j + 1 < n) {
    if ((arr[j] > arr[j + 1] && flag) || (arr[j] < arr[j + 1] && !flag)) {
      flag = !flag;
      ans = Math.max(ans, j - i + 2);
      j++;
    } else if (
      (arr[j] < arr[j + 1] && flag) ||
      (arr[j] > arr[j + 1] && !flag)
    ) {
      flag = !flag;
      i = j;
    } else {
      j++;
      i = j;
    }
  }

  return ans;
}
```

</details>

### 28. Find K Closest Elements

<details>
<summary><b>28. 	
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

```typescript
function findClosestElements(arr: number[], k: number, x: number): number[] {
  const soln: number[] = [];
  let sum: number = 0;
  let pt: number = 0;

  for (let i = 0; i < k; i++) {
    sum += Math.abs(arr[i] - x);
  }

  let temp: number = sum;

  for (let i = k; i < arr.length; i++) {
    // Removing the first element of the window
    sum -= Math.abs(arr[i - k] - x);
    // Adding the last element of the window
    sum += Math.abs(arr[i] - x);
    // Finding the window whose elements are closest!!!
    if (sum < temp) {
      temp = sum;
      pt = i - k + 1;
    }
  }

  while (k--) {
    soln.push(arr[pt++]);
  }

  return soln;
}
```

</details>

### 29. Minimum Size Subarray Sum

<details>
<summary><b>29. 	
Minimum Size Subarray Sum</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

```
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function minSubArrayLen(s: number, A: number[]): number {
  let i: number = 0;
  const n: number = A.length;
  let res: number = n + 1;

  for (let j: number = 0; j < n; ++j) {
    s -= A[j];
    while (s <= 0) {
      res = Math.min(res, j - i + 1);
      s += A[i++];
    }
  }

  return res % (n + 1);
}
```

</details>

### 30. Subarray Product Less Than K

<details>
<summary><b>30. 	
Subarray Product Less Than K</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

```
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;

  let prod: number = 1;
  let res: number = 0;
  let left: number = 0;

  for (let right: number = 0; right < nums.length; right++) {
    prod *= nums[right];

    while (prod >= k) {
      prod /= nums[left];
      left++;
    }

    res += right - left + 1;
  }

  return res;
}
```

</details>

### 31. New 21 Game

<details>
<summary><b>31. 	
New 21 Game</b></summary>
<h1>Problem Statement</h1>
<p>

Alice plays the following game, loosely based on the card game "21".

Alice starts with 0 points and draws numbers while she has less than k points. During each draw, she gains an integer number of points randomly from the range [1, maxPts], where maxPts is an integer. Each draw is independent and the outcomes have equal probabilities.

Alice stops drawing numbers when she gets k or more points.

Return the probability that Alice has n or fewer points.

Answers within 10-5 of the actual answer are considered accepted.

```
Input: n = 10, k = 1, maxPts = 10
Output: 1.00000
Explanation: Alice gets a single card, then stops.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function new21Game(n: number, k: number, mp: number): number {
  if (k === 0 || n > k + mp) return 1;
  const dp: number[] = new Array(n + 1).fill(0.0);
  dp[0] = 1;
  let ans: number = 0.0;
  let ps: number = 1;

  for (let i = 1; i <= n; i++) {
    dp[i] = ps / mp;
    if (i < k) ps += dp[i];
    else ans += ps / mp;
    if (i - mp >= 0) ps -= dp[i - mp];
  }

  return ans;
}
```

</details>

### 32. Longest Substring with At Least K Repeating Characters

<details>
<summary><b>32. 	
 Longest Substring with At Least K Repeating Characters</b></summary>
<h1>Problem Statement</h1>
<p>

Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

if no such substring exists, return 0.

```
Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function longestSubstring(s: string, k: number): number {
  let uniqueLetterMax = new Set(s).size;
  let max = 0;

  for (let i = 1; i <= uniqueLetterMax; i++) {
    let right = 0;
    let left = 0;
    let map = new Map();
    let currUnique = 0;
    let kCount = 0;

    while (right < s.length) {
      map.set(s[right], (map.get(s[right]) || 0) + 1);

      if (map.get(s[right]) === 1) currUnique++;

      if (map.get(s[right]) === k) kCount++;

      while (currUnique > i) {
        if (map.get(s[left]) === k) kCount--;

        map.set(s[left], map.get(s[left]) - 1);

        if (map.get(s[left]) === 0) currUnique--;

        left++;
      }

      if (currUnique === kCount) max = Math.max(max, right - left + 1);

      right++;
    }
  }

  return max;
}
```

</details>

### 33. Swap For Longest Repeated Character Substring

<details>
<summary><b>33. 	
 Swap For Longest Repeated Character Substring</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a string text. You can swap two of the characters in the text.

Return the length of the longest substring with repeated characters.

```
Input: text = "ababa"
Output: 3
Explanation: We can swap the first 'b' with the last 'a', or the last 'b' with the first 'a'. Then, the longest repeated character substring is "aaa" with length 3.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function good(w: Map<string, number>, m: Map<string, number>): boolean {
  if (w.size === 1) return true;
  if (w.size > 2) return false;
  let a = "#";
  let b = "";
  for (const key of w.keys()) {
    if (a === "#") {
      a = key;
    } else {
      b = key;
    }
  }
  if ((w.get(a) === 1 && m.has(b)) || (w.get(b) === 1 && m.has(a))) return true;
  return false;
}

function maxRepOpt1(text: string): number {
  const m = new Map<string, number>();
  const w = new Map<string, number>();
  for (const c of text) {
    if (!m.has(c)) {
      m.set(c, 0);
    }
    m.set(c, m.get(c)! + 1);
  }

  const n = text.length;
  let i = 0;
  let ans = 0;

  for (let j = 0; j < n; j++) {
    if (!w.has(text[j])) {
      w.set(text[j], 0);
    }
    w.set(text[j], w.get(text[j])! + 1);
    m.set(text[j], m.get(text[j])! - 1);

    if (m.get(text[j]) === 0) {
      m.delete(text[j]);
    }

    while (!good(w, m)) {
      w.set(text[i], w.get(text[i])! - 1);
      m.set(text[i], (m.get(text[i]) || 0) + 1);

      if (w.get(text[i]) === 0) {
        w.delete(text[i]);
      }

      i++;
    }

    ans = Math.max(ans, j - i + 1);
  }

  return ans;
}
```

</details>

### 34. Permutation in String

<details>
<summary><b>34. 	
 Permutation in String</b></summary>
<h1>Problem Statement</h1>
<p>

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function areArraysEqual(a: number[], b: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function checkInclusion(s1: string, s2: string): boolean {
  if (s2.length < s1.length) return false;
  const freqS1: number[] = new Array(26).fill(0);

  for (const c of s1) freqS1[c.charCodeAt(0) - "a".charCodeAt(0)]++;

  const freqS2: number[] = new Array(26).fill(0);
  let i = 0;
  let j = 0;

  while (j < s2.length) {
    freqS2[s2.charCodeAt(j) - "a".charCodeAt(0)]++;

    if (j - i + 1 === s1.length) {
      if (areArraysEqual(freqS1, freqS2)) return true;
    }

    if (j - i + 1 < s1.length) j++;
    else {
      freqS2[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
      i++;
      j++;
    }
  }
  return false;
}
```

</details>

### 35. Fruit Into Baskets

<details>
<summary><b>35. 	
  Fruit Into Baskets</b></summary>
<h1>Problem Statement</h1>
<p>

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

```
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function totalFruit(fruits: number[]): number {
  const n: number = fruits.length;
  const m: Map<number, number> = new Map<number, number>();
  let i: number = 0;
  let j: number = 0;
  let ans: number = 0;

  while (j < n) {
    m.set(fruits[j], (m.get(fruits[j]) || 0) + 1);

    if (m.size > 2) {
      while (m.size > 2) {
        m.set(fruits[i], (m.get(fruits[i]) || 0) - 1);
        if (m.get(fruits[i]) === 0) m.delete(fruits[i]);
        i++;
      }
      j++;
    } else {
      ans = Math.max(ans, j - i + 1);
      j++;
    }
  }

  return ans;
}
```

</details>

### 36. Smallest Subarrays With Maximum Bitwise OR

<details>
<summary><b>36. 	
  Smallest Subarrays With Maximum Bitwise OR</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a 0-indexed array nums of length n, consisting of non-negative integers. For each index i from 0 to n - 1, you must determine the size of the minimum sized non-empty subarray of nums starting at i (inclusive) that has the maximum possible bitwise OR.

In other words, let Bij be the bitwise OR of the subarray nums[i...j]. You need to find the smallest subarray starting at i, such that bitwise OR of this subarray is equal to max(Bik) where i <= k <= n - 1.
The bitwise OR of an array is the bitwise OR of all the numbers in it.

Return an integer array answer of size n where answer[i] is the length of the minimum sized subarray starting at i with maximum bitwise OR.

A subarray is a contiguous non-empty sequence of elements within an array.

```
Input: nums = [1,0,2,1,3]
Output: [3,3,2,2,1]
Explanation:
The maximum possible bitwise OR starting at any index is 3.
- Starting at index 0, the shortest subarray that yields it is [1,0,2].
- Starting at index 1, the shortest subarray that yields the maximum bitwise OR is [0,2,1].
- Starting at index 2, the shortest subarray that yields the maximum bitwise OR is [2,1].
- Starting at index 3, the shortest subarray that yields the maximum bitwise OR is [1,3].
- Starting at index 4, the shortest subarray that yields the maximum bitwise OR is [3].
Therefore, we return [3,3,2,2,1].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function check(maxiv: number[], len: number, vis: number[]): boolean {
  for (let i = 0; i <= len; i++) {
    if (maxiv[i] !== 0 && vis[i] === 0) return false;
  }
  return true;
}

function add(a: number, len: number, vis: number[]): void {
  for (let i = 0; i <= len; i++) {
    if (((a >> i) & 1) === 1) vis[i]++;
  }
}

function addmaxi(a: number, len: number, maxiv: number[]): void {
  for (let i = 0; i <= len; i++) {
    if (((a >> i) & 1) === 1) maxiv[i]++;
  }
}

function clear(a: number, len: number, vis: number[]): void {
  for (let i = 0; i <= len; i++) {
    if (((a >> i) & 1) === 1) vis[i]--;
  }
}

function clearfrom(a: number, len: number, maxiv: number[]): void {
  for (let i = 0; i <= len; i++) {
    if (((a >> i) & 1) === 1) maxiv[i]--;
  }
}

function empty(maxiv: number[], len: number): boolean {
  for (let i = 0; i <= len; i++) {
    if (maxiv[i] !== 0) return false;
  }
  return true;
}

function smallestSubarrays(nums: number[]): number[] {
  // Calculate the maximum bits in nums
  let maxi = 0;
  for (const x of nums) maxi = maxi | x;

  const n = nums.length;
  let i = 0;
  let j = 0;
  let len: number;
  if (maxi !== 0) len = Math.floor(Math.log2(maxi));
  else len = 0;

  const maxiv: number[] = new Array(len + 1).fill(0);
  for (const x of nums) {
    addmaxi(x, len, maxiv);
  }

  // Checking visited bits
  const vis: number[] = new Array(len + 1).fill(0);

  // Returning ans
  const ans: number[] = new Array(n).fill(0);

  while (i < n && j < n) {
    // If maxiv is empty, then all elements after it are 0
    if (empty(maxiv, len)) j++;

    // Checking for window
    while (!check(maxiv, len, vis) && j < n) {
      add(nums[j], len, vis);
      j++;
    }

    if (j < n && check(maxiv, len, vis)) {
      ans[i] = j - i;
      clear(nums[i], len, vis);
      clearfrom(nums[i], len, maxiv);
      i++;
    }
  }

  // Remaining last elements which ended at n
  while (i < j) {
    ans[i] = j - i;
    clear(nums[i], len, vis);
    i++;
  }

  return ans;
}
```

</details>

### 37. Continuous Subarrays

<details>
<summary><b>37. 	
  Continuous Subarrays</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a 0-indexed integer array nums. A subarray of nums is called continuous if:

Let i, i + 1, ..., j be the indices in the subarray. Then, for each pair of indices i <= i1, i2 <= j, 0 <= |nums[i1] - nums[i2]| <= 2.
Return the total number of continuous subarrays.

A subarray is a contiguous non-empty sequence of elements within an array.

```
Input: nums = [5,4,2,4]
Output: 8
Explanation:
Continuous subarray of size 1: [5], [4], [2], [4].
Continuous subarray of size 2: [5,4], [4,2], [2,4].
Continuous subarray of size 3: [4,2,4].
Thereare no subarrys of size 4.
Total continuous subarrays = 4 + 3 + 1 = 8.
It can be shown that there are no more continuous subarrays.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function continuousSubarrays(nums: number[]): number {
  const window: Map<number, number> = new Map();
  const n: number = nums.length;
  let i: number = 0;
  let j: number = 0;
  let ans: number = 0;

  const max = (): number => {
    return Math.max(...Array.from(window.keys()));
  };

  const min = (): number => {
    return Math.min(...Array.from(window.keys()));
  };

  while (j < n) {
    window.set(nums[j], (window.get(nums[j]) || 0) + 1);

    while (window.size > 0 && max() - min() > 2) {
      window.set(nums[i], (window.get(nums[i]) || 0) - 1);

      if (window.get(nums[i]) === 0) {
        window.delete(nums[i]);
      }

      i++;
    }

    ans += j - i + 1;
    j++;
  }

  return ans;
}
```

</details>

### 38. Frequency of the Most Frequent Element

<details>
<summary><b>38. 	
  Frequency of the Most Frequent Element</b></summary>
<h1>Problem Statement</h1>
<p>

The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.

```
Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxFrequency(A: number[], k: number): number {
  A.sort((a, b) => a - b);
  let i = 0;
  const N = A.length;
  let ans = 1;
  let sum = 0;

  for (let j = 0; j < N; ++j) {
    sum += A[j];
    while ((j - i + 1) * A[j] - sum > k) {
      sum -= A[i++];
    }
    ans = Math.max(ans, j - i + 1);
  }

  return ans;
}
```

</details>

### 39. Minimum Number of Flips to Make the Binary String Alternating

<details>
<summary><b>39. 	
  Minimum Number of Flips to Make the Binary String Alternating</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a binary string s. You are allowed to perform two types of operations on the string in any sequence:

Type-1: Remove the character at the start of the string s and append it to the end of the string.
Type-2: Pick any character in s and flip its value, i.e., if its value is '0' it becomes '1' and vice-versa.
Return the minimum number of type-2 operations you need to perform such that s becomes alternating.

The string is called alternating if no two adjacent characters are equal.

For example, the strings "010" and "1010" are alternating, while the string "0100" is not.

```
Input: s = "111000"
Output: 2
Explanation: Use the first operation two times to make s = "100011".
Then, use the second operation on the third and sixth elements to make s = "101010".

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function minFlips(s: string): number {
  const n = s.length;
  s += s;
  let s1 = "";
  let s2 = "";

  for (let i = 0; i < s.length; i++) {
    s1 += i % 2 ? "0" : "1";
    s2 += i % 2 ? "1" : "0";
  }

  let ans1 = 0;
  let ans2 = 0;
  let ans = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < s.length; i++) {
    if (s1[i] !== s[i]) ++ans1;
    if (s2[i] !== s[i]) ++ans2;

    if (i >= n) {
      if (s1[i - n] !== s[i - n]) --ans1;
      if (s2[i - n] !== s[i - n]) --ans2;
    }

    if (i >= n - 1) {
      ans = Math.min(ans1, ans2, ans);
    }
  }

  return ans;
}
```

</details>

### 40. Replace the Substring for Balanced String

<details>
<summary><b>40. 	
  Replace the Substring for Balanced String</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a string s of length n containing only four kinds of characters: 'Q', 'W', 'E', and 'R'.

A string is said to be balanced if each of its characters appears n / 4 times where n is the length of the string.

Return the minimum length of the substring that can be replaced with any other string of the same length to make s balanced. If s is already balanced, return 0.

```
Input: s = "QWER"
Output: 0
Explanation: s is already balanced.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function balancedString(s: string): number {
  const count: number[] = new Array(128).fill(0);
  const n: number = s.length;
  let res: number = n;
  let i: number = 0;
  const k: number = Math.floor(n / 4);

  for (let j = 0; j < n; ++j) {
    ++count[s.charCodeAt(j)];
  }

  for (let j = 0; j < n; ++j) {
    --count[s.charCodeAt(j)];
    while (
      i < n &&
      count["Q".charCodeAt(0)] <= k &&
      count["W".charCodeAt(0)] <= k &&
      count["E".charCodeAt(0)] <= k &&
      count["R".charCodeAt(0)] <= k
    ) {
      res = Math.min(res, j - i + 1);
      ++count[s.charCodeAt(i++)];
    }
  }

  return res;
}
```

</details>

### 41. Minimum Operations to Reduce X to Zero

<details>
<summary><b>41. 	
  Minimum Operations to Reduce X to Zero</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

```
Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function minOperations(nums: number[], x: number): number {
  const totalSum: number = nums.reduce((acc, curr) => acc + curr, 0);
  const reqSum: number = totalSum - x;

  if (reqSum < 0) return -1;
  if (reqSum === 0) return nums.length;

  let sum: number = 0;
  let start: number = 0;
  let end: number = 0;
  let res: number = 0;
  const n: number = nums.length;

  // We just have to find the largest window with a sum equal to (totalSum - x)

  while (end < nums.length) {
    sum += nums[end];

    while (sum > reqSum) {
      sum -= nums[start];
      start++;
    }

    if (sum === reqSum) res = Math.max(res, end - start + 1);
    end++;
  }

  return res === 0 ? -1 : n - res;
}
```

</details>

### 42. Find Two Non-overlapping Sub-arrays Each With Target Sum

<details>
<summary><b>42. 	
  Find Two Non-overlapping Sub-arrays Each With Target Sum</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array of integers arr and an integer target.

You have to find two non-overlapping sub-arrays of arr each with a sum equal target. There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum.

Return the minimum sum of the lengths of the two required sub-arrays, or return -1 if you cannot find such two sub-arrays.

```
Input: arr = [3,2,2,4,3], target = 3
Output: 2
Explanation: Only two sub-arrays have sum = 3 ([3] and [3]). The sum of their lengths is 2.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function minSumOfLengths(arr: number[], target: number): number {
  let sum = 0;
  const n = arr.length;
  let ans = Number.MAX_VALUE;
  let len = Number.MAX_VALUE;
  const minLen: number[] = new Array(n).fill(Number.MAX_VALUE);
  let start = 0;

  for (let end = 0; end < n; end++) {
    sum += arr[end];

    // Shrink the window
    while (sum > target) {
      sum -= arr[start];
      start++;
    }

    if (sum === target) {
      // Update the minLen
      const curLen = end - start + 1;

      if (start > 0 && minLen[start - 1] !== Number.MAX_VALUE) {
        ans = Math.min(ans, curLen + minLen[start - 1]);
      }

      len = Math.min(curLen, len);
    }

    minLen[end] = len;
  }

  return ans === Number.MAX_VALUE ? -1 : ans;
}
```

</details>

### 43. Maximum Beauty of an Array After Applying Operation

<details>
<summary><b>43. 	
  Maximum Beauty of an Array After Applying Operation</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a 0-indexed array nums and a non-negative integer k.

In one operation, you can do the following:

Choose an index i that hasn't been chosen before from the range [0, nums.length - 1].
Replace nums[i] with any integer from the range [nums[i] - k, nums[i] + k].
The beauty of the array is the length of the longest subsequence consisting of equal elements.

Return the maximum possible beauty of the array nums after applying the operation any number of times.

Note that you can apply the operation to each index only once.

A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the order of the remaining elements.

```
Input: nums = [4,6,1,2], k = 2
Output: 3
Explanation: In this example, we apply the following operations:
- Choose index 1, replace it with 4 (from range [4,8]), nums = [4,4,1,2].
- Choose index 3, replace it with 4 (from range [0,4]), nums = [4,4,1,4].
After the applied operations, the beauty of the array nums is 3 (subsequence consisting of indices 0, 1, and 3).
It can be proven that 3 is the maximum possible length we can achieve.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maximumBeauty(v: number[], k: number): number {
  v.sort((a, b) => a - b);
  let startIndex = -1;
  let endIndex = 0;
  const n = v.length;
  let ans = 0;
  let startInterval = -1e7;
  let endInterval = -1e7;

  for (endIndex = 0; endIndex < n; endIndex++) {
    while (v[endIndex] - k > endInterval) {
      startIndex += 1;
      startInterval = v[startIndex] - k;
      endInterval = v[startIndex] + k;
    }

    ans = Math.max(ans, endIndex - startIndex + 1);
  }

  return ans;
}
```

</details>

### 44. Maximum Sum of Almost Unique Subarray

<details>
<summary><b>44. 	
  Maximum Sum of Almost Unique Subarray</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an integer array nums and two positive integers m and k.

Return the maximum sum out of all almost unique subarrays of length k of nums. If no such subarray exists, return 0.

A subarray of nums is almost unique if it contains at least m distinct elements.

A subarray is a contiguous non-empty sequence of elements within an array.

```
Input: nums = [2,6,7,3,1,7], m = 3, k = 4
Output: 18
Explanation: There are 3 almost unique subarrays of size k = 4. These subarrays are [2, 6, 7, 3], [6, 7, 3, 1], and [7, 3, 1, 7]. Among these subarrays, the one with the maximum sum is [2, 6, 7, 3] which has a sum of 18.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxSum(nums: number[], m: number, k: number): number {
  const mp = new Map<number, number>();
  let res = 0;
  let i = 0;
  let j = 0;
  let tmp = 0;

  while (j < nums.length) {
    tmp += nums[j];
    if (mp.has(nums[j])) {
      mp.set(nums[j], mp.get(nums[j]) + 1);
    } else {
      mp.set(nums[j], 1);
    }

    while (j - i + 1 > k) {
      if (mp.has(nums[i])) {
        mp.set(nums[i], mp.get(nums[i]) - 1);
        if (mp.get(nums[i]) === 0) {
          mp.delete(nums[i]);
        }
      }
      tmp -= nums[i];
      i++;
    }

    if (j - i + 1 === k) {
      if (mp.size >= m) {
        res = Math.max(res, tmp);
      }
    }

    j++;
  }

  return res;
}
```

</details>

### 45. Find the Longest Semi-Repetitive Substring

<details>
<summary><b>45. 	
  Find the Longest Semi-Repetitive Substring</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a 0-indexed string s that consists of digits from 0 to 9.

A string t is called a semi-repetitive if there is at most one consecutive pair of the same digits inside t. For example, 0010, 002020, 0123, 2002, and 54944 are semi-repetitive while 00101022, and 1101234883 are not.

Return the length of the longest semi-repetitive substring inside s.

A substring is a contiguous non-empty sequence of characters within a string.

```
Input: s = "52233"
Output: 4
Explanation: The longest semi-repetitive substring is "5223", which starts at i = 0 and ends at j = 3.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function longestSemiRepetitiveSubstring(s: string): number {
  let i = 0;
  let j = 0;
  let max = 0;
  let c = 0;

  while (j < s.length - 1) {
    if (s.charAt(j) === s.charAt(j + 1)) {
      c++;
    }

    while (c >= 2) {
      max = Math.max(max, j - i + 1);

      if (s.charAt(i) === s.charAt(i + 1)) {
        c--;
      }

      i++;
    }

    j++;
  }

  return Math.max(max, j - i + 1);
}
```

</details>

### 46. Take K of Each Character From Left and Right

<details>
<summary><b>46. 	
  Take K of Each Character From Left and Right</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative integer k. Each minute, you may take either the leftmost character of s, or the rightmost character of s.

Return the minimum number of minutes needed for you to take at least k of each character, or return -1 if it is not possible to take k of each character.

```
Input: s = "aabaaaacaabc", k = 2
Output: 8
Explanation:
Take three characters from the left of s. You now have two 'a' characters, and one 'b' character.
Take five characters from the right of s. You now have four 'a' characters, two 'b' characters, and two 'c' characters.
A total of 3 + 5 = 8 minutes is needed.
It can be proven that 8 is the minimum number of minutes needed.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function valid(arr: number[], k: number): boolean {
  if (arr[0] < k || arr[1] < k || arr[2] < k) return false;
  return true;
}

function takeCharacters(s: string, k: number): number {
  const arr: number[] = [0, 0, 0];
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  if (arr[0] < k || arr[1] < k || arr[2] < k) return -1;

  let i = s.length - 1;
  let j = s.length - 1;
  let sum = arr[0] + arr[1] + arr[2];
  let mini = Number.MAX_SAFE_INTEGER;

  while (i >= 0 && j >= 0) {
    arr[s.charCodeAt(i) - "a".charCodeAt(0)]--;
    i--;

    while (!valid(arr, k) && j >= 0) {
      arr[s.charCodeAt(j) - "a".charCodeAt(0)]++;
      j--;
    }

    sum = arr[0] + arr[1] + arr[2];
    mini = Math.min(sum, mini);
  }

  return mini;
}
```

</details>

### 47. Longest Substring Without Repeating Characters

<details>
<summary><b>47. 	
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

```typescript
function lengthOfLongestSubstring(s: string): number {
  let seen = new Set<string>();
  let longest = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    while (seen.has(s[r])) {
      seen.delete(s[l]);
      l++;
    }
    seen.add(s[r]);
    longest = Math.max(longest, r - l + 1);
  }
  return longest;
}
```

</details>

### 48. Find the Longest Equal Subarray

<details>
<summary><b>48. 	
   Find the Longest Equal Subarray</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a 0-indexed integer array nums and an integer k.

A subarray is called equal if all of its elements are equal. Note that the empty subarray is an equal subarray.

Return the length of the longest possible equal subarray after deleting at most k elements from nums.

A subarray is a contiguous, possibly empty sequence of elements within an array.

```
Input: nums = [1,3,2,3,1,3], k = 3
Output: 3
Explanation: It's optimal to delete the elements at index 2 and index 4.
After deleting them, nums becomes equal to [1, 3, 3, 3].
The longest equal subarray starts at i = 1 and ends at j = 3 with length equal to 3.
It can be proven that no longer equal subarrays can be created.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function longestEqualSubarray(A: number[], k: number): number {
  let maxf = 0;
  let i = 0;
  const n = A.length;
  const count = new Map<number, number>();

  for (let j = 0; j < n; j++) {
    maxf = Math.max(maxf, (count.get(A[j]) || 0) + 1);
    count.set(A[j], (count.get(A[j]) || 0) + 1);

    if (j - i + 1 - maxf > k) {
      count.set(A[i], (count.get(A[i]) || 0) - 1);
      i++;
    }
  }

  return maxf;
}
```

</details>

### 49. Maximum Sum of Distinct Subarrays With Length K

<details>
<summary><b>49. 	
   Maximum Sum of Distinct Subarrays With Length K</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.

```
Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maximumSubarraySum(A: number[], k: number): number {
  const mp = new Map<number, number>();
  let mx = 0;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    mp.set(A[i], (mp.get(A[i]) || 0) + 1);

    if (i >= k - 1) {
      if (mp.size === k) {
        mx = Math.max(mx, sum);
      }
      sum -= A[i - k + 1];
      if (mp.get(A[i - k + 1]) === 1) {
        mp.delete(A[i - k + 1]);
      } else {
        mp.set(A[i - k + 1], (mp.get(A[i - k + 1]) || 0) - 1);
      }
    }
  }

  return mx;
}
```

</details>

### 50. Maximize Win From Two Segments

<details>
<summary><b>50. 	
   Maximize Win From Two Segments</b></summary>
<h1>Problem Statement</h1>
<p>

There are some prizes on the X-axis. You are given an integer array prizePositions that is sorted in non-decreasing order, where prizePositions[i] is the position of the ith prize. There could be different prizes at the same position on the line. You are also given an integer k.

You are allowed to select two segments with integer endpoints. The length of each segment must be k. You will collect all prizes whose position falls within at least one of the two selected segments (including the endpoints of the segments). The two selected segments may intersect.

For example if k = 2, you can choose segments [1, 3] and [2, 4], and you will win any prize i that satisfies 1 <= prizePositions[i] <= 3 or 2 <= prizePositions[i] <= 4.
Return the maximum number of prizes you can win if you choose the two segments optimally.

```
Input: prizePositions = [1,1,2,2,3,3,5], k = 2
Output: 7
Explanation: In this example, you can win all 7 prizes by selecting two segments [1, 3] and [3, 5].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maximizeWin(nums: number[], k: number): number {
  const n = nums.length;
  let start = 0;
  let ans = 0;
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (nums[i] - nums[start] > k) {
      start++;
    }

    ans = Math.max(ans, i - start + 1 + (start > 0 ? dp[start - 1] : 0));
    dp[i] = Math.max(i > 0 ? dp[i - 1] : 0, i - start + 1);
  }

  return ans;
}
```

</details>

### 51. Sliding Subarray Beauty

<details>
<summary><b>51. 	
   Sliding Subarray Beauty</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums containing n integers, find the beauty of each subarray of size k.

The beauty of a subarray is the xth smallest integer in the subarray if it is negative, or 0 if there are fewer than x negative integers.

Return an integer array containing n - k + 1 integers, which denote the beauty of the subarrays in order from the first index in the array.

A subarray is a contiguous non-empty sequence of elements within an array.

```
Input: nums = [1,-1,-3,-2,3], k = 3, x = 2
Output: [-1,-2,-2]
Explanation: There are 3 subarrays with size k = 3.
The first subarray is [1, -1, -3] and the 2nd smallest negative integer is -1.
The second subarray is [-1, -3, -2] and the 2nd smallest negative integer is -2.
The third subarray is [-3, -2, 3] and the 2nd smallest negative integer is -2.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function getSubarrayBeauty(nums: number[], k: number, x: number): number[] {
  const n = nums.length;
  const freq: number[] = new Array(51).fill(0);
  const res: number[] = new Array(nums.length - k + 1);

  for (let i = 0, j = 0, idx = 0; i < n; i++) {
    if (nums[i] < 0) {
      freq[Math.abs(nums[i])]++;
    }

    if (i - j + 1 >= k) {
      let cnt = 0;
      for (let L = 50; L >= 1; L--) {
        cnt += freq[L];
        if (cnt >= x) {
          res[idx++] = -L;
          break;
        }
      }

      if (cnt < x) {
        res[idx++] = 0;
      }

      if (nums[j] < 0) {
        freq[Math.abs(nums[j])]--;
      }

      j++;
    }
  }

  return res;
}
```

</details>

### 52. Count Zero Request Servers

<details>
<summary><b>52. 	
   Count Zero Request Servers</b></summary>
<h1>Problem Statement</h1>
<p>
You are given an integer n denoting the total number of servers and a 2D 0-indexed integer array logs, where logs[i] = [server_id, time] denotes that the server with id server_id received a request at time time.

You are also given an integer x and a 0-indexed integer array queries.

Return a 0-indexed integer array arr of length queries.length where arr[i] represents the number of servers that did not receive any requests during the time interval [queries[i] - x, queries[i]].

Note that the time intervals are inclusive.

```
Input: n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]
Output: [1,2]
Explanation:
For queries[0]: The servers with ids 1 and 2 get requests in the duration of [5, 10]. Hence, only server 3 gets zero requests.
For queries[1]: Only the server with id 2 gets a request in duration of [6,11]. Hence, the servers with ids 1 and 3 are the only servers that do not receive any requests during that time period.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function countServers(
  n: number,
  logs: number[][],
  x: number,
  queries: number[]
): number[] {
  const m = logs.length;
  const vp: [number, number][] = [];

  for (const log of logs) {
    vp.push([log[1], log[0]]);
  }

  vp.sort((a, b) => a[0] - b[0]);

  const q = queries.length;
  const mp = new Map<number, number>();
  const ans: number[] = new Array(q).fill(0);
  const time: [number, number][] = [];

  for (let i = 0; i < q; i++) {
    time.push([queries[i], i]);
  }

  time.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let j = 0;

  for (const [curtime, ind] of time) {
    const start = Math.max(0, curtime - x);
    const end = curtime;

    while (j < m && vp[j][0] <= end) {
      if (!mp.has(vp[j][1])) {
        mp.set(vp[j][1], 0);
      }
      mp.set(vp[j][1], mp.get(vp[j][1])! + 1);
      j++;
    }

    while (i < m && vp[i][0] < start) {
      if (mp.has(vp[i][1])) {
        if (mp.get(vp[i][1]) === 1) {
          mp.delete(vp[i][1]);
        } else {
          mp.set(vp[i][1], mp.get(vp[i][1])! - 1);
        }
      }
      i++;
    }

    ans[ind] = n - mp.size;
  }

  return ans;
}
```

</details>

### 53. Jump Game VII

<details>
<summary><b>53. 	
   Jump Game VII</b></summary>
<h1>Problem Statement</h1>
<p>
You are given a 0-indexed binary string s and two integers minJump and maxJump. In the beginning, you are standing at index 0, which is equal to '0'. You can move from index i to index j if the following conditions are fulfilled:

i + minJump <= j <= min(i + maxJump, s.length - 1), and
s[j] == '0'.
Return true if you can reach index s.length - 1 in s, or false otherwise.

```
Input: s = "011010", minJump = 2, maxJump = 3
Output: true
Explanation:
In the first step, move from index 0 to index 3.
In the second step, move from index 3 to index 5.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function canReach(s: string, mi: number, ma: number): boolean {
  if (s.charAt(s.length - 1) === "1") {
    return false;
  }

  const dp: boolean[] = new Array(s.length);
  dp[0] = true;
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    if (i > ma) {
      count -= dp[i - ma - 1] ? 1 : 0;
    }

    if (i >= mi) {
      count += dp[i - mi] ? 1 : 0;
    }

    dp[i] = count > 0 && s.charAt(i) === "0";
  }

  return dp[dp.length - 1];
}
```

</details>
