import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const slider = (min: number, max: number, value: number, callback: (value: number) => void) => { 
 return (
      <div style={{ margin: '8px', width: '80%' }}>
        <Typography id="label" style={{ marginBottom: '8px' }}>
          Difficulty {value}/{max}
        </Typography>
        <Slider
          value={value}
          min={min}
          max={max}
          step={1}
          onChange={() => callback(value)}
        />
      </div>
    );
 };

 export default slider;