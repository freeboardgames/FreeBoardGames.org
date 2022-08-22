import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

interface DropdownProps {
  options: string[];
  selectedIdx: number;
  callback: (idx: number) => void;
}

const dropdown = (props: DropdownProps) => {
  const list: JSX.Element[] = props.options.map((option, idx) => {
    return (
      <MenuItem onClick={() => props.callback(idx)} key={option} value={option} selected={props.selectedIdx === idx}>
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
