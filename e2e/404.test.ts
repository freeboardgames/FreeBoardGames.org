beforeEach(async () => {
  await page.goto(baseURL + '/play/fakegamecode');
});

it('renders 404 page with working Go Home button', async () => {
  await expect(page).toMatch('Page Not Found');
  await expect(page).toClick('button', { text: 'Go Home' });
  await page.waitForNavigation({ waitUntil: 'load' });
  expect(page.url()).toEndWith('/');
});

export {};
