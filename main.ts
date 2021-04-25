import viewBotFacebook from "./usage"

const csv = require('csv-parser')
const fs = require('fs')
const results: any[] = []
module.exports.mulai = async function (url: string) {
  fs.createReadStream('facebook.csv')
    .pipe(csv())
    .on('data', (data: any) => results.push(data))
    .on('end', () => {
      results.forEach((row, index) => {
        setTimeout(function () {
          if (index <= results.length) {
            viewBotFacebook(row.Email, row.Password, url)
          }
        }, index * 30000)
      })
    })
}
