const fs = require('fs');

const readStream = fs.createReadStream('../../../Bredan website/fonts/font-awesome/css/all.min.css', {encoding: 'utf-8'});

const writeStream= fs.createWriteStream('../styles/font-awesome-icons.css');

readStream.pipe(writeStream);