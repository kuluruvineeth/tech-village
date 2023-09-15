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
