import React from 'react';
import { DesktopView, MobileView } from 'infra/common/device/DesktopMobileView';
import { DesktopCarousel } from './DesktopCarousel';
import { MobileCarousel } from './MobileCarousel';

interface CarouselProps {
  height?: string;
}

export class Carousel extends React.Component<CarouselProps, {}> {
  static defaultProps = {
    height: '250px',
  };
  render() {
    return (
      <>
        <DesktopView>
          <DesktopCarousel height={this.props.height}>{this.props.children}</DesktopCarousel>
        </DesktopView>
        <MobileView>
          <MobileCarousel height={this.props.height}>{this.props.children}</MobileCarousel>
        </MobileView>
      </>
    );
  }
}
