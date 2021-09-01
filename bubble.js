/**
 * bubbleSort() sorts the numbers in array arr in ascending order
 * @param {*} arr 
 */
function bubbleSort(arr) {

    const sorted = [...arr];

    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - i; j++) {
            if (sorted[j] > sorted[j + 1]) {
                // swap j with j+1 and j+1 with j
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]]
            }
        }

    }

    return sorted;

}

module.exports = bubbleSort;