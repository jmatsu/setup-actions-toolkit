import * as platform from '../src/platform'

let testcase = test

if (!process.env['ImageOS']) {
  testcase = xtest
}

testcase('getToolCacheDir must be present', async () => {
  expect(!platform.getToolCacheDir()).toBeFalsy()
})
