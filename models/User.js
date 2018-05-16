var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    secQuestion1: {
        type: String,
        required: true
    }, 
    secQuestion1Answer: {
        type: String,
        required: true
    }, 
    secQuestion2: {
        type: String,
        required: true
    }, 
    secQuestion2Answer: {
        type: String,
        required: true
    },
    // `Budget` is an object that stores a Budget id
    // The ref property links the ObjectId to the Budget model
    // This allows us to populate the User with an associated Budget
    budgets:
        [
            {
                // Store ObjectIds in the array
                type: Schema.Types.ObjectId,
                // The ObjectIds will refer to the ids in the Budget model
                ref: "Budget"
            }
        ],
    sharingBudgetWith: { 
        type: Array, 
        "default": [],
    },
    usersSharedBudgetWithMe: {
        type: Array,
        "default": [],
    }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;
