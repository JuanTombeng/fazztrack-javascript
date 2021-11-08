# FLOWCHART AND ALGORITHMS

#### Description:

## This repository contains basic javascript algorithms with each flowchart images.

## The assignments are: 
### 1. Reverse each letter in a word:
    * Start
    * Read input
    * Declare and initialize result as an empty string
    * Loop through the input with variable i from the last letter of the input until the first letter of the input
    * Each step, the position of i will decrease by 1
    * While the loop condition is still valid, adding each value of index i to the variable result
    * Print result when the loop condition is not valid anymore
     End

### 2. Reverse each word in a sentence:
    * Start
    * Read input
    * Declare and initialize result and temp as empty strings
    * Loop through the input with variable i from the first letter of the input until the last letter of the input
    * Each step, the position of i will increase by 1
    * While the loop condition is still valid, adding each value of index i to variable temp if index i is not a space
    * Adding space, value of temp, and value of result to the result variable if index i is a space
    * Reinitialize temp as an empty string
    * Print value of temp and value of result when the loop condition is not valid anymore
    * End

### 3. Palindrome checker:
    * Start
    * Read input
    * Declare and initialize result as empty strings
    * Declare and initialize word as the lower case of the value of the result
    * Loop through the input with variable i from the last letter of the input until the first letter of the input
    * Each step, the position of i will decrease by 1
    * While the loop condition is still valid, adding each value of index i to variable result
    * If value of word is equals as value of result, print "the input is a Palindrome"
    * If the condition if false, print "the input is Not a Palindrome"
    * End

### 4. Change each letter 'a' to letter 'o' in a word:
    * Start 
    * Read input
    * Declare and initialize result as an empty string
    * Loop through the input with variable i from the first index of input to the last index of the input
    * Each step, the position of i will increase by 1
    * While the loop condition is still valid, adding value of result and string 'o' to the variable result if the index i of input is equal as string 'a' or string 'A'
    * If the condition is false, adding value of result and index i of input to the variable result
    * Print value of result when the loop condition is not valid anymore
    * End
