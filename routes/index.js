const {Router}= require('express')
const data = require("./data.js");
const phone = require("./phone.js");
const router = Router();

router.use("/data", data);
router.use("/phone", phone);




module.exports = router;