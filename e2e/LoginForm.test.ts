beforeEach(async () => {
  await page.goto(baseURL + '/');
});

it('has log in button', async () => {
  await expect(page).toMatchElement('button', { text: 'Log in', visible: true });
  await expect(page).toClick('button', { text: 'Log in' });
});

describe('phone', () => {
  beforeAll(async () => {
    await setPhoneViewport();
  });

  describe('logging in', () => {
    it('matches golden', async () => {
      await expect(page).toClick('button', { text: 'Log in' });
      // blur so the input field isn't auto-focused (cursor blinking causes diffs)
      page.$eval('input[id=email]', (e) => (e as any).blur());
      await sleep(500);
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  });
});

describe('tablet', () => {
  beforeAll(async () => {
    await setTabletViewport();
  });

  describe('logging in', () => {
    it('matches golden', async () => {
      await expect(page).toClick('button', { text: 'Log in' });
      // blur so the input field isn't auto-focused (cursor blinking causes diffs)
      page.$eval('input[id=email]', (e) => (e as any).blur());
      await sleep(500);
      const image = await page.screenshot();
      expect(image).toMatchImageSnapshot();
    });
  });
});

function sleep(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export {};
