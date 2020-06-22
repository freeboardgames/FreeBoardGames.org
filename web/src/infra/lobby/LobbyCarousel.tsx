import React from 'react';
import { Carousel } from 'infra/common/components/carousel/Carousel';
import { LobbyService } from 'infra/common/services/LobbyService';

export class LobbyCarousel extends React.Component<{}, {}> {
  componentDidMount() {
    this.getLobby();
  }

  render() {
    return <Carousel>Hello world</Carousel>;
  }

  getLobby() {
    LobbyService.getLobby();
  }
}
