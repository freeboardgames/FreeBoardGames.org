import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import SignalWifiOff from 'material-ui/svg-icons/device/signal-wifi-off';
import SocialGroup from 'material-ui/svg-icons/social/group';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

class PartiesSection extends React.Component {
  render () {
    if (this.props.disconnected) {
      return (
         <div>
           <Subheader>Parties</Subheader>
           <ListItem primaryText="Offline"
                     leftIcon={<SignalWifiOff />}
                     style={{WebkitAppearance: 'inherit'}}
                     disabled={true}
                     key="0" />
         </div>);
    }
    // Parties list
    let partiesList = [];
    for (let i in this.props.parties) {
      let party = this.props.parties[i];
      partiesList.push((<ListItem
        leftIcon={<SocialGroup />}
        primaryText={party.name}
        rightIcon={<NavigationChevronRight />}
        style={{WebkitAppearance: 'inherit'}}
        onClick={this.props.viewParty(party._id)}
        key={party._id}
      />));
    }
    if (partiesList.length == 0) {
      partiesList.push(
        (
          <p key="0" style={{fontSize: '14px', paddingLeft: '16px',
            paddingRight: '16px'}}>
            You do not belong to any party yet.
            <br /><br />
            <a onClick={this.props.newParty} href="#">
              Create one
            </a> and invite your friends!
          </p>
        )
      );
    }
    return (
      <div>
        <Subheader>Parties</Subheader>
        {partiesList}
        <RaisedButton label="+ party" secondary={true}
        onClick={this.props.newParty}
        style={{float: 'right', marginTop: '8px', marginRight: '16px'}}/>
      </div>
    );
  }
}

PartiesSection.propTypes = {
  parties: PropTypes.array.isRequired,
  disconnected: PropTypes.bool.isRequired,
  viewParty: PropTypes.func.isRequired,
  newParty: PropTypes.func.isRequired
};

export default PartiesSection;
