import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

export default class FriendList extends Component {
  static propTypes = {
    friends: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    let list = [];
    mapValues(this.props.friends, (friend) => {
      list.push(<FriendListItem
          key={friend.id}
          id={friend.id}
          name={friend.name}
          starred={friend.starred}
          {...this.props.actions} />);
    })
    return (
        <ul className={styles.friendList}>
          {
            list
          }
        </ul>
    );
  }

}
