const assert = require('chai').assert;
const insertionSort = require('../insertion-sort')

describe ("insertion sort algorithm", function() {
  it ("sorts an array of unsorted numbers", function() {
    var unsorted = [5, 0, 1, 3, 4, 2];
    var expected = [0, 1, 2, 3, 4, 5];
    var sorted;
    sorted = insertionSort(unsorted);
    assert.deepEqual(sorted, expected);
  })

  it ("sorts an array of unsorted letters", function() {
    var unsorted = ["d", "b", "a", "c"];
    var expected = ["a", "b", "c", "d"];
    var sorted;
    sorted = insertionSort(unsorted);
    assert.deepEqual(sorted, expected);
  })
})