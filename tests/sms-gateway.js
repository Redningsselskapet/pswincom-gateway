const SmsGateway = require('../index.js')
config = require('./test-config')

const smsGw = SmsGateway(config)
smsGw.sendSms({receiver: '4791679501', message: 'testmelding'}).then(result => {
  console.log(result)
}).catch(err => {
  console.log(err)
})

