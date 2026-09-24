
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PrankShowSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = PrankShowSDK.test()
    equal(testsdk instanceof PrankShowSDK, true,
      'PrankShowSDK.test() must return a client synchronously')
  })

})
