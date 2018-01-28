import * as React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import AndroidIcon from 'material-ui/svg-icons/action/android';
import GroupIcon from 'material-ui/svg-icons/social/group';
import {List, ListItem} from 'material-ui/List';
import * as shortid from 'shortid';
import * as PropTypes from 'prop-types';

interface IOpponentPickerProps {
  options: OpponentPickerOption[];
  history: { push: (url: string) => void };
}

export enum OpponentPickerOption {
  EasyAI,
  MediumAI,
  HardAI,
  Friend,
}

export class OpponentPicker extends React.Component<IOpponentPickerProps, {}> {
  static propTypes = {
    options: PropTypes.array,
    history: PropTypes.object,
  };

  render() {
    const options = [];
    for (const option of this.props.options) {
      options.push(this._getListItem(option));
    }
    return (
      <Card>
        <CardTitle title="Choose Opponent" />
        <CardText>
          <List style={{textAlign: 'left'}}>{options}</List>
        </CardText>
      </Card>
    );
  }

  _getListItem(option: OpponentPickerOption) {
    let text = '';
    let icon = <AndroidIcon />;
    switch (option) {
      case OpponentPickerOption.EasyAI:
        text = 'Easy AI';
        icon = <AndroidIcon />;
        break;
      case OpponentPickerOption.MediumAI:
        text = 'Medium AI';
        icon = <AndroidIcon />;
        break;
      case OpponentPickerOption.HardAI:
        text = 'Hard AI';
        icon = <AndroidIcon />;
        break;
      case OpponentPickerOption.Friend:
        text = 'Friend';
        icon = <GroupIcon />;
        break;
    }
    return (
      <ListItem
        key={text}
        primaryText={text}
        leftIcon={icon}
        onClick={this._onClick(option)}
      />);
  }

  _onClick(option: OpponentPickerOption) {
    return () => {
      this.props.history.push(this._getUrl(option));
    };
  }

  _getUrl(option: OpponentPickerOption) {
    switch (option) {
      case OpponentPickerOption.EasyAI:
        return 'ai/easy';
      case OpponentPickerOption.MediumAI:
        return 'ai/medium';
      case OpponentPickerOption.HardAI:
        return 'ai/hard';
      case OpponentPickerOption.Friend:
        return 'match/' + shortid.generate();
    }
  }
}
