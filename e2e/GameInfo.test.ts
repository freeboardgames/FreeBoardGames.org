beforeEach(async () => {
  await page.goto(baseURL + '/play/tictactoe');
});

it('renders page', async () => {
  await expect(page).toMatch('Play Tic-Tac-Toe');
});

it('has title', async () => {
  const title = await page.title();
  expect(title).toEqual('Play Tic-Tac-Toe, A Classic Game - FreeBoardGames.org');
});

it('has game instruction video', async () => {
  await expect(page).toMatchElement('[data-testid=gameinstructionsvideo]', { visible: true });
});

export {};
