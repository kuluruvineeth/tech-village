# Easy

### 1. Count Pairs Whose Sum is Less than Target

<details>
<summary><b>1. 	
Count Pairs Whose Sum is Less than Target</b></summary>
<h1>Problem Statement</h1>
<p>

Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

```
Input: nums = [-1,1,2,3,1], target = 2
Output: 3
Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
- (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
- (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target
- (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function countPairs(nums: number[], target: number): number {
  nums.sort((a, b) => a - b); // Sort the array nums
  let count = 0; // Variable to store the count
  let left = 0; // Variable to store the left index
  let right = nums.length - 1; // Variable to store the right index

  while (left < right) {
    // Loop until left is less than right
    if (nums[left] + nums[right] < target) {
      // If nums[left] + nums[right] is less than target
      count += right - left; // Update the count
      left++; // Increment the left index
    } else {
      // Else
      right--; // Decrement the right index
    }
  }

  return count; // Return the count
}
```

</details>

### 2. Number of Arithmetic Triplets

<details>
<summary><b>2. 	
Number of Arithmetic Triplets</b></summary>
<h1>Problem Statement</h1>
<p>
You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
Return the number of unique arithmetic triplets.

```
Input: nums = [0,1,4,6,7,10], diff = 3
Output: 2
Explanation:
(1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
(2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function arithmeticTriplets(nums: number[], diff: number): number {
  const n = nums.length;
  let count = 0;
  let i = 0,
    j = 1,
    k = 2;

  while (i < n && j < n && k < n) {
    if (nums[j] - nums[i] < diff) {
      // diff is too small: increment j so that we get a larger diff
      j++;
    } else if (nums[j] - nums[i] > diff) {
      // diff is too big: increment i so that we get a smaller diff
      i++;
    } else {
      // We might have found a triple, so now check nums[k] - nums[j]
      if (nums[k] - nums[j] < diff) {
        // diff is too small
        k++;
      } else if (nums[k] - nums[j] > diff) {
        // diff is too big
        j++;
      } else {
        // Found a triple
        count++;
        // Increment k so that we get closer to breaking the loop
        // I'm actually not sure if this has to be k,
        // or if we could increment j instead
        k++;
      }
    }
  }
  return count;
}
```

</details>

### 3. Reverse Words in a String III

<details>
<summary><b>3. 	
Reverse Words in a String III</b></summary>
<h1>Problem Statement</h1>
<p>
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

```
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function reverseWords(s: string): string {
  // Split the input string by whitespace into an array of words.
  const words: string[] = s.split(" ");

  // Iterate through each word and reverse its characters.
  for (let i = 0; i < words.length; i++) {
    // Split each word into an array of characters.
    const chars: string[] = words[i].split("");
    let l: number = 0;
    let h: number = chars.length - 1;

    while (l < h) {
      // Reverse the characters.
      [chars[l], chars[h]] = [chars[h], chars[l]];
      l++;
      h--;
    }

    // Replace the original word with the reversed one.
    words[i] = chars.join("");
  }

  // Join the words array back into a single string with spaces and return it.
  return words.join(" ");
}
```

</details>

### 4. Lexicographically Smallest Palindrome

<details>
<summary><b>4. 	
Lexicographically Smallest Palindrome</b></summary>
<h1>Problem Statement</h1>
<p>
You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it. In one operation, you can replace a character in s with another lowercase English letter.

Your task is to make s a palindrome with the minimum number of operations possible. If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.

A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.

Return the resulting palindrome string.

```
Input: s = "egcfe"
Output: "efcfe"
Explanation: The minimum number of operations to make "egcfe" a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is "efcfe", by changing 'g'.
```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function makeSmallestPalindrome(s: string): string {
  let l: number = 0;
  let r: number = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      const c: string = s[l] < s[r] ? s[l] : s[r];
      s =
        s.substring(0, l) + c + s.substring(l + 1, r) + c + s.substring(r + 1);
    }
    l++;
    r--;
  }

  return s;
}
```

</details>

### 5. Flipping an Image

<details>
<summary><b>5. 	
Flipping an Image</b></summary>
<h1>Problem Statement</h1>
<p>

Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].

```
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function flipAndInvertImage(image: number[][]): number[][] {
  const m: number = image.length;
  const n: number = image[0].length;
  let p1: number;
  let p2: number;

  for (let i = 0; i < m; i++) {
    p1 = 0;
    p2 = n - 1;
    while (p1 <= p2) {
      const temp: number = 1 - image[i][p1];
      image[i][p1] = 1 - image[i][p2];
      image[i][p2] = temp;
      p1++;
      p2--;
    }
  }

  return image;
}
```

</details>

### 6. Reverse Prefix of Word

<details>
<summary><b>6. 	
Reverse Prefix of Word</b></summary>
<h1>Problem Statement</h1>
<p>

Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

```
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function reversePrefix(word: string, ch: string): string {
  // #1
  let chIndex = word.indexOf(ch);
  if (chIndex < 0) return word;

  let result = "";

  for (let i = chIndex; i >= 0; i--) {
    result += word[i];
  }

  for (let j = chIndex + 1; j < word.length; j++) {
    result += word[j];
  }

  return result;

  // #2
  chIndex = word.indexOf(ch);
  if (chIndex < 0 || word === ch) return word;

  let left = chIndex;
  let right = chIndex + 1;
  result = "";

  while (right <= word.length) {
    if (left >= 0) {
      result += word[left--];
    } else if (!word[right]) {
      return result;
    } else {
      result += word[right++];
    }
  }

  return result;
}
```

</details>

### 7. Merge Strings Alternately

<details>
<summary><b>7. 	
Merge Strings Alternately</b></summary>
<h1>Problem Statement</h1>
<p>

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

```
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function mergeAlternately(w1: string, w2: string): string {
  let i: number = 0;
  let j: number = 0;
  let res: string = "";

  while (i < w1.length && j < w2.length) {
    res += w1[i++] + w2[j++];
  }

  return res + w1.substr(i) + w2.substr(j);
}
```

</details>

### 8. Find First Palindromic String in the Array

<details>
<summary><b>8. 	
Find First Palindromic String in the Array</b></summary>
<h1>Problem Statement</h1>
<p>

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

```
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

```

</p>
<img src="https://phnsybzeyaskfgdhxkqg.supabase.co/storage/v1/object/sign/dsa/87716.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkc2EvODc3MTYuanBnIiwiaWF0IjoxNjk0NzYyNDYyLCJleHAiOjE4NTI0NDI0NjJ9.DkCQL4Zcfs8oaSx1CtAw38WX4vNi7CvJFTydg-HujwM&t=2023-09-15T07%3A21%3A02.603Z" alt="image"></img>

<h3>Typescript Code</h3>

```typescript
function firstPalindrome(words: string[]): string {
  for (const word of words) {
    let i: number = 0;
    let j: number = word.length - 1;

    while (i < j) {
      if (word[i] !== word[j]) {
        break;
      }
      i++;
      j--;
    }

    if (i >= j) {
      return word;
    }
  }

  return "";
}
```

</details>
