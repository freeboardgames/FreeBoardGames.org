import puppeteer from 'puppeteer';

const USAGE = "Usage: yarn run test [URL] [HOST]";
const DEFAULT_URL = "https://www.freeboardgames.org";
const ONLINE_FRIEND_CARD_XPATH = "//div[contains(., 'Online Friend')]";
const PLAY_BUTTON_XPATH = "//Button[contains(., 'Play')]";
const START_MATCH_BUTTON_XPATH = "//Button[contains(., 'Start match')]";
const INVITE_FRIENDS_TITLE_XPATH = "//h2[contains(.,'Invite Your Friends')]";
const ROOM_LINK_XPATH = "//input[contains(@value, 'http')]";
const TIC_TAC_TOE_SELECTOR = "a[href*='tictactoe']";
const YOUR_TURN_TITLE_XPATH = "//h5[contains(.,'YOUR TURN')]";
const GAME_OVER_TITLE_XPATH = "//h6[contains(.,'Game Over')]";
const GAMES_TITLE_XPATH = "//h2[contains(.,'Games')]";
const GAME_MODE_TITLE_XPATH = "//h2[contains(.,'Choose game mode')]";
const ENTER_NICK_TITLE_XPATH = "//h3[contains(.,'Enter Your Nickname')]";
let screenshotCount = 0;

function highlightLog(text: string) {
  console.log(`--> ${text}`);
}

async function waitVisible(page: puppeteer.Page, xpath: string) {
  await page.waitForXPath(xpath, { visible: true });
  await page.waitForTimeout(100);
}

async function screenshot(page: puppeteer.Page, name: string) {
  const paddedId = `${screenshotCount}`.padStart(3, '0');
  await page.screenshot({path: `out/${paddedId}-${name}.png`});
  screenshotCount++;
}

async function openHome(page: puppeteer.Page, url: string) {
  highlightLog(`openHome(${url})`);
  await page.goto(url);
  await waitVisible(page, GAMES_TITLE_XPATH); 
  await screenshot(page, 'home');
}

async function clickTicTacToe(page: puppeteer.Page) {
  highlightLog(`clickTicTacToe()`);
  await page.click(TIC_TAC_TOE_SELECTOR);
  await waitVisible(page, GAME_MODE_TITLE_XPATH); 
  await screenshot(page, 'tictactoe-info');
}

async function clickOnlineFriendPlay(page: puppeteer.Page) {
  highlightLog(`clickOnlineFriendPlay()`);
  const buttons = await page.$x(ONLINE_FRIEND_CARD_XPATH + PLAY_BUTTON_XPATH);
  await buttons[0].click();
  await screenshot(page, 'select-nickname');
}

async function inputNickname(page: puppeteer.Page, nickname: string) {
  highlightLog(`inputNickname(${nickname})`);
  await page.type('input.MuiInput-input', nickname, {delay: 200});
  await page.keyboard.press('Enter');
  await waitVisible(page, INVITE_FRIENDS_TITLE_XPATH);
  await screenshot(page, 'room');
}

async function getRoomLink(page: puppeteer.Page) {
  highlightLog(`getRoomLink()`);
  const inputs = await page.$x(ROOM_LINK_XPATH);
  return await inputs[0].evaluate(el => el.value);
}

async function selectGameAndCreateRoom(page: puppeteer.Page, url: string) {
  highlightLog(`selectGameAndCreateRoom(${url})`);
  await openHome(page, url);
  await clickTicTacToe(page);
  await clickOnlineFriendPlay(page);
  await inputNickname(page, "Bob");
  return await getRoomLink(page);
}

async function joinRoomAndInputNickname(page: puppeteer.Page, roomLink: string) {
  highlightLog(`joinRoomAndInputNickname(${roomLink})`);
  await page.goto(roomLink);
  await waitVisible(page, ENTER_NICK_TITLE_XPATH);
  await screenshot(page, 'join-room');
  await inputNickname(page, "Alice");
}

async function startMatch(page: puppeteer.Page) {
  highlightLog(`startMatch()`);
  const els = await page.$x(START_MATCH_BUTTON_XPATH);
  await els[0].evaluate(el => el.scrollIntoView());
  await screenshot(page, 'full-room');
  await els[0].click();
}

async function selectSlot(page: puppeteer.Page, x: number, y: number, title: string) {
  highlightLog(`selectSlot(${x}, ${y}, ${title})`);
  await waitVisible(page, YOUR_TURN_TITLE_XPATH);
  await screenshot(page, title);
  await page.click(`rect[x="${x}"][y="${y}"]`);
}

async function gameOver(page: puppeteer.Page, title: string) {
  highlightLog(`gameOver(${title})`);
  await waitVisible(page, GAME_OVER_TITLE_XPATH);
  await screenshot(page, title);
}

async function launch() {
  const args = [ '--ignore-certificate-errors' ];
  const params = { args, ignoreHTTPSErrors: true };
  return puppeteer.launch(params);
}

async function setupPage(page: puppeteer.Page, tag: string) {
  page
    .on('console', message =>
      console.log(`<${tag}, console> ${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
    .on('pageerror', ({ message }) => console.log(`<${tag}, pageerror> ${message}`))
    .on('response', response =>
      console.log(`<${tag}, response> ${response.status()} ${response.url()}`))
    .on('requestfailed', request =>
      console.log(`<${tag}, requestfailed> ${request.failure().errorText} ${request.url()}`))
}

async function testMultiplayer(url: string) {
  highlightLog(`testMultiplayer(${url})`);
  const bobBrowser = await launch();
  const bobPage = await bobBrowser.newPage();
  setupPage(bobPage, 'bob');
  const roomLink = await selectGameAndCreateRoom(bobPage, url);
  const aliceBrowser = await launch();
  const alicePage = await aliceBrowser.newPage();
  setupPage(alicePage, 'alice');
  await joinRoomAndInputNickname(alicePage, roomLink);
  await startMatch(bobPage);
  await selectSlot(bobPage, 0, 0, 'bob-1st-turn');
  await selectSlot(alicePage, 1, 0, 'alice-1st-turn');
  await selectSlot(bobPage, 0, 1, 'bob-2nd-turn');
  await selectSlot(alicePage, 1, 1, 'alice-2nd-turn');
  await selectSlot(bobPage, 0, 2, 'bob-3rd-turn');
  await gameOver(alicePage, 'alice-lost');
  await gameOver(bobPage, 'bob-won');
  bobBrowser.close();
  aliceBrowser.close();
}

async function test(url: string) {
  highlightLog(`test(${url})`);
  await testMultiplayer(url);
}

async function main() {
  const argv = process.argv;
  if (argv.length === 2) {
    await test(DEFAULT_URL);
  } else if (argv.length === 3) {
    await test(argv[2]);
  } else {
    console.log(USAGE);
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(`TEST FAILED: ${e}`);
  process.exit(1);
});
