const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { findMode, findMean, findMedian, convertNumsAndValidate } = require('./helpers');

app.use(express.json());


// default root route, info to use
app.get('/', (req, res) => {
    return res.send(`
    <h1>Simple Express Calculator</h1>
    <p>To use head to route /mean, /median, /mode, /all.</p>
    <p>The request must contain query parameters like the following at the end of route:
    "?nums=1,3,5,6,7"</p>
    `);
});


// find mean route
app.get('/mean', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let nums = convertNumsAndValidate(req.query.nums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }
    let result = { operation: "mean", value: findMean(nums) };
    return res.send(result);
});


// find median route
app.get('/median', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let nums = convertNumsAndValidate(req.query.nums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }
    let result = { operation: "median", value: findMedian(nums) };
    return res.send(result);
});


// find mode route
app.get('/mode', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let nums = convertNumsAndValidate(req.query.nums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }
    let result = { operation: "mode", value: findMode(nums) };
    return res.send(result);
});


// route to return mean, median, and mode results
app.get('/all', (req, res) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let nums = convertNumsAndValidate(req.query.nums);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message, 400);
    }

    let result = {
        operation: "median",
        mean: findMean(nums),
        median: findMedian(nums),
        mode: findMode(nums)
    }

    return res.send(result);
});


// 404 error handler
app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

// general error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    return res.json({
        error: err
    });
});


app.listen(3000, function () {
    console.log('Application started, listening on port 3000...');
})