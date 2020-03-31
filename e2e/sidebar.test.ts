describe('phone', () => {
  beforeAll(async () => {
    await setPhoneViewport();
    await page.goto(baseURL + '/');
  });
  beforeAll(async () => {});
  it('matches golden when closed', async () => {
    const image = await page.screenshot();
    await expect(image).toMatchImageSnapshot();
  });
  it('matches golden when opened', async () => {
    await page.click('[aria-label="open drawer"]');
    await sleep(500);
    const image = await page.screenshot();
    await expect(image).toMatchImageSnapshot();
  });
});

describe('tablet', () => {
  beforeAll(async () => {
    await setTabletViewport();
    await page.goto(baseURL + '/');
  });
  it('matches golden when closed', async () => {
    const image = await page.screenshot();
    await expect(image).toMatchImageSnapshot();
  });
  it('matches golden when opened', async () => {
    await page.click('[aria-label="open drawer"]');
    await sleep(500);
    const image = await page.screenshot();
    await expect(image).toMatchImageSnapshot();
  });
});

function sleep(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export {};
