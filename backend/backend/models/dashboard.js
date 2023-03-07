const mongoose = require('mongoose');

const Dashboard = mongoose.model('Dashboard', {
    title: String,
    panels: Array
})

module.exports = Dashboard;