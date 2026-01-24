import AIOrLocalGame from 'infra/game/AIOrLocalGame';
import { getGameDefinition, getGameCodeNamespace } from 'infra/game';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default AIOrLocalGame;

export const getServerSideProps: GetServerSideProps = async ({ params, locale, res }) => {
  const gameCode = params?.gameCode as string;
  const mode = params?.mode as string;
  const gameDef = getGameDefinition(gameCode);

  if (!gameDef) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  const gameNamespace = getGameCodeNamespace(gameCode);

  const namespaces = ['common', 'GameBoardWrapper', 'GameOver', gameNamespace];

  return {
    props: {
      gameCode,
      gameDef,
      mode,
      ...(await serverSideTranslations(locale!, namespaces)),
    },
  };
};
