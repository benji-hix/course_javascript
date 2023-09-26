// Hoare's Algorithm

function quicksort(array, startIndex, endIndex) {
    if (startIndex >= 0 && endIndex >= 0 && startIndex < endIndex) {
        const p = partition(array, startIndex, endIndex);
        quicksort(array, startIndex, p);
        quicksort(array, p+1, endIndex)
    }
    return array
}

function partition(array, startIndex, endIndex) {
    //* assign pivot to average of start/end
    const pivot = array[Math.floor((startIndex + endIndex) / 2)];
    //* +1 and -1 are necessary because of do...while loops
    let i = startIndex - 1;
    let j = endIndex + 1;

    while (true) {
        do {
            i++;
        } while (array[i] < pivot);
        do {
            j--;
        } while (array[j] > pivot);
        //* end the  partition
        if (i >= j) {
            return j;
        }

        swap(array, i, j);
    }
}

function swap(array, i, j) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

testArray = [7, 9, 2, 4, 3, 6, 5, 1, 8]
console.log(quicksort(testArray, 0, 7))