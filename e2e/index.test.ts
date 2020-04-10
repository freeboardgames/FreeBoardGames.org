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

export {};
