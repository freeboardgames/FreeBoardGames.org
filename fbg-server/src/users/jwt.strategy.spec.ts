import { JwtStrategy } from './jwt.strategy';

describe('JWT Strategy', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const fakePayload: any = { userId: 'fakeUserId' };
  const fakeUser = 'user';
  const mockGetById = jest.fn();
  const mockUsersService: any = { getById: mockGetById };

  const jwtStrategy = new JwtStrategy(mockUsersService);

  it('will not validate', async () => {
    mockGetById.mockRejectedValue({ error: 'error' });
    const res = await jwtStrategy.validate(fakePayload);
    expect(res).toBeNull();
  });

  it('will validate', async () => {
    mockGetById.mockResolvedValue(fakeUser);
    const res = await jwtStrategy.validate(fakePayload);
    expect(res).toEqual(fakeUser);
  });
});
