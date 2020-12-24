import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const dropdown = (options: string[], selectedIdx: number, callback: (idx: number) => void) => {
  const list: JSX.Element[] = options.map((option, idx) => {
    idx++;
    return (
      <MenuItem onClick={() => callback(idx)} key={option} value={option} selected={selectedIdx === idx}>
        {option}
      </MenuItem>
    );
  });
  return (
    <div>
      <MenuList
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          display: 'flex',
        }}
      >
        {list}
      </MenuList>
    </div>
  );
};

export default dropdown;
