import PassSound from './media/pass.mp3';
import BidSound from './media/bid.mp3';
import CardSelectSound from './media/cardSelect.mp3';
import GameStartSound from './media/gamestart.mp3';

let sounds: HTMLAudioElement[];
sounds = [];

const SoundMapping = {
  "Bid": BidSound,
  "Pass": PassSound,
  "CardSelect": CardSelectSound,
  "Start": GameStartSound,
}

export const playSound = (soundType) => {
  if (!(soundType in SoundMapping)){
    return;
  }

  if (!(soundType in sounds)) {
    sounds[soundType] = new Audio(SoundMapping[soundType]);
  }
  sounds[soundType].play();
};
