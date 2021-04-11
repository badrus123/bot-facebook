const csv = require('csv-parser')
const fs = require('fs')
const { facebook_streamer } = require('./index')
const results = []

fs.createReadStream('facebook.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    results.forEach(async (row) => {
      await new Promise((resolve) => setTimeout(resolve, 5000))

      facebook_streamer(row.Email, row.Password)

      //   console.log(row.Email)
    })
  })
