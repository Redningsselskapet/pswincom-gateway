PSWinCom SMS Gateway 
====================

node.js module for sending sms messages through PSWinCom SMS Gateway.

## Installation
```
    $ npm install @redningsselskapet/pswincom-sms-gateway
```
## Usage
```javascript
    // import node module
    const SmsGateway = require('@redningsselskapet/pswincom-sms-gateway')

    // create Sms Gateway object
    const smsGateway = SmsGateway({ username: 'myuser', password: 'mypass', sender: 'mysender' })

    // send sms message to a receiver
    smsGateway.sendSms({ receiver: '4791679501', message: 'Hello there!' })
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
```
