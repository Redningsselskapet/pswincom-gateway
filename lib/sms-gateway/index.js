const smsGateway = require('pswincom-gateway')

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
              if (result.logon !== 'OK')
                reject(
                  new Error({
                    receiver: '4791679501',
                    status: 'failure',
                    error: 'logon failure'
                  })
                )
              if (!result.refs) {
                reject(
                  new Error({
                    receiver: receiver,
                    status: 'success',
                    error:
                      'No ref. This probaly means that message did not reach its destination. Check that the number is correct.'
                  })
                )
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
