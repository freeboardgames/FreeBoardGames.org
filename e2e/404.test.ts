beforeEach(async () => {
  await page.goto(baseURL + '/play/fakegamecode');
});

describe('mobile', () => {
  it('matches golden', async () => {
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

describe('desktop', () => {
  beforeAll(async () => {
    await page.setViewport({ height: viewports.TABLET_HEIGHT, width: viewports.TABLET_WIDTH });
  });

  it('matches golden', async () => {
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

it('renders 404 page with working Go Home button', async () => {
  await expect(page).toMatch('Page Not Found');
  await expect(page).toClick('button', { text: 'Go Home' });
  await page.waitForNavigation({ waitUntil: 'load' });
  expect(page.url()).toEndWith('/');
});

export {};
