var unsortedNumbers = [5, 0, 1, 3, 4, 2];

function insertionSort(unsorted) {
  unsorted.forEach(function(num, index) {
    if (index > 0) {
      var toInsert = num;
      unsorted.splice(index, 1);
      for (i = 0; i < index; i++) {
        if (i === (index -1) && toInsert >= unsorted[i]) {
          unsorted.splice(index, 0, toInsert);
        } else if (toInsert <= unsorted[i]) {
          unsorted.splice(i, 0, toInsert);
          break;
        }
      }
    }
  })
  return unsorted;
};

console.log(insertionSort(unsortedNumbers));
module.exports = insertionSort