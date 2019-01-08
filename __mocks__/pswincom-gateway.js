const resultSuccess = {
  logon: 'OK',
  receivers: { '4791679501': 'OK' },
  refs: { '4791679501': '0' }
}

const resultFailure = {
  logon: 'Failure'
}
module.exports = {
  sendSms: ({ user, password, sender, receiver, done, error }) => {
    if(password==='wrongpass') done(new Error(resultFailure))
    done(resultSuccess)
  }
}
