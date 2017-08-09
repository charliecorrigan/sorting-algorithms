var unsorted = [5, 0, 1, 3, 4, 2];
var sorted;

function bubbleSort(unsortedItems) {
  var swapped = {status: true};
  while (swapped.status === true) {
    swapped.status = false;
    sortItems(unsortedItems, swapped);
  }
  return unsortedItems;
}

function sortItems(unsortedItems, swapped) {
  unsortedItems.forEach(function(num, index){
      if (index < (unsortedItems.length - 1)) {
        var current = num;
        var next = unsortedItems[index + 1];
        if (current > next) {
          swapItems(unsortedItems, index, next, current, swapped);
        };
      };
    });
}

function swapItems(unsortedItems, index, next, current, swapped) {
  unsortedItems[index] = next;
  unsortedItems[index + 1] = current;
  swapped.status = true;
}

sorted = bubbleSort(unsorted);
console.log(sorted)

module.exports = bubbleSort