const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Add Contact"],
    },
    email: {
        type: String,
        required: [true, "Add email"],
    },
    phone: {
        type: String,
        required: [true, "Add Phone"],
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);