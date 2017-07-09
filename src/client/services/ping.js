// @flow

const request = require('superagent')

const ping = (url: string): Promise<boolean> => new Promise((resolve, reject) => {
  request(`/ping?deployedUrl=${url}`)
    .then((response) => {
      if (response.status >= 400) {
        reject(response.statusText)
      }
      const status = response.text === 'true'
      resolve(status)
    })
    .catch((err) => {
      reject(err)
    })
})

module.exports = ping
