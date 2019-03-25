import { browser, logging, $, $$, by, element, ExpectedConditions as EC } from 'protractor';

describe('App', () => {

  const url = 'http://www.protractortest.org';

  beforeEach(async () => {
    await browser.waitForAngularEnabled(true);
  });

  it('should show title', async () => {
    await browser.get(url);
    const title = await browser.getTitle();
    expect(title).toContain('Protractor - end-to-end testing for AngularJS');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(
    //   jasmine.objectContaining({
    //     level: logging.Level.SEVERE
    //   } as logging.Entry)
    // );
  });
});
