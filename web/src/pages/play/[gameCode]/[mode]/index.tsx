import AIOrLocalGame from 'infra/game/AIOrLocalGame';
import { getGameDefinition, getGameCodeNamespace, getSerializableGameDef } from 'infra/game';
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

  const namespaces = ['common', 'GameBoardWrapper', 'GameOver', 'LoadingMessage', gameNamespace];

  // Only pass serializable parts of gameDef (exclude function properties)
  const serializableGameDef = getSerializableGameDef(gameDef);

  return {
    props: {
      gameCode,
      gameDef: serializableGameDef,
      mode,
      ...(await serverSideTranslations(locale!, namespaces)),
    },
  };
};
