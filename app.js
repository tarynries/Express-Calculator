const express = require('express');
const ExpressError = require('./expressError')

const app = express();

const { findMean, findMode, findMedian, convertAndValidateNumsArray } = require('./helpers');

app.use(express.json());

app.get("/mean", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("Nums are required", 400)
    }
    let numsAsStrings = req.query.nums.split(",")
    let nums = convertAndValidateNumsArray(numsAsStrings)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }
    let results = {
        operation: "mean",
        value: findMean(nums)
    }
    return res.send(results)
})

app.get("/median", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("Nums are required", 400)
    }
    let numsAsStrings = req.query.nums.split(",")
    let nums = convertAndValidateNumsArray(numsAsStrings)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }
    let results = {
        operation: "median",
        value: findMedian(nums)
    }
    return res.send(results)
})

app.get("/mode", function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("Nums are required", 400)
    }
    let numsAsStrings = req.query.nums.split(",")
    let nums = convertAndValidateNumsArray(numsAsStrings)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }
    let results = {
        operation: "mode",
        value: findMode(nums)
    }
    return res.send(results)
})

app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
})

app.use(function (err, req, res, next) { //Note the 4 parameters!
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});