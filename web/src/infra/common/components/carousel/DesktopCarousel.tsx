import React from 'react';
import Fab from '@material-ui/core/Fab';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import css from './DesktopCarousel.css';

interface DesktopCarouselProps {
  height?: string;
}

interface DesktopCarouselState {
  scrollLeft: number;
  isDown: boolean;
  startX?: number;
  startScrollLeft?: number;
}

const BUTTON_SCROLL = 500;

export class DesktopCarousel extends React.Component<DesktopCarouselProps, DesktopCarouselState> {
  static defaultProps = {
    height: '250px',
  };
  private carouselRef = React.createRef<HTMLDivElement>();
  state = {
    scrollLeft: 0,
    isDown: false,
    startX: undefined,
    startScrollLeft: undefined,
  };

  render() {
    this.updateScroll();
    return (
      <div className={css.wrapper}>
        <div ref={this.carouselRef} className={css.carousel} style={{ height: this.props.height }}>
          {this.props.children}
        </div>
        {this.renderButtons()}
      </div>
    );
  }

  componentDidMount() {
    // See https://discourse.wicg.io/t/drag-to-scroll-a-simple-way-to-scroll-sideways-on-desktop/3627
    this.carouselRef.current.addEventListener('mousedown', this._mouseDown);
    this.carouselRef.current.addEventListener('mousemove', this._mouseMove);
    this.carouselRef.current.addEventListener('mouseleave', this._mouseLeave);
    this.carouselRef.current.addEventListener('mouseup', this._mouseLeave);
  }

  componentWillUnmount() {
    this.carouselRef.current.removeEventListener('mousedown', this._mouseDown);
    this.carouselRef.current.removeEventListener('mousemove', this._mouseMove);
    this.carouselRef.current.removeEventListener('mouseleave', this._mouseLeave);
    this.carouselRef.current.removeEventListener('mouseup', this._mouseLeave);
  }

  renderButtons() {
    return (
      <>
        <Fab className={css.leftButton} onClick={this._leftClick} disabled={this.state.scrollLeft <= 0}>
          <NavigateBeforeIcon />
        </Fab>
        <Fab
          className={css.rightButton}
          data-testid={'rightButton'}
          onClick={this._rightClick}
          disabled={this.state.scrollLeft >= this.maxScroll()}
        >
          <NavigateNextIcon />
        </Fab>
      </>
    );
  }

  updateScroll() {
    if (this.carouselRef.current) {
      this.carouselRef.current.scrollLeft = this.state.scrollLeft;
    }
  }

  maxScroll() {
    const el = this.carouselRef.current;
    if (!el) {
      return 100;
    }
    return el.scrollWidth - el.offsetWidth;
  }

  setScroll(scrollLeft: number) {
    this.setState({ scrollLeft });
  }

  scrollBy(scroll: number) {
    this.setScroll(this.state.scrollLeft + scroll);
  }

  _leftClick = () => {
    this.scrollBy(-BUTTON_SCROLL);
  };

  _rightClick = () => {
    this.scrollBy(+BUTTON_SCROLL);
  };

  _mouseDown = (e: any) => {
    this.setState({
      isDown: true,
      startX: e.pageX - this.carouselRef.current.offsetLeft,
      startScrollLeft: this.carouselRef.current.scrollLeft,
    });
  };

  _mouseMove = (e: any) => {
    if (!this.state.isDown) {
      return;
    }
    e.preventDefault();
    const x = e.pageX - this.carouselRef.current.offsetLeft;
    const walk = x - this.state.startX;
    this.setState({
      scrollLeft: this.state.startScrollLeft - walk,
    });
  };

  _mouseLeave = () => {
    this.setState({
      isDown: false,
    });
  };
}
