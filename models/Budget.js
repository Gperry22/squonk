const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new BudgetSchema object
// This is similar to a Sequelize model
const budgetSchema = new Schema({
    // `title` is required and of type String
    budgetName: {
        type: String,
        required: true
    },  
    budgetPlannedAmount: {
        type: Number,
        required: true
    },

   actualAmount: {
        type: Number,
        required: true
    },

    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },

    // `Bill` is an object that stores a Bill id
    // The ref property links the ObjectId to the Bill model
    // This allows us to populate the Budget with an associated Bill
    bills:
        [
            {
                // Store ObjectIds in the array
                type: Schema.Types.ObjectId,
                // The ObjectIds will refer to the ids in the Bill model
                ref: "Bill"
            }
        ]
});

// This creates our model from the above schema, using mongoose's model method
const Budget = mongoose.model("Budget", budgetSchema);

// Export the Budget model
module.exports = Budget;
