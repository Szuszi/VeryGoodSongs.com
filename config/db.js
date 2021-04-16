const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zikc27_js', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;