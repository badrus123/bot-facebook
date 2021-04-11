const csv = require('csv-parser')
const fs = require('fs')
const { facebook_streamer } = require('./index')
const results = []

fs.createReadStream('facebook.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    results.forEach((row, index) => {
      setTimeout(function () {
        if (index <= results.length) {
          //   facebook_streamer(row.Email, row.Password)
          console.log(row)
        }
      }, index * 10000)

      //   console.log(row.Email)
    })
  })
