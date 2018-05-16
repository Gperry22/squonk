const db = require("../models");
const mongoose = require("mongoose");

//importing in other controller files so we can borrow functions from the other controllers
//example // .get(userController.findAll)
const budgetController = require("../controllers/budgetController");
const userController = require("../controllers/userController");


// Defining methods for the ArticlesController
module.exports = {
  findAll: function(req, res) {
    db.Bill.find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Bill.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Bill.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Bill.findOneAndUpdate({ _id: req.body.billId }, req.body.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    var billDeleteId = mongoose.Types.ObjectId(req.body.billId);
    var budId = mongoose.Types.ObjectId(req.body.budgetId);

    db.Bill.remove({ _id: billDeleteId })
      .then(dbModel => {
        return db.Budget.update(
          { _id: budId },
          { $pull: { bills: billDeleteId } }
        );
      })
      .then(res.send("Done"))
      .catch(err => res.status(422).json(err));
  },

  createBill: function(req, res) {
    db.Bill.create(req.body)
      .then(dbBill => {
        var id = mongoose.Types.ObjectId(req.body.budgetId);
        return db.Budget.findOneAndUpdate(
          { _id: id },
          { $push: { bills: dbBill._id } }
        );
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  removeAll: function(req, res) {
    // var billDeleteId = mongoose.Types.ObjectId(req.body.billId);
    // var budId = mongoose.Types.ObjectId(req.body.budgetId);

    db.Bill.remove({ budgetId: req.body.budgetID })
      .then(dbModel => {res.send("Done")})
      .catch(err => res.status(422).json(err));
  }
};

