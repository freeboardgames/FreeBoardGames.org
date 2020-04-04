import { configureToMatchImageSnapshot } from 'jest-image-snapshot';

const toMatchImageSnapshot = configureToMatchImageSnapshot({
  blur: 0.75,
  failureThreshold: 0.01,
  failureThresholdType: 'percent',
});

expect.extend({ toMatchImageSnapshot });

beforeAll(async () => {
  await page.goto(baseURL + '/');
});

it('renders home page', async () => {
  await expect(page).toMatch('Play Free Board Games');
});

it('has title', async () => {
  const title = await page.title();
  expect(title).toEqual('Play Free Board Games Online - FreeBoardGames.org');
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

export {};
