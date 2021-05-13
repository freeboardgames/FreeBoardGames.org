jest.mock('next/router', () => ({
  query: '',
  push: jest.fn(),
  useRouter: jest.fn().mockReturnValue({
    route: '',
    pathname: '',
    query: {},
    asPath: '',
  }),
  withRouter: jest.fn(),
}));

export {};
