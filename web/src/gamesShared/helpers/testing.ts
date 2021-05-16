export const gameWithSetupData = (game, quick, full) => ({
  ...game,
  setup: (ctx) => game.setup(ctx, { quick, full }),
});
