
---

# 📌 GMC MSc Software Engineering Assignment – Algorithm: Sentence Analysis Algorithm

## ✅ **Objective**

Develop an algorithm that reads a sentence character by character (ending with a full stop `.`) and computes the following:

1. **Total number of characters**
2. **Total number of words**
   (Assume words are separated by a single space.)
3. **Total number of vowels**

This assignment will demonstrate your understanding of control structures, string parsing, and algorithmic logic.

---

## 🧠 **Problem Constraints**

* Treat **each character individually** (i.e., use character-level iteration).
* The sentence will always **end with a period** (`.`).
* Use **three separate variables as counters** for:

  * Character count
  * Word count
  * Vowel count

---

## 🛠️ **Expected Deliverables**

1. **Python script** or equivalent code in a language of your choice.
2. **Well-documented source code**, with clear comments and logical structure.
3. **GitHub repository** including:

   * `README.md` describing the problem, approach, and how to run the code.
   * The script file (`main.py` or equivalent).
   * Optionally: a sample input/output demonstration.

---

## 📈 **Evaluation Criteria**

Each of the following will be graded on a scale from **0 to 5**:

| Criteria                     | Description                                                       |
| ---------------------------- | ----------------------------------------------------------------- |
| Use of 3 Counter Variables   | Proper use of variables to track character, word, and vowel count |
| GitHub Repository Setup      | Includes README and source code                                   |
| Code Documentation & Clarity | Clean, readable, and well-commented code                          |
| Technical Problem-Solving    | Logical, structured approach to solving the problem               |
| Overall Code Quality         | Efficient and correct logic implementation                        |
| Submission Timeliness        | Delivered before the deadline (0 if missed)                       |

---

## 💡 Sample Input / Output

**Input:**

```
This is a test sentence.
```

**Output:**

```
Total characters: 26  
Total words: 5  
Total vowels: 8
```

---

## 🧾 Sample Pseudocode

```plaintext
Initialize character_count, word_count, vowel_count to 0

Read input sentence (ending with a period '.')

For each character:
    Increment character_count
    If character is a vowel, increment vowel_count
    If character is a space, increment word_count

After loop, add 1 to word_count (since last word isn’t followed by space)

Print all three counts
```

---

## 🚀 Suggested Enhancements (Optional)

* Normalize input (e.g., convert to lowercase).
* Handle edge cases (multiple spaces, no vowels, etc.).
* Extend to support punctuation analysis.

---

## 📎 Credits to:
* GoMyCode X Woolfe College: Msc Software Engineering Programme

---

