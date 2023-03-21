import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://localhost:3000');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  //TAKE SCREENSHOT!
  await page.screenshot({
    path: "$1.jpg",
    type: "jepg"
  });

  // Wait and click on first result
  const searchResultSelector = "a[href='/list']";
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Type into search box
  await page.type('input', 'Puppeteer was here!');

  

  await browser.close();
})();