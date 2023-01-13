const { findMode, findMean, findMedian } = require('./helpers');

describe("Testing functionality for mean, median, and mode:", function() {

    test("finding mean", function() {
        expect(findMean([])).toEqual(0);
        expect(findMean([1,-5,4,3,2])).toEqual(1);
    })

    test("finding median", function() {
        expect(findMedian([1,2,3,4,7,7,11,15,7,2,1,1.5])).toEqual(3.5);
        expect(findMedian([1,2,7,2,5])).toEqual(2);
    })

    test("finding mode", function() {
        expect(findMode([1,1,1,2,2,3])).toEqual(1);
    })

})