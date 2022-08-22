import React from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

interface SliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  callback: (value: number) => void;
}

const slider = (props: SliderProps) => {
  return (
    <div style={{ margin: '8px', width: '80%' }}>
      <Typography id="label" style={{ marginBottom: '8px' }}>
        {props.label} {props.value}/{props.max}
      </Typography>
      <Slider
        value={props.value}
        min={props.min}
        max={props.max}
        step={1}
        onChange={(_, newValue) => props.callback(newValue as number)}
      />
    </div>
  );
};

export default slider;
