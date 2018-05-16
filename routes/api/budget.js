const router = require("express").Router();
const budgetController = require("../../controllers/budgetController");


// Matches with "/api/budgets"
router.route("/")
    .get(budgetController.findAll)
    // .post(budgetController.create)
    .post(budgetController.createBudget)
    // .put(budgetController.update)

// Matches with "/api/budgets/:id"
router.route("/:id")
    .get(budgetController.findById)
//     // .put(budgetController.update)
//     // .delete(budgetController.remove);
// router.route("/:id")
// .post(budgetController.createBudget)

router.route("/delete/")
.post(budgetController.removeBudget)

router.route("/deleteAll/")
.post(budgetController.remove)



    

module.exports = router;

