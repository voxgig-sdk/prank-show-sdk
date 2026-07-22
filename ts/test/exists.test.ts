
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PrankShowSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await PrankShowSDK.test()
    equal(null !== testsdk, true)
  })

})
