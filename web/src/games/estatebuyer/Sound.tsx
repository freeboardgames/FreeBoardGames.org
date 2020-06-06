import PassSound from './media/pass.wav';
import BidSound from './media/bid.mp3';
import CardSelectSound from './media/cardSelect.wav';
import GameStartSound from './media/gamestart.wav';

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
