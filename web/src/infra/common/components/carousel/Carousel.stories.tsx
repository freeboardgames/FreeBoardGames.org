import { MobileCarousel } from './MobileCarousel';
import { DesktopCarousel } from './DesktopCarousel';

export default {
  title: 'Infrastructure/Common/Carousel/Carousel',
};

const commonStyle = { minWidth: '250px', height: '250px' };
export const Mobile = () => (
  <MobileCarousel>
    <>
      <div style={{ backgroundColor: 'red', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'yellow', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'green', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'blue', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'gray', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'purple', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'red', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'yellow', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'green', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'blue', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'gray', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'purple', ...commonStyle }}></div>
    </>
  </MobileCarousel>
);

export const Desktop = () => (
  <DesktopCarousel>
    <>
      <div style={{ backgroundColor: 'red', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'yellow', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'green', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'blue', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'gray', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'purple', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'red', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'yellow', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'green', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'blue', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'gray', ...commonStyle }}></div>
      <div style={{ backgroundColor: 'purple', ...commonStyle }}></div>
    </>
  </DesktopCarousel>
);
