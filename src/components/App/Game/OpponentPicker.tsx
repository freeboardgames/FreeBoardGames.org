import * as React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import AndroidIcon from 'material-ui/svg-icons/action/android';
import GroupIcon from 'material-ui/svg-icons/social/group';
import {List, ListItem} from 'material-ui/List';
import * as PropTypes from 'prop-types';

interface IOpponentPickerProps {
    onClick: (opponentType: string, aiLevel: string) => void;
}

class OpponentPicker extends React.Component<IOpponentPickerProps, {}> {
  static propTypes = {
    onClick: PropTypes.func,
  };

  render() {
    return (
      <Card>
        <CardTitle title="Choose Opponent" />
        <CardText>
          <List style={{textAlign: 'left'}}>
            <ListItem
              primaryText="Easy AI"
              leftIcon={<AndroidIcon />}
              disabled={true}
              onClick={this._onClick('ai', 'easy')}
              style={{textDecoration: 'line-through'}}
            />
            <ListItem
              primaryText="Medium AI"
              leftIcon={<AndroidIcon />}
              disabled={true}
              onClick={this._onClick('ai', 'medium')}
              style={{textDecoration: 'line-through'}}
            />
            <ListItem
              primaryText="Hard AI"
              leftIcon={<AndroidIcon />}
              disabled={true}
              onClick={this._onClick('ai', 'hard')}
              style={{textDecoration: 'line-through'}}
            />
            <ListItem
              primaryText="Friend"
              leftIcon={<GroupIcon />}
              onClick={this._onClick('match', null)}
            />
          </List>
        </CardText>
      </Card>
    );
  }

  _onClick(opponentType: string, code: string) {
    return () => { this.props.onClick(opponentType, code); };
  }
}

export default OpponentPicker;
