import {ChromiumEnv, FirefoxEnv, setConfig, test, WebKitEnv} from '@playwright/test'

setConfig({
  testDir: __dirname,
  timeout: 10000,
})

const options = {
  headless: true,
  viewport: {width: 1920, height: 1080},
}

test.runWith(new ChromiumEnv(options), {tag: 'chromium'});
test.runWith(new FirefoxEnv(options), {tag: 'firefox'});
// test.runWith(new WebKitEnv(options), {tag: 'webkit'});
