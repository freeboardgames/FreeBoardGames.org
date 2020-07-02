import { GameSharing } from './GameSharing';

export default {
  title: 'Infrastructure/Room/GameSharing',
};

export const chess = () => <GameSharing gameCode="chess" roomID="foo" isPublic={false} />;
