import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

class PartyCard extends React.Component {
  componentWillMount() {
    this.setState({link: window.location.href,
      linkCopied: false});
  }
  copyLink() {
    return () => {
      this.setState({linkCopied: true});
      ReactGA.event({
        category: 'PartyView',
        action: 'copyLink',
      });
    };
  }
  render () {
    let partyMemberList = this.props.party.usersNickname.join(', ');
    return (
      <div>
        <Snackbar
          open={this.state.linkCopied}
          message="Link copied to clipboard"
          onRequestClose={() => this.setState({linkCopied: false})}
          autoHideDuration={4000}
        />
        <Card>
          <CardHeader
            title={this.props.party.name}
            subtitle={this.props.party.users.length+' members'}
          />
          <CardText>
            Members: {partyMemberList}
          </CardText>

          <CardActions style={{textAlign: 'right'}}>
            <CopyToClipboard text={this.state.link}
              onCopy={this.copyLink()}>
              <RaisedButton label="Copy Invite Link" secondary={true} />
            </CopyToClipboard>
          </CardActions>
        </Card>
      </div>
    );
  }
}

PartyCard.propTypes = {
  party: PropTypes.object.isRequired
};

export default PartyCard;
