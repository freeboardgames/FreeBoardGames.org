import { Checkerboard } from './Checkerboard';
export default {
  title: 'Games (shared)/Components/Boards/Checkerboard',
};

const onClick = (coords) => {
  alert(JSON.stringify(coords));
};

export const simple = () => (
  <Checkerboard
    onClick={onClick}
    invert={false}
    primaryColor={'#ffce9e'}
    secondaryColor={'#d18b47'}
    highlightedSquares={{}}
    style={{
      maxWidth: '500px',
    }}
  />
);
export const highlighted = () => (
  <Checkerboard
    onClick={onClick}
    invert={false}
    primaryColor={'#ffce9e'}
    secondaryColor={'#d18b47'}
    highlightedSquares={{
      b3: 'green',
    }}
    style={{
      maxWidth: '500px',
    }}
  />
);
export const inverted = () => (
  <Checkerboard
    onClick={onClick}
    invert={true}
    primaryColor={'#ffce9e'}
    secondaryColor={'#d18b47'}
    highlightedSquares={{
      b3: 'green',
    }}
    style={{
      maxWidth: '500px',
    }}
  />
);
