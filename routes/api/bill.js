const router = require("express").Router();
const billController = require("../../controllers/billController");

// Matches with "/api/bill"
router.route("/")
.get(billController.findAll)
.post(billController.createBill)
.put(billController.update)


// Matches with "/api/bills/:id"
router.route("/:id")
// .get(billController.findById)
// .put(billController.update)
// .delete(billController.remove);


router.route("/delete/")
.post(billController.remove);

router.route("/deleteAll/"
).post(billController.removeAll);




module.exports = router;

