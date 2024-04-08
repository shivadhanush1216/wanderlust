const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js")
const {isLogginedIn,isOwner,validateListing} = require("../middelware.js")
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

const listingContoller = require("../controllers/listings.js");

router.route("/")
.get(wrapAsync(listingContoller.index))  //index route
.post(isLogginedIn,upload.single("listing[image]"),wrapAsync(listingContoller.createListing)); //create route

//New route
router.get("/new",isLogginedIn,listingContoller.renderNewForm);


router.route("/:id")
.get(wrapAsync(listingContoller.showRoute))
.put(isLogginedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingContoller.updateListing))

.delete(isLogginedIn,isOwner,wrapAsync(listingContoller.destoyListing))



//edit route
router.get("/:id/edit",isLogginedIn,isOwner,wrapAsync(listingContoller.renderEditForm))



module.exports = router;



//update route
// router.put("/listings/:id",async(req,res)=>{
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id,{...req.body.listing});
//     res.redirect(`/listings/${id}`)
// })
