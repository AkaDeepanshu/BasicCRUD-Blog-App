const express = require("express");
const router = express.Router();

// Importing Controller
const {dummyLink} = require("../controllers/commentController")


// Mapping the controller
router.get("/dummyroute", dummyLink)


// export
module.exports = router;