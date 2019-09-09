const request = require('request')
const keys = require('../../content/keys.js')

darkskyKey=keys.darkskyKey

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' + darkskyKey + '/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.summary + '\n' + body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast