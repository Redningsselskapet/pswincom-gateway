const SMSGateway = require('../../sms-gateway')
const { NO_REF_ERROR, LOGON_ERROR } = require('../../error-types')

const gw = SMSGateway({ user: 'user', password: 'pass', sender: 'testapp' })

describe('sms-gateway sendSms()', () => {
  it('should return result object on success)', () => {
    const gw = SMSGateway({ user: 'user', password: 'pass', sender: 'testapp' })
    return gw
      .sendSms({ receiver: '4791679501', message: 'KOKO' })
      .then((result) => {
        expect(result).toMatchObject({
          receiver: '4791679501',
          status: 'success',
          id: '0'
        })
      })
  })
  it('should return an error result object on logon failure', () => {
    const gw = SMSGateway({ user: 'user', password: 'wrongpass', sender: 'testapp' })
    return gw
      .sendSms({ receiver: '4791679501', message: 'KOKO' }).catch(err => {
        expect(err).toEqual(Error(LOGON_ERROR))
      })
  })
} )

