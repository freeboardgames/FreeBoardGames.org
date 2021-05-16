import NicknameRequired from 'infra/common/components/auth/NicknameRequired';

export const withNickNameRequired = function (Component) {
  return function (props) {
    return (
      <NicknameRequired>
        <Component {...props} />
      </NicknameRequired>
    );
  };
};
