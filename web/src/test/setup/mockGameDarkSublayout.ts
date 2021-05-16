jest.mock('gamesShared/components/fbg/GameDarkSublayout', () => {
  const { GameDarkSublayoutInternal, ...others } = jest.requireActual('gamesShared/components/fbg/GameDarkSublayout');
  return {
    ...others,
    GameDarkSublayoutInternal,
    GameDarkSublayout: GameDarkSublayoutInternal,
  };
});

export {};
