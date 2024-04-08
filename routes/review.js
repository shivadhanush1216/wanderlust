const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js")
const {validateReview,isLogginedIn, isReviewAuthor} = require("../middelware.js");
const reviewController = require("../controllers/reviews.js");

//post reviews routs
router.post("/",validateReview,isLogginedIn,wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewId",isLogginedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview))

module.exports = router;