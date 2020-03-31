beforeEach(async () => {
  await page.goto(baseURL + '/');
});

it('renders home page', async () => {
  await expect(page).toMatch('Play Free Board Games');
});

it('has title', async () => {
  const title = await page.title();
  expect(title).toEqual('Play Free Board Games Online - FreeBoardGames.org');
});

describe('phone', () => {
  it('matches golden', async () => {
    await setPhoneViewport();
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

describe('tablet', () => {
  it('matches golden', async () => {
    await setTabletViewport();
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});

export {};
