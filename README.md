# sb_47-11-12_SortingExercise
 
## Technology Stack
- **Front-end**: n/a
- **Back-end**: NodeJS script

## Assignment Details

Create and test a bubbleSort() and a mergeSort() function for sorting an array.

## Additional Details

**Enhancements**
- None 


**Difficulties**
- The `mergeSort` required some walking through in the debugger to watch code. The disconnect I was having was -- for reasons unknown -- not remembering that the return at the end of mergeSort is not the end of mergeSort but an instance of mergeSort and that I am returned at the point were I am storing a merged result in either `left` or `right`. It also helped to see 
that the `left` array is the one that has the assembled sorted slices -- even for the right half of the full array -- because eventually, the last 'right' slice is stored in 'right', then merged together with the array in 'left' forming the sorted 'right' half of the full array which is then stored in 'right' because it the return from the final recursive call.


