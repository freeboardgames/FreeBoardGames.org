import React from 'react';

import { Chain, Hotel } from '../types';
import css from './HotelGrid.module.css';
import { Hotels } from '../hotels';

interface HotelGridProps {
  hotels: Hotels;
  lastPlacedHotel?: string;
  isPlacingHotel: boolean;
  playerID: string;
  onHotelClicked: (id: string) => void;
}

interface HotelGridState {
  hoveredHotel?: string;
}

const SQUARE_SIZE = 100;
const GRID_SPACING = 10;
const ROW_COLUMN_LABEL_MARGIN = 50;
const SQUARE_LABEL_Y_OFFSET = 4;

export class HotelGrid extends React.Component<HotelGridProps, HotelGridState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hotelClass(hotel: Hotel) {
    if (hotel.hasBeenPlaced) {
      return hotel.chain ? css[hotel.chain] : css.Unclaimed;
    } else if (hotel.hasBeenRemoved) {
      return css.Removed;
    } else if (hotel.drawnByPlayer === this.props.playerID) {
      return css.InRack;
    } else {
      return css.Empty;
    }
  }

  renderHotel(chainTiles: {}, row: number, hotel: Hotel, column: number) {
    const x = ROW_COLUMN_LABEL_MARGIN + GRID_SPACING / 2 + column * SQUARE_SIZE;
    const y = ROW_COLUMN_LABEL_MARGIN + GRID_SPACING / 2 + row * SQUARE_SIZE;
    const labelX = x + (SQUARE_SIZE - GRID_SPACING) / 2;
    let labelY = y + SQUARE_SIZE / 2 + SQUARE_LABEL_Y_OFFSET;

    const isHovered = this.state.hoveredHotel === hotel.id;
    const hoverClass = this.props.isPlacingHotel && isHovered ? css.Hover : '';
    const isLastPlaced = this.props.lastPlacedHotel === hotel.id;

    const className = `${css.Hotel} ${this.hotelClass(hotel)} ${hoverClass}`;
    const labelClassName = `${css.HotelLabel} ${this.hotelClass(hotel)} ${hoverClass}`;
    const elementId = `hotel-${hotel.id}`;

    let content;
    let character;
    if (isLastPlaced) {
      character = '★';
      labelY = labelY - 4; // The star needs to be moved up a bit to center it
    } else if (hotel.hasBeenRemoved) {
      character = '✕';
    } else if (!hotel.hasBeenPlaced && hotel.drawnByPlayer === this.props.playerID) {
      character = '＋';
    } else if (chainTiles[hotel.id]) {
      character = chainTiles[hotel.id];
    }
    if (character) {
      content = (
        <text
          key={`label-${elementId}`}
          className={labelClassName}
          x={labelX}
          y={labelY}
          textAnchor="middle"
          dominantBaseline="middle"
          pointerEvents="none"
        >
          {character}
        </text>
      );
    }

    return [
      <rect
        x={x}
        y={y}
        width={SQUARE_SIZE - GRID_SPACING}
        height={SQUARE_SIZE - GRID_SPACING}
        key={elementId}
        id={elementId}
        className={className}
        onClick={() => this.props.onHotelClicked(hotel.id)}
        onMouseEnter={() => this.setState({ hoveredHotel: hotel.id })}
        onMouseLeave={() => this.setState({ hoveredHotel: undefined })}
        pointerEvents="visibleFill"
      ></rect>,
      content,
    ];
  }

  renderHotelRow(chainTiles: {}, row: Hotel[], i: number) {
    const elements = row.flatMap(this.renderHotel.bind(this, chainTiles, i));
    elements.push(
      <text
        key={`hotel-row-${i}`}
        x={ROW_COLUMN_LABEL_MARGIN / 2}
        y={ROW_COLUMN_LABEL_MARGIN + SQUARE_SIZE / 2 + i * SQUARE_SIZE}
        className={css.GridLabel}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'][i]}
      </text>,
    );
    return elements;
  }

  renderColumnHeaders() {
    const headers = [];
    for (let i = 0; i < 12; i++) {
      headers.push(
        <text
          key={`header-${i + 1}`}
          className={css.GridLabel}
          y={ROW_COLUMN_LABEL_MARGIN / 2}
          x={`${ROW_COLUMN_LABEL_MARGIN + SQUARE_SIZE / 2 + i * SQUARE_SIZE}`}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {i + 1}
        </text>,
      );
    }
    return headers;
  }

  render() {
    const chainTiles = {};
    for (const key of Object.keys(Chain)) {
      const chain = Chain[key];
      const firstHotel = this.props.hotels
        .allHotels()
        .find((h) => h.chain === chain && h.id !== this.props.lastPlacedHotel);
      if (firstHotel) {
        chainTiles[firstHotel.id] = chain[0]; // first letter of chain
      }
    }
    return (
      <div className={css.HotelGridContainer}>
        <svg viewBox="0 0 1250 950" className={css.HotelGrid}>
          <g className={css.HotelGrid}>
            {this.renderColumnHeaders()}
            {this.props.hotels.hotelGrid().map(this.renderHotelRow.bind(this, chainTiles))}
          </g>
        </svg>
      </div>
    );
  }
}
