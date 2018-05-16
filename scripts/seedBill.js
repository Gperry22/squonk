

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/squonk");

const billSeed = [
  {
    userId: "5ae223edcaab7a10731e1723",
    userName: "gabe",
    budgetName: "Food",
    billName: "Water",
    billPlannedAmount: 100,
    billActualAmount: 100,
    billStatic: false,
  }
];

db.Bill
  .remove({})
  .then(() => db.Bill.collection.insertMany(billSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
