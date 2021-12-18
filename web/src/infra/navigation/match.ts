export const match = (matchId: string) => {
  return `/${['match', matchId].filter((e) => e != null).join('/')}`;
};
