export const mockWithRouter = () => {
  return function setRouter(router) {
    jest.doMock('infra/i18n/hocs/withRouter', () => ({
      withRouter: (Component) => (props) => <Component {...props} router={router} />,
    }));

    afterEach(() => {
      jest.unmock('infra/i18n/hocs/withRouter');
    });
  };
};
