import React from 'react';

export class MobileCarousel extends React.Component<{}, {}> {

  render() {
    return (
      <div style={{ overflowX: 'auto', overflowY: 'hidden', height: '250px', width: '100%', display: 'flex', flexWrap: 'nowrap' }}>
        {this.props.children}
      </div>
    );
  }
}