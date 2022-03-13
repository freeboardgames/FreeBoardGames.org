import puppeteer from 'puppeteer';

const USAGE = "Usage: yarn run test [DOMAIN]";
const DEFAULT_DOMAIN = "www.freeboardgames.org";
let screenshotCount = 0;

async function screenshot(page: puppeteer.Page, name: string) {
  const paddedId = `${screenshotCount}`.padStart(3, '0');
  await page.screenshot({path: `out/${paddedId}-${name}.png`});
  screenshotCount++;
}

async function waitLoading(page: puppeteer.Page) {
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
}

async function openHome(page: puppeteer.Page, domain: string) {
  await page.goto(`https://${domain}/`);
  await waitLoading(page);
  await screenshot(page, 'home');
}

async function clickTicTacToe(page: puppeteer.Page) {
  await page.click("a[href*='tictactoe']");
  await waitLoading(page);
  await screenshot(page, 'tictactoe-info');
}

async function clickOnlineFriendPlay(page: puppeteer.Page) {
  const buttons = await page.$x("//div[contains(., 'Online Friend')]//Button[contains(., 'Play')]");
  await buttons[0].click();
  await screenshot(page, 'select-nickname');
}

async function inputNickname(page: puppeteer.Page, nickname: string) {
  await page.type('input.MuiInput-input', nickname, {delay: 200});
  await page.keyboard.press('Enter');
  await page.waitForXPath("//h2[contains(.,'Invite Your Friends')]", { visible: true });
  await screenshot(page, 'room');
}

async function getRoomLink(page: puppeteer.Page) {
  const inputs = await page.$x("//input[contains(@value, 'http')]");
  return await inputs[0].evaluate(el => el.value);
}

async function selectGameAndCreateRoom(page: puppeteer.Page, domain: string) {
  await openHome(page, domain);
  await clickTicTacToe(page);
  await clickOnlineFriendPlay(page);
  await inputNickname(page, "Bob");
  return await getRoomLink(page);
}

async function testMultiplayer(domain: string) {
  const bobBrowser = await puppeteer.launch();
  const bobPage = await bobBrowser.newPage();
  const roomLink = await selectGameAndCreateRoom(bobPage, domain);
  console.log(`Room link: ${roomLink}`);
  bobBrowser.close();
}

async function test(domain: string) {
  await testMultiplayer(domain);
}

async function main() {
  const argv = process.argv;
  if (argv.length === 2) {
    await test(DEFAULT_DOMAIN);
  } else if (argv.length === 3) {
    await test(argv[2]);
  } else {
    console.log(USAGE);
    process.exitCode = 1;
  } 
}

main().catch((e) => {
  console.error(`TEST FAILED: ${e}`);
  process.exitCode = 1;
});
