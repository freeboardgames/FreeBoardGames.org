beforeEach(async () => {
  await page.goto(baseURL + '/');
});

it('has log in button', async () => {
  await expect(page).toMatchElement('button', { text: 'Log in', visible: true });
  // await expect(page).toClick('button', { text: 'Log in' })
});

describe('phone', () => {
  beforeAll(async () => {
    await setPhoneViewport();
  });

  describe('logged out', () => {
    it('matches golden', async () => {
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  });
});

describe('tablet', () => {
  beforeAll(async () => {
    await setTabletViewport();
  });

  describe('logged out', () => {
    it('matches golden', async () => {
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  });
});

export {};
