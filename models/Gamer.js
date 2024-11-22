const mongoose = require('mongoose');

const GamerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    favoriteGame: { type: String, required: true },
    registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Gamer', GamerSchema);
