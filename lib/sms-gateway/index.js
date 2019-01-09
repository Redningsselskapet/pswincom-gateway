const smsGateway = require('pswincom-gateway')
const { NO_REF_ERROR, LOGON_ERROR } = require('../error-types')

module.exports = ({ user, password, sender }) => {
  const config = {
    user: user,
    password: password,
    sender: sender
  }
  return {
    sendSms: ({ receiver, message }) => {
      const result = new Promise((resolve, reject) => {
        smsGateway.sendSms({
          ...config,
          ...{
            receivers: [ receiver ],
            message: message,
            done: (result) => {
              if (result.logon !== 'OK') reject(new Error(LOGON_ERROR))
              if (!result.refs) {
                reject(new Error(NO_REF_ERROR))
              }
              resolve({
                receiver,
                status: 'success',
                id: result.refs[receiver]
              })
            },
            error: (err) => {
              reject(err)
            }
          }
        })
      })
      return result
    }
  }
}
