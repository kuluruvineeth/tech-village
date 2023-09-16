# Hard

### 1. Smallest Range Covering Elements from K Lists

<details>
<summary><b>1. 	
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

```typescript
function smallestRange(nums: number[][]): number[] {
  const ordered: [number, number][] = [];
  for (let k = 0; k < nums.length; k++) {
    for (const n of nums[k]) {
      ordered.push([n, k]);
    }
  }
  ordered.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let k = 0;
  const ans: number[] = [];
  const count: Map<number, number> = new Map();

  for (let j = 0; j < ordered.length; j++) {
    if (!count.has(ordered[j][1])) {
      count.set(ordered[j][1], 1);
      k++;
    } else {
      count.set(ordered[j][1], (count.get(ordered[j][1]) as number) + 1);
    }

    if (k === nums.length) {
      while ((count.get(ordered[i][1]) as number) > 1) {
        count.set(ordered[i][1], (count.get(ordered[i][1]) as number) - 1);
        i++;
      }

      if (ans.length === 0 || ans[1] - ans[0] > ordered[j][0] - ordered[i][0]) {
        ans[0] = ordered[i][0];
        ans[1] = ordered[j][0];
      }
    }
  }

  return ans;
}
```

</details>

### 2. Count Subarrays With Fixed Bounds

<details>
<summary><b>2. 	
Count Subarrays With Fixed Bounds</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an integer array nums and two integers minK and maxK.

A fixed-bound subarray of nums is a subarray that satisfies the following conditions:

The minimum value in the subarray is equal to minK.
The maximum value in the subarray is equal to maxK.
Return the number of fixed-bound subarrays.

A subarray is a contiguous part of an array.

```
Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function countSubarrays(A: number[], minK: number, maxK: number): number {
  let res = 0;
  let jbad = -1;
  let jmin = -1;
  let jmax = -1;
  const n = A.length;

  for (let i = 0; i < n; ++i) {
    if (A[i] < minK || A[i] > maxK) {
      jbad = i;
    }
    if (A[i] === minK) {
      jmin = i;
    }
    if (A[i] === maxK) {
      jmax = i;
    }
    res += Math.max(0, Math.min(jmin, jmax) - jbad);
  }

  return res;
}
```

</details>

### 3. Subarrays with K Different Integers

<details>
<summary><b>3. 	
Subarrays with K Different Integers</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.

```
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function subarraysWithKDistinct(A: number[], K: number): number {
  return atMostK(A, K) - atMostK(A, K - 1);
}

function atMostK(A: number[], K: number): number {
  let i = 0;
  let res = 0;
  const count = new Map<number, number>();

  for (let j = 0; j < A.length; ++j) {
    if (count.get(A[j]) === undefined || count.get(A[j]) === 0) {
      K--;
    }
    count.set(A[j], (count.get(A[j]) || 0) + 1);

    while (K < 0) {
      count.set(A[i], count.get(A[i]) - 1);
      if (count.get(A[i]) === 0) {
        K++;
      }
      i++;
    }

    res += j - i + 1;
  }

  return res;
}
```

</details>

### 4. Count Subarrays With Score Less Than K

<details>
<summary><b>4. 	
Count Subarrays With Score Less Than K</b></summary>
<h1>Problem Statement</h1>
<p>

The score of an array is defined as the product of its sum and its length.

For example, the score of [1, 2, 3, 4, 5] is (1 + 2 + 3 + 4 + 5) \* 5 = 75.
Given a positive integer array nums and an integer k, return the number of non-empty subarrays of nums whose score is strictly less than k.

A subarray is a contiguous sequence of elements within an array.

```
Input: nums = [2,1,4,3,5], k = 10
Output: 6
Explanation:
The 6 subarrays having scores less than 10 are:
- [2] with score 2 * 1 = 2.
- [1] with score 1 * 1 = 1.
- [4] with score 4 * 1 = 4.
- [3] with score 3 * 1 = 3.
- [5] with score 5 * 1 = 5.
- [2,1] with score (2 + 1) * 2 = 6.
Note that subarrays such as [1,4] and [4,3,5] are not considered because their scores are 10 and 36 respectively, while we need scores strictly less than 10.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function countSubarrays(nums: number[], k: number): number {
  let sum: number = 0;
  let res: number = 0;

  for (let i: number = 0, j: number = 0; i < nums.length; ++i) {
    sum += nums[i];
    while (sum * (i - j + 1) >= k) {
      sum -= nums[j++];
    }
    res += i - j + 1;
  }

  return res;
}
```

