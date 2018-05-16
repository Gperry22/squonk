var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new BillSchema object
// This is similar to a Sequelize model
var billSchema = new Schema({

    billName: {
        type: String,
        required: true
    },

    billPlannedAmount: {
        type: Number,
        required: true
    },
    billActualAmount: {
        type: Number,
    },
    
    billStatic: {
        type: Boolean,
        required: true,
        default: false,
    },
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    budgetId: {
        type: String,
        required: true,
    },
    budgetName: {
        type: String,
        required: true,
    },
});

// This creates our model from the above schema, using mongoose's model method
var Bill = mongoose.model("Bill", billSchema);

// Export the Bill model
module.exports = Bill;
