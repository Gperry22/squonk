
const db = require("../models");
const mongoose = require("mongoose");

//importing in other controller files so we can borrow functions from the other controllers
//example // .get(billController.findAll)
const budgetController = require("../controllers/budgetController");
const billController = require("../controllers/billController");


// Defining methods for the ArticlesController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => {
        const userObject = dbModel.map(index => {
          return (users = {
            user: index.userName,
            userID: index._id,
            sharedOutBudgets: index.sharingBudgetWith,
            sharedWithMe: index.usersSharedBudgetWithMe
          });
        });

        res.json(userObject);
      })
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    var id = mongoose.Types.ObjectId(req.params.id);
    db.User.findById(id)
      .populate("budgets")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findSecQuestions: function(req, res) {
    var id = mongoose.Types.ObjectId(req.params.id);
    db.User.findById(id)
      .then(dbModel => {
        const SecQuestions = {
          secQuestion1: dbModel.secQuestion1,
          secQuestion1Answer: dbModel.secQuestion1Answer,
          secQuestion2: dbModel.secQuestion2,
          secQuestion2Answer: dbModel.secQuestion2Answer
        };
        res.json(SecQuestions);
      })
      .catch(err => res.status(422).json(err));
  },

  findSecQuestionsForgotPassword: function(req, res) {
    // var id = mongoose.Types.ObjectId(req.body.user);
    db.User.findOne({"userName":req.body.user})
      .then(dbModel => {
        if (dbModel) {
        const SecQuestions = {
          secQuestion1: dbModel.secQuestion1,
          secQuestion1Answer: dbModel.secQuestion1Answer,
          secQuestion2: dbModel.secQuestion2,
          secQuestion2Answer: dbModel.secQuestion2Answer
        };
        res.json(SecQuestions);
        } else{
          res.json(dbModel);
        }

        
      })
      .catch(err => res.status(422).json(err));
  },

  findLogin: function(req, res) {
    // var id = mongoose.Types.ObjectId(req.body.userId);
    db.User.findOne({ userName: req.body.userName })
      .then(dbModel => {
        if (dbModel.password === req.body.password) {
          const User = {
            userName: dbModel.userName,
            userId: dbModel._id,
            userBudgets: dbModel.budgets,
            allSharedBudgetWithUsers: dbModel.sharingBudgetWith,
            allUsersSharingBudgetsWithMe: dbModel.usersSharedBudgetWithMe
          };
          res.json(User);
        } else {
          const User = {
            userName: null,
            userId: null
          };
          res.json(User);
        }
      })
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updatePass: function(req, res) {
    db.User.findOneAndUpdate(
      { _id: req.body.id },
      { password: req.body.password }
    )
      .then(dbModel => res.json("Password Updated"))
      .catch(err => res.status(422).json(err));
  },

  updateSec: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(dbModel => res.json("Sec Questions Updated"))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.User.findById({ _id: req.body.user })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  shareBudget: function(req, res) {

    db.User.findOneAndUpdate(
      { _id: req.body.user },
      { $push: { budgets: req.body.budgetID } }
    )
      .then(dbModel => {
        return db.User.findOneAndUpdate(
          { _id: req.body.user },
          { $push: { usersSharedBudgetWithMe: req.body.body } }
        );
      })
      .then(dbUser => {
        return db.User.findOneAndUpdate(
          { _id: req.body.myID },
          { $push: { sharingBudgetWith: req.body.userBody } }
        );
      })
      .then(dbUser => {
        return db.User.findById(req.body.myID);
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  removeSharedUser: function(req, res) {

    db.User.findOneAndUpdate(
      { _id: req.body.user },
      { $pull: { budgets: req.body.budgetID } }
    )
      .then(dbModel => {
        return db.User.findOneAndUpdate(
          { _id: req.body.user },
          { $pull: { usersSharedBudgetWithMe: req.body.body } }
        );
      })
      .then(dbUser => {
        return db.User.findOneAndUpdate(
          { _id: req.body.myID },
          { $pull: { sharingBudgetWith: req.body.userBodyRemove } }
        );
      })
      .then(dbUser => {
        return db.User.findById(req.body.myID);
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};


