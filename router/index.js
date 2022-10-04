"use strict";
const router = require("express").Router();

const gps = require('./gps');

router.use(gps);


module.exports = router;
