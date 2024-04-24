const mongoose = require("mongoose");

const likedSchema = new mongoose.Schema(
    {
        liked: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
)

const like = mongoose.model("like", likedSchema);

module.exports = like;