</details>

### 5. Minimum Number of K Consecutive Bit Flips

<details>
<summary><b>5. 	
 Minimum Number of K Consecutive Bit Flips</b></summary>
<h1>Problem Statement</h1>
<p>

You are given a binary array nums and an integer k.

A k-bit flip is choosing a subarray of length k from nums and simultaneously changing every 0 in the subarray to 1, and every 1 in the subarray to 0.

Return the minimum number of k-bit flips required so that there is no 0 in the array. If it is not possible, return -1.

A subarray is a contiguous part of an array.

```
Input: nums = [0,1,0], k = 1
Output: 2
Explanation: Flip nums[0], then flip nums[2].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function minKBitFlips(A: number[], K: number): number {
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      A[i] = -1; // Let 0 be -1.
    }
  }

  if (A.length < K) {
    return -1; // Trivial case
  }

  let head = 0;
  let tail = head + K - 1;
  let res = 0;
  let state = 1;

  while (head < A.length - 1) {
    // Move until tail reaches the end of A.
    while (tail < A.length - 1 && A[head] * state === 1) {
      // No flippings
      head++;
      tail++; // Move the window
      A[tail] *= state; // Update elements in the window
    }

    if (tail === A.length - 1) {
      break;
    }
    state *= -1; // Update the window state

    while (tail < A.length - 1 && A[head] * state === -1) {
      // Flip the window
      head++;
      tail++; // Move the window
      A[tail] *= -state; // Update elements in the window
    }

    res++; // Update the result
    if (tail === A.length - 1) {
      break;
    }
  }

  for (let i = head; i <= tail; i++) {
    // Check the final window
    if (A[i] !== A[head]) {
      return -1;
    }
  }

  res += A[head] * state === -1 ? 1 : 0;
  return res;
}
```

</details>

### 6. Constrained Subsequence Sum

<details>
<summary><b>6. 	
 Constrained Subsequence Sum</b></summary>
<h1>Problem Statement</h1>
<p>

Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence of that array such that for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied.

A subsequence of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order.

```
Input: nums = [10,2,-10,5,20], k = 2
Output: 37
Explanation: The subsequence is [10, 2, 5, 20].

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function constrainedSubsetSum(nums: number[], k: number): number {
  let ans = nums[nums.length - 1];
  const lis: [number, number][] = [];
  let i = nums.length - 1;

  while (i >= 0) {
    if (i === nums.length - 1) {
      lis.push([nums[i], i]);
    } else {
      if (lis[0][1] - i > k) {
        lis.shift();
        continue;
      }
      const a = Math.max(nums[i], nums[i] + lis[0][0]);
      ans = Math.max(ans, a);
      while (lis.length > 0 && lis[lis.length - 1][0] <= a) {
        lis.pop();
      }
      lis.push([a, i]);
    }
    i--;
  }

  return ans;
}
```

</details>

### 7. Sliding Window Maximum

<details>
<summary><b>7. 	
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
function maxSlidingWindow(nums: number[], k: number): number[] {
  const slides: number[] = [];
  const maxValues: number[] = [];

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (!slides.length || slides[0] < left) slides.shift();

    while (slides.length && nums[slides[slides.length - 1]] < nums[right])
      slides.pop();

    slides.push(right);

    if (right - left + 1 === k) {
      maxValues.push(nums[slides[0]]);
      left++;
    }
  }

  return maxValues;
}
```

</details>

### 8. Max Value of Equation

<details>
<summary><b>8. 	
Max Value of Equation</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array points containing the coordinates of points on a 2D plane, sorted by the x-values, where points[i] = [xi, yi] such that xi < xj for all 1 <= i < j <= points.length. You are also given an integer k.

Return the maximum value of the equation yi + yj + |xi - xj| where |xi - xj| <= k and 1 <= i < j <= points.length.

It is guaranteed that there exists at least one pair of points that satisfy the constraint |xi - xj| <= k.

```
Input: points = [[1,3],[2,0],[5,10],[6,-10]], k = 1
Output: 4
Explanation: The first two points satisfy the condition |xi - xj| <= 1 and if we calculate the equation we get 3 + 0 + |1 - 2| = 4. Third and fourth points also satisfy the condition and give a value of 10 + -10 + |5 - 6| = 1.
No other pairs satisfy the condition, so we return the max of 4 and 1.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
class Pair {
  idx: number;
  val: number;

