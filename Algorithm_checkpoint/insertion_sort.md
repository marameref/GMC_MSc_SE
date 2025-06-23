---

# 📌 MSc Checkpoint – Insertion Sort Implementation in JavaScript

## ✅ **Objective**

Develop a JavaScript implementation of the **Insertion Sort** algorithm.

> Insertion sort is a simple, intuitive sorting technique that mimics how we sort playing cards. At each iteration, the algorithm picks the current element and inserts it into the correct position within the sorted portion of the array (i.e., from index `0` to `i-1`).

---

## 🧠 **Problem Statement**

You are required to write a JavaScript function that performs insertion sort on a given array. During each iteration:

* Work only with the **first `i-1` elements** of the array.
* Pick the element at `arr[i]`.
* Insert this element in the correct position within the sorted portion of the array (`arr[0]` to `arr[i-1]`).

---

## 📋 **Instructions & Requirements**

* Use **two counters**:

  * One for tracking the **outer loop** (`i`)
  * One for tracking the **inner loop** (`j`) during shifting
* Do **not** use built-in JavaScript sort methods like `Array.prototype.sort()`
* Include:

  * **Well-structured source code**
  * **Clear inline comments**
  * **A GitHub repository with a README file**

---

## ✅ **Deliverables**

* JavaScript file implementing insertion sort (e.g., `insertionSort.js`)
* GitHub repository with:

  * A detailed `README.md` file
  * Example test cases
  * Description of algorithm logic

---

## 🧪 **Solution: Sample Input / Output**

**Input:**

```js
[5, 2, 4, 6, 1, 3]
```

**Output:**

```js
[1, 2, 3, 4, 5, 6]
```

---

## 🔁 **Sample Pseudocode**

```plaintext
For i from 1 to length of array - 1:
    key = arr[i]
    j = i - 1

    While j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j = j - 1

    arr[j + 1] = key
```

---

## 📈 **Evaluation Criteria (0–5 points each)**

| Criteria                         | Description                                  |
| -------------------------------- | -------------------------------------------- |
| **Use of 2 Counters**            | Proper usage of `i` and `j` as loop counters |
| **GitHub Repository**            | Repository contains source code and README   |
| **Code Clarity & Documentation** | Readable, well-commented, clean code         |
| **Problem-Solving Skills**       | Logical approach and implementation accuracy |
| **Tech Skill Demonstration**     | Adherence to algorithmic best practices      |
| **Timeliness**                   | Submission before the deadline               |


---
## Credits to:

* GoMyCode X Woolfe College: MSc Software Engineering
