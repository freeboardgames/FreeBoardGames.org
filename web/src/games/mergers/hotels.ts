import { Chain, Hotel } from './types';

const DEFAULT_NUM_ROWS = 9;
const DEFAULT_NUM_COLUMNS = 12;

export class Hotels {
  hotels: Hotel[][];

  constructor(hotels: Hotel[][]) {
    this.hotels = hotels;
  }

  static rowToLetter(r: number): string {
    return String.fromCharCode('A'.charCodeAt(0) + r);
  }

  static letterToRow(l: string): number {
    return l.charCodeAt(0) - 'A'.charCodeAt(0);
  }

  static buildGrid(rows: number = DEFAULT_NUM_ROWS, columns: number = DEFAULT_NUM_COLUMNS): Hotel[][] {
    const hotels: Hotel[][] = [];
    for (let r = 0; r < rows; r++) {
      hotels.push([]);
      for (let c = 0; c < columns; c++) {
        hotels[r].push({
          id: `${c + 1}-${Hotels.rowToLetter(r)}`,
          hasBeenPlaced: false,
        });
      }
    }
    return hotels;
  }

  hotelGrid(): Hotel[][] {
    return this.hotels;
  }

  allHotels(): Hotel[] {
    return this.hotels.flat();
  }

  topLeftMostHotel(): Hotel {
    // relies on initial sort order
    const list = this.allHotels();
    list.sort((a, b) => Hotels.getColumn(a) - Hotels.getColumn(b));
    list.sort((a, b) => Hotels.getRow(a) - Hotels.getRow(b));
    return list.find((h) => h.hasBeenPlaced);
  }

  static isHotel(hotel: Hotel | string): hotel is Hotel {
    if ((hotel as Hotel).id) {
      return true;
    }
    return false;
  }

  static getRow(hotel: Hotel | string): number {
    const id: string = Hotels.isHotel(hotel) ? hotel.id : hotel;
    return Hotels.letterToRow(id.split('-')[1]);
  }

  static getColumn(hotel: Hotel | string): number {
    const id: string = Hotels.isHotel(hotel) ? hotel.id : hotel;
    return Number(id.split('-')[0]) - 1; // -1 because columns are 0-based
  }

  getHotel(id: string): Hotel {
    return this.hotels[Hotels.getRow(id)][Hotels.getColumn(id)];
  }

  mergeHotel(id: string, hotel: Hotel) {
    Object.assign(this.hotels[Hotels.getRow(id)][Hotels.getColumn(id)], hotel);
  }

  adjacentHotels(hotel: Hotel): Hotel[] {
    const r = Hotels.getRow(hotel);
    const c = Hotels.getColumn(hotel);
    return this.hotels
      .flat()
      .filter((h) => h.hasBeenPlaced)
      .filter((h) => {
        const upOrDown = Math.abs(Hotels.getRow(h) - r) === 1 && Hotels.getColumn(h) === c;
        const leftOrRight = Math.abs(Hotels.getColumn(h) - c) === 1 && Hotels.getRow(h) === r;
        return upOrDown || leftOrRight;
      });
  }

  playerHotels(playerID: string) {
    return this.hotels.flat().filter((h) => {
      return h.drawnByPlayer === playerID && !h.hasBeenPlaced && !h.hasBeenRemoved;
    });
  }

  sizeOfChain(chain: Chain): number {
    return this.hotels.flat().filter((h) => h.chain === chain).length;
  }

  priceOfStock(chain: Chain): number | undefined {
    return Hotels.priceOfStockBySize(chain, this.sizeOfChain(chain));
  }

  static priceOfStockBySize(chain: Chain, size: number): number | undefined {
    if (size === 0) {
      return undefined;
    }

    let basePrice: number;
    if (size < 6) {
      basePrice = size * 100;
    } else if (size < 11) {
      basePrice = 600;
    } else if (size < 21) {
      basePrice = 700;
    } else if (size < 31) {
      basePrice = 800;
    } else if (size < 41) {
      basePrice = 900;
    } else {
      basePrice = 1000;
    }

    if ([Chain.Worldwide, Chain.American, Chain.Festival].includes(chain)) {
      return basePrice + 100;
    } else if ([Chain.Continental, Chain.Imperial].includes(chain)) {
      return basePrice + 200;
    } else {
      return basePrice;
    }
  }

  majorityBonus(chain: Chain): number {
    return this.priceOfStock(chain) * 10;
  }

  minorityBonus(chain: Chain): number {
    return this.priceOfStock(chain) * 5;
  }

  isUnplayable(hotel: Hotel) {
    if (hotel.hasBeenPlaced) {
      return false;
    }

    return this.isPermanentlyUnplayable(hotel) || this.isTemporarilyUnplayable(hotel);
  }

  // a hotel is unplayable if it would merge two unmergeable chains
  isPermanentlyUnplayable(hotel: Hotel, maxMergeableSize: number = 10) {
    const adjacentChains = new Set(
      this.adjacentHotels(hotel)
        .map((h) => h.chain)
        .filter((c) => !!c),
    );
    const unmergeableChains = Array.from(adjacentChains).filter((c) => {
      return this.sizeOfChain(c) > maxMergeableSize;
    });
    return unmergeableChains.length > 1;
  }

  // a hotel is unplayable if it would form a new chain, but they are all on the board
  isTemporarilyUnplayable(hotel: Hotel) {
    const chainsOnBoard: Chain[] = Object.keys(Chain)
      .map((key) => Chain[key])
      .filter((chain) => !!this.hotels.flat().find((h) => h.chain === chain));
    if (chainsOnBoard.length === 7) {
      const adjacent = this.adjacentHotels(hotel);
      return adjacent.length > 0 && adjacent.filter((h) => !!h.chain).length === 0;
    }
    return false;
  }
}
