const fs = require('fs')

// fs.mkdirSync('new data')
fs.writeFileSync('new data/data.txt', 'hello from server\n')
fs.appendFileSync('new data/data.txt','hello from server again' )