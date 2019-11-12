
# Change Log

## v0.0.1

### 注意事項

1. 不要任意將 `jasmine-core` 升級到任何 `v3` 版本，因為此版本跟 Protractor 有相依性
2. `@types/jasmine` 跟 `jasmine-core` 也有相依性，不能任意升級更新
3. `tslint` 到 `v6.0.0` 會有破壞性更新，因此不建議升級！
4. `node` 建議安裝 `v10.16.3` LTS 版本
5. `@types/node` 與選用的 Node.js 版本有相依性，升級時要注意！
6. `ts-node` 通常可以升級到最新版，因為幾乎沒有破壞性更新
7. `typescript` 升級到最新版應該沒差！

### 套件相關筆記

[tslint](https://github.com/palantir/tslint)

- `v5.xx.x` 所有版本都沒有 Breaking Changes，所以可以升級上去
- 目前 `v6.0.0-beta1` 還在測試中

[ts-node](https://github.com/TypeStrong/ts-node)

- TypeScript execution and REPL for node.js, with source map support.
- Works with typescript@>=2.7.

[JasmineWD](https://github.com/angular/jasminewd)

- Adapter for **Jasmine-to-WebDriverJS**. Used by [Protractor](https://github.com/angular/protractor).
- [jasminewd1](https://github.com/angular/jasminewd/tree/jasminewd1) is an adapter for `Jasmine 1.3`, and uses the package minijasminenode. It is published to npm as `jasminewd`.
- [jasminewd2](https://github.com/angular/jasminewd/tree/jasminewd2) is an adapter for `Jasmine 2.x`, and uses the package jasmine. It is published to npm as `jasminewd2`.
  - 必須額外安裝 [@types/jasminewd2](https://www.npmjs.com/package/@types/jasminewd2) 型別定義檔
- 這個套件主要是跟 Protractor 的 Control Flow 機制搭配使用
- 如果整個專案都用 async/await 語法的話，其實這個套件是不需要的！

[Selenium](https://github.com/SeleniumHQ/selenium)

- Selenium is a browser automation library.
- Most often used for testing web-applications
- Selenium may be used for any task that requires automating interaction with the browser.
- Selenium 4 主要變更
  - 移除 Control Flow 機制，移除 Promise Manager 實作，一律使用 async/await
    - [`async`/`await` breaks the control flow · Issue #3037 · SeleniumHQ/selenium](https://github.com/SeleniumHQ/selenium/issues/3037)

[selenium-webdriver](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver)

- 必須要安裝額外的瀏覽器驅動程式(WebDriver)才能讓 Selenium 正常運作
  - Chrome -> [chromedriver(.exe)](http://chromedriver.storage.googleapis.com/index.html)
  - Firefox -> [geckodriver(.exe)](https://github.com/mozilla/geckodriver/releases/)
  - Edge -> [MicrosoftWebDriver.msi](http://go.microsoft.com/fwlink/?LinkId=619687)
  - Safari -> [safaridriver](https://developer.apple.com/library/prerelease/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html#//apple_ref/doc/uid/TP40014305-CH11-DontLinkElementID_28)
  - Internet Explorer -> [IEDriverServer.exe](http://selenium-release.storage.googleapis.com/index.html)
- [selenium-webdriver API Docs](https://selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/)
- [SeleniumHQ Documentation](https://www.seleniumhq.org/docs/)

[Jasmine](https://github.com/jasmine/jasmine)

- A JavaScript Testing Framework.
- Jasmine is a Behavior Driven Development testing framework for JavaScript.
- It does not rely on browsers, DOM, or any JavaScript framework.
- Thus it's suited for websites, Node.js projects, or anywhere that JavaScript can run.
- [Jasmine Documentation](https://jasmine.github.io/)
- [Jasmine 快速上手](https://jasmine.github.io/tutorials/your_first_suite)
- 由於 Jasmine 跟 Protractor 有相依性，所以建議 `Protractor v5` 要搭配 `Jasmine v2` 使用！

[jasmine-spec-reporter](https://github.com/bcaudan/jasmine-spec-reporter)

- Real time console spec reporter for jasmine testing framework.
- 設定範例
  - [Use jasmine-spec-reporter with Node](https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/node)
  - [Use jasmine-spec-reporter with Protractor](https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/protractor)
  - [Use jasmine-spec-reporter with TypeScript](https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/typescript)
- 你可以輕易的客製化 Jasmine Spec Reporter 的輸出格式
  - [Output customization](https://github.com/bcaudan/jasmine-spec-reporter/blob/master/docs/customize-output.md)

[Protractor](https://github.com/angular/protractor)

- Protractor is an end-to-end test framework for Angular and AngularJS applications.
- Protractor is a [Node.js](http://nodejs.org/) program built on top of WebDriverJS.
- `Protractor 5.4.2` 搭配 Selenium 3 為主 (`selenium-webdriver v3.6.0`)
  - 使用 Jasmine 2.99.1 版本
  - `v3.5.0`
    - Native support for Firefox 45 (ESR) has been removed.
    - Removed native support for Firefox 46 and older.
- `Protractor 6.0.0` 搭配 Selenium 4 為主 (`selenium-webdriver v4.0.0-alpha.4`)
  - 使用 Jasmine 3.3 版本
    - Jasmine 3 allows for tests to be in random order by default.
    - 但是在 E2E 測試情境下，通常測試案例是需要依照順序執行的！
    - 但在 Protractor v6 [有設定關閉亂序執行](https://github.com/angular/protractor/pull/5126/files)
  - 移除 Control Flow 機制
    - The core WebDriver API no longer uses promise manager
    - 請一律使用 async/await 來撰寫 Spec
    - debugger, explore and element explorer have been removed
    - jasminewd is no longer a dependency
    - 請看 selenium-webdriver 的[變更紀錄](https://github.com/SeleniumHQ/selenium/blob/master/javascript/node/selenium-webdriver/CHANGES.md)
  - 最低 Node 版本為 `10.15.0 LTS`
  - 目前 TypeScript 型別定義檔還不夠完整
  - Actions API in selenium-webdriver have changed
  - 移除對 Opera 與 PhantomJS 瀏覽器的支援 (因為這些瀏覽器的 WebDriver 已經不再更新)
    - 由於 Opera 現在也是以 Chromium 為主，因此專注在 Chrome 瀏覽器測試即可
    - 由於 PhantomJS 已經不在繼續發展，因此建議使用 Chrome 或 Firefox 的 Headless 模式進行測試
  - 支援 `driver.switchTo().parentFrame()` API
  - Replaced WebElement.getSize() and WebElement.getLocation() with a single method, WebElement.getRect().
- [selenium-webdriver Release Notes](https://github.com/SeleniumHQ/selenium/blob/master/javascript/node/selenium-webdriver/CHANGES.md)

### Release Notes

- [Node.js Release Notes](https://github.com/nodejs/node/blob/master/CHANGELOG.md)
- [TypeScript Release Notes](https://github.com/microsoft/TypeScript/releases)
- [Jasmine-Core 2.99 Release Notes](https://github.com/jasmine/jasmine/blob/master/release_notes/2.99.md)
- [Jasmine-Core 3.0 Release Notes](https://github.com/jasmine/jasmine/blob/v3.0.0/release_notes/3.0.md)
- [Protractor Release Notes](https://github.com/angular/protractor/blob/master/CHANGELOG.md)
- [ts-node Release Notes](https://github.com/TypeStrong/ts-node/releases)
- [tslint Release Notes](https://github.com/palantir/tslint/blob/master/CHANGELOG.md)

### 相關連結

- [Protractor FAQ](https://github.com/angular/protractor/blob/master/docs/faq.md)
- [Highest Voted 'protractor' Questions - Stack Overflow](https://stackoverflow.com/questions/tagged/protractor?sort=votes&pageSize=20)