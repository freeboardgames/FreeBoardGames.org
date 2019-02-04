import * as React from 'react';

interface IGameDarkSublayoutProps {
  children: React.ReactNode;
}

export class GameDarkSublayout extends React.Component<IGameDarkSublayoutProps, {}> {
  constructor(props: IGameDarkSublayoutProps) {
    super(props);
    if (typeof window !== 'undefined') {
      document.body.style.backgroundColor = 'black';
    }
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = undefined;
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          color: 'white',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '500px',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
