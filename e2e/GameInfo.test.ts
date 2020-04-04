import { Page } from 'puppeteer';

beforeAll(async () => {
  await page.goto(baseURL + '/play/tictactoe');
});

it('renders page', async () => {
  await expect(page).toMatch('Play Tic-Tac-Toe');
});

it('has title', async () => {
  const title = await page.title();
  expect(title).toEqual('Play Tic-Tac-Toe, A Classic Game - FreeBoardGames.org');
});

describe('phone', () => {
  beforeAll(async () => {
    await setPhoneViewport();
    await page.goto(baseURL + '/play/tictactoe');
  });

  it('has game instruction video', async () => {
    await expect(page).toMatchElement('[data-testid=gameinstructionsvideo]', { visible: true });
  });

  it('matches golden', async () => {
    await removeVideo(page);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

describe('tablet', () => {
  beforeAll(async () => {
    await setTabletViewport();
    await page.goto(baseURL + '/play/tictactoe');
  });

  it('has game instruction video', async () => {
    await expect(page).toMatchElement('[data-testid=gameinstructionsvideo]', { visible: true });
  });

  it('matches golden', async () => {
    await removeVideo(page);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

async function removeVideo(page: Page) {
  await page.evaluate(() => {
    (document.querySelectorAll('[data-testid=gameinstructionsvideo]') || []).forEach((el: Element) => el.remove());
  });
}

export {};
