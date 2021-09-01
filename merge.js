/**
 * merge(arr1, arr2) merges 2 sorted arrays into one sorted array. 
 * Returns arr1 and arr2 in a single sorted array.
 * @param {*} arr1 
 * @param {*} arr2 
 */
function merge(arr1, arr2) {

    const merge = [];
    let idxArr1 = 0;
    let idxArr2 = 0;
    while ((idxArr1 < arr1.length) && (idxArr2 < arr2.length)) {
        if (arr1[idxArr1] < arr2[idxArr2]) {
            // Value at idxArr1 in arr1 is less than the value 
            //  at idxArr2 in arr2. Push the Value at idxArr1 in arr1
            //  into the merge array.
            merge.push(arr1[idxArr1]);
            idxArr1++;
        } else {
            // Value at idxArr2 in arr2 is less than the value 
            //  at idxArr1 in arr1. 
            merge.push(arr2[idxArr2]);
            idxArr2++;
        }
    }

    // Push the remaining values in arr1 into merge
    while (idxArr1 < arr1.length) {
        merge.push(arr1[idxArr1]);
        idxArr1++;
    }

    // Push the remaining values in arr2 into merge
    while (idxArr2 < arr2.length) {
        merge.push(arr2[idxArr2]);
        idxArr2++;
    }

    return merge;

}


/**
 * mergeSort() sorts the numbers in array arr in ascending order. 
 * @param {*} arr 
 */
function mergeSort(arr) {
    // full disclaimer -- this code was also covered in the video for the the unit. 

    /*
      This is one that is tricky because of the amount of recursion.
      Walking through the logic with the debugger helped because you can 
       see at different points the slice up left half slowly merging 
       together. 
      When return arr is encountered, a recursion call ends and the next
       call on the stack resumes. 
      When return merge(left, right) is encountered, a recursion call also
       ends and the merged result keeps growing the 'left' array until we
       have the entire first half of the array sorted in 'left'.
      The recursion continues but now with the right full-half. As the 
       right half is sliced up, we still assemble the slices in 'left' by 
       merging in the slices from the right. 
      Eventually, we have a point where a return merge(left, right) is 
       encountered and we merge in the last slice for the 'right' half of
       the full array. The sorted merged right half of the full array is now
       in 'right' and we have the sorted left half of the full array in 
       'left' and no other recursive calls in the call stack -- only the 
       very first non-recursive call to mergeSort remain.
      return merge(left, right) now merges the sorted left half of the full
       array with the sorted right half of the full array and returns
       the sorted full array.

      Remember, in a recursive call, a return returns you where a previous 
       recursive call left off.

    */

    if (arr.length < 2) return arr;

    // find the midpoint for the slice.
    let midPoint = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, midPoint));
    const right = mergeSort(arr.slice(midPoint));

    return merge(left, right);

}


module.exports = { merge, mergeSort };