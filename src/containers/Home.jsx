import React from 'react';

import { connect } from 'react-redux';
import FriendListApp from './FriendListApp';

@connect(state => ({
    friendlist: state.friendlist
}))
class Home extends React.Component {

    render() {
        const { friendlist } = this.props;
        return (
            <div>
                <h1>Home...</h1>
                <FriendListApp friendsById={friendlist.friendsById}/>
            </div>
        )
    }
}

export default Home;