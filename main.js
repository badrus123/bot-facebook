const csv = require('csv-parser')
const fs = require('fs')
const { facebook_streamer } = require('./facebook')
const results = []
module.exports.mulai = async function (url) {
  fs.createReadStream('facebook.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      results.forEach((row, index) => {
        setTimeout(function () {
          if (index <= results.length) {
            facebook_streamer(row.Email, row.Password, url, row.Code)
          }
        }, index * 30000)
      })
    })
}
