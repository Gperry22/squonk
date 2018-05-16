const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/squonk");

const userSeed = [
  {
    userName: "gabe",
    password: "1234",
    secQuestion1: "Childhood Best Friend?",
    secQuestion1Answer: "john",
    secQuestion2: "Favorite Food?",
    secQuestion2Answer: "pizza",
    usersSharedBudgetWithMe: [],
    sharingBudgetWith:[],
  },
  {
    userName: "nathan",
    password: "1234",
    secQuestion1: "Childhood Best Friend?",
    secQuestion1Answer: "john",
    secQuestion2: "Favorite Food?",
    secQuestion2Answer: "pizza",
    usersSharedBudgetWithMe: [],
    sharingBudgetWith: [],
  },
  {
    userName: "keka",
    password: "1234",
    secQuestion1: "Childhood Best Friend?",
    secQuestion1Answer: "john",
    secQuestion2: "Favorite Food?",
    secQuestion2Answer: "pizza",
    usersSharedBudgetWithMe: [],
    sharingBudgetWith: [],
  },
  {
    userName: "gabby",
    password: "1234",
    secQuestion1: "Childhood Best Friend?",
    secQuestion1Answer: "john",
    secQuestion2: "Favorite Food?",
    secQuestion2Answer: "pizza",
    usersSharedBudgetWithMe: [],
    sharingBudgetWith: [],
  },
  {
    userName: "gabriel",
    password: "1234",
    secQuestion1: "Childhood Best Friend?",
    secQuestion1Answer: "john",
    secQuestion2: "Favorite Food?",
    secQuestion2Answer: "pizza",
    usersSharedBudgetWithMe: [],
    sharingBudgetWith: [],
  },
  {
    userName: "kekka",
    password: "1234",
    secQuestion1: "Childhood Best Friend?",
    secQuestion1Answer: "john",
    secQuestion2: "Favorite Food?",
    secQuestion2Answer: "pizza",
    usersSharedBudgetWithMe: [],
    sharingBudgetWith: [],
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
