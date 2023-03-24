const { findMode, findMean, findMedian } = require('./helpers');



describe("test mean", function () {
    test('return mean', function () {
        expect(findMean([1, 3, 5, 7])).toEqual(4)
    })
    test('return mean', function () {
        expect(findMean([])).toEqual(0)
    })
})

describe("test median", function () {
    test('return median', function () {
        expect(findMedian([1, 2, 3, 4, 5])).toEqual(3)
    })

})

describe("test mode", function () {
    test('return mode', function () {
        expect(findMode([1, 1, 2, 3, 7, 8])).toEqual(1)
    })
})