  constructor(idx: number, val: number) {
    this.idx = idx;
    this.val = val;
  }
}

function findMaxValueOfEquation(points: number[][], k: number): number {
  const deque: Pair[] = [];
  let start = 0,
    end = 0;

  const maxXySum: number[] = new Array(points.length).fill(0);

  while (start < points.length - 1) {
    if (end === start) {
      end++;
    }

    if (deque.length && deque[0].idx === start) {
      deque.shift();
    }

    while (end < points.length && points[end][0] - points[start][0] <= k) {
      const xySum = points[end][0] + points[end][1];

      while (deque.length && deque[deque.length - 1].val < xySum) {
        deque.pop();
      }

      deque.push(new Pair(end, xySum));

      end++;
    }

    maxXySum[start] = deque.length ? deque[0].val : Number.MIN_SAFE_INTEGER;
    start++;
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < points.length - 1; i++) {
    if (maxXySum[i] === Number.MIN_SAFE_INTEGER) continue;
    max = Math.max(max, maxXySum[i] - points[i][0] + points[i][1]);
  }

  return max;
}
```

</details>

### 9. Minimum Adjacent Swaps for K Consecutive Ones

<details>
<summary><b>9. 	
Minimum Adjacent Swaps for K Consecutive Ones</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an integer array, nums, and an integer k. nums comprises of only 0's and 1's. In one move, you can choose two adjacent indices and swap their values.

Return the minimum number of moves required so that nums has k consecutive 1's.

```
Input: nums = [1,0,0,1,0,1], k = 2
Output: 1
Explanation: In 1 move, nums could be [1,0,0,0,1,1] and have 2 consecutive 1's.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function minMoves(nums: number[], k: number): number {
  const ones: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      ones.push(i - ones.length);
    }
  }

  let cur = 0;
  let med = Math.floor(k / 2);

  for (let i = 0; i < k; i++) {
    cur += Math.abs(ones[i] - ones[med]);
  }

  let res = cur;

  for (let i = 1; i < ones.length - k + 1; i++) {
    const newMed = Math.floor(k / 2) + i;

    if (k % 2 === 0) {
      cur += ones[newMed] - ones[med];
    }

    cur -= ones[med] - ones[i - 1];
    cur += ones[i + k - 1] - ones[newMed];
    med = newMed;
    res = Math.min(res, cur);
  }

  return res;
}
```

</details>

### 10. Minimum Window Substring

<details>
<summary><b>10. 	
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

```typescript
function minWindow(str: string, t: string): string {
  const n1: number = str.length;
  const n2: number = t.length;

  if (n1 < n2) {
    return "";
  }

  const h: Map<string, number> = new Map();

  for (const c of t) {
    h.set(c, (h.get(c) || 0) + 1);
  }

  let s: number = 0;
  let f: number = 0;
  let cnt: number = h.size;
  let minLen: number = Number.MAX_SAFE_INTEGER;
  let minS: number = 0;

  while (f < n1) {
    const c_f: string = str.charAt(f);

    if (h.has(c_f)) {
      h.set(c_f, (h.get(c_f) || 0) - 1);

      if (h.get(c_f) === 0) {
        cnt--;
      }
    }

    while (cnt === 0) {
      const len: number = f - s + 1;

      if (minLen > len) {
        minLen = len;
        minS = s;
      }

      const c_s: string = str.charAt(s);

      if (h.has(c_s)) {
        if (h.get(c_s) === 0) {
          cnt++;
        }

        h.set(c_s, (h.get(c_s) || 0) + 1);
      }

      s++;
    }

    f++;
  }

  if (minLen === Number.MAX_SAFE_INTEGER) {
    return "";
  }

  return str.substring(minS, minS + minLen);
}
```

</details>

### 11. Sliding Window Median

<details>
<summary><b>11. 	
Sliding Window Median</b></summary>
<h1>Problem Statement</h1>
<p>

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

For examples, if arr = [2,3,4], the median is 3.
For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.

```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
Explanation:
Window position                Median
---------------                -----
[1  3  -1] -3  5  3  6  7        1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7        3
 1  3  -1  -3 [5  3  6] 7        5
 1  3  -1  -3  5 [3  6  7]       6

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function medianSlidingWindow(nums: number[], k: number): number[] {
  function median(n: number[]): number {
    if (n.length % 2 !== 0) {
      const a = Math.floor(n.length / 2);
      return parseFloat(n[a].toFixed(1));
    } else {
      const a = n.length / 2;
      const b = a - 1;
      return parseFloat(((n[a] + n[b]) / 2).toFixed(1));
    }
  }

  const result: number[] = [];
  for (let i = 0; i <= nums.length - k; i++) {
    const window = nums.slice(i, i + k);
    window.sort((a, b) => a - b);
    result.push(median(window));
  }
  return result;
}
```

</details>

### 12. Maximum Number of Visible Points

<details>
<summary><b>12. 	
Maximum Number of Visible Points</b></summary>
<h1>Problem Statement</h1>
<p>

You are given an array points, an integer angle, and your location, where location = [posx, posy] and points[i] = [xi, yi] both denote integral coordinates on the X-Y plane.

Initially, you are facing directly east from your position. You cannot move from your position, but you can rotate. In other words, posx and posy cannot be changed. Your field of view in degrees is represented by angle, determining how wide you can see from any given view direction. Let d be the amount in degrees that you rotate counterclockwise. Then, your field of view is the inclusive range of angles [d - angle/2, d + angle/2].

You can see some set of points if, for each point, the angle formed by the point, your position, and the immediate east direction from your position is in your field of view.

There can be multiple points at one coordinate. There may be points at your location, and you can always see these points regardless of your rotation. Points do not obstruct your vision to other points.

Return the maximum number of points you can see.

```
Input: points = [[2,1],[2,2],[3,3]], angle = 90, location = [1,1]
Output: 3
Explanation: The shaded region represents your field of view. All points can be made visible in your field of view, including [3,3] even though [2,2] is in front and in the same line of sight.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function visiblePoints(
  points: number[][],
  angle: number,
  location: number[]
): number {
  const arr: number[] = [];
  let extra = 0;
  const [xx, yy] = location;

  for (const [x, y] of points) {
    if (x === xx && y === yy) {
      extra += 1;
      continue;
    }
    arr.push(Math.atan2(y - yy, x - xx));
  }

  arr.sort((a, b) => a - b);
  arr.push(...arr.map((x) => x + 2.0 * Math.PI));
  angle = (Math.PI * angle) / 180;

  let l = 0;
  let ans = 0;
  for (let r = 0; r < arr.length; r++) {
    while (arr[r] - arr[l] > angle) {
      l += 1;
    }
    ans = Math.max(ans, r - l + 1);
  }

  return ans + extra;
}
```

</details>

### 13. Maximum Fruits Harvested After at Most K Steps

<details>
<summary><b>13. 	
 Maximum Fruits Harvested After at Most K Steps</b></summary>
<h1>Problem Statement</h1>
<p>

Fruits are available at some positions on an infinite x-axis. You are given a 2D integer array fruits where fruits[i] = [positioni, amounti] depicts amounti fruits at the position positioni. fruits is already sorted by positioni in ascending order, and each positioni is unique.

You are also given an integer startPos and an integer k. Initially, you are at the position startPos. From any position, you can either walk to the left or right. It takes one step to move one unit on the x-axis, and you can walk at most k steps in total. For every position you reach, you harvest all the fruits at that position, and the fruits will disappear from that position.

Return the maximum total number of fruits you can harvest.

```
Input: fruits = [[2,8],[6,3],[8,6]], startPos = 5, k = 4
Output: 9
Explanation:
The optimal way is to:
- Move right to position 6 and harvest 3 fruits
- Move right to position 8 and harvest 6 fruits
You moved 3 steps and harvested 3 + 6 = 9 fruits in total.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function maxTotalFruits(f: number[][], pos: number, k: number): number {
  let l = 0;
  let sum = 0;
  let max_sum = 0;

  while (l < f.length && f[l][0] < pos - k) {
    l++;
  }

  for (let r = l; r < f.length && f[r][0] <= pos + k; r++) {
    sum += f[r][1];

    while (
      Math.min(pos - 2 * f[l][0] + f[r][0], 2 * f[r][0] - f[l][0] - pos) > k
    ) {
      sum -= f[l++][1];
    }

    max_sum = Math.max(max_sum, sum);
  }

  return max_sum;
}
```

</details>
