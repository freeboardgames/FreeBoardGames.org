import { GetLobby_lobby } from 'gqlTypes/GetLobby';
import { RoomDisplay } from './GameCardWithOverlay';

const SHORT_ID_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
const ANIMALS = [
  'Goat',
  'Hippo',
  'Giraffe',
  'Cow',
  'Kangaroo',
  'Horse',
  'Camel',
  'Dog',
  'Elephant',
  'Tiger',
  'Lion',
  'Zebra',
  'Sheep',
  'Crab',
  'Dolphin',
  'Turtle',
  'Monkey',
  'Snake',
  'Shark',
  'Rhino',
  'Starfish',
  'Whale',
  'Crocodile',
  'Octopus',
  'Jellyfish',
];

export interface GroupedRoomDisplay {
  [gameCode: string]: RoomDisplay[];
}

export function getGroupedRoomsDisplay(lobby: GetLobby_lobby): GroupedRoomDisplay {
  const result: GroupedRoomDisplay = {};
  for (const room of lobby.rooms) {
    if (!(room.gameCode in result)) {
      result[room.gameCode] = [];
    }
    result[room.gameCode].push({
      name: shortIdToAnimal(room.id),
      id: room.id,
      capacity: room.capacity,
      occupancy: (room.userMemberships || []).length,
      gameCode: room.gameCode,
    });
  }
  return result;
}

function shortIdToNumber(id: string) {
  let result = 0;
  for (let i = id.length - 1; i >= 0; i--) {
    const digit = SHORT_ID_CHARS.indexOf(id[i]);
    if (digit === -1) {
      throw new Error(`Invalid char: ${id[i]}`);
    }
    result += digit * Math.pow(SHORT_ID_CHARS.length, i);
  }
  return result;
}

export function shortIdToAnimal(id: string) {
  return ANIMALS[shortIdToNumber(id) % ANIMALS.length];
}
