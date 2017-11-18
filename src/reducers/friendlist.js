import * as types from '../constants/ActionTypes';
import assign from 'lodash/object/assign';
import _ from 'lodash';
import mapValues from 'lodash/object/mapValues';

const initialState = {
    friends: [1, 2, 3],
    friendsById: [
        {
            id: 1,
            name: 'Nikita Patel',
            starred: false
        },
        {
            id: 2,
            name: 'Sweety Lakdiwala',
            starred: false
        },
        {
            id: 3,
            name: 'Sweta Kanpariya',
            starred: false
        }
    ]
};

const sortedList = (obj) => {
  return _.sortBy(_.sortBy(obj, 'name'), {'starred': false});
}

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newId = state.friends[state.friends.length-1] + 1;
      var obj = {
        ...state.friendsById,
        [newId]: {
          id: newId,
          name: action.name,
          starred: false
        }
      }

        return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: sortedList(obj),
      }

    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: state.friendsById.filter((friend) => {
            return friend.id != action.id
        })
      }

    case types.STAR_FRIEND:
      return {
        ...state,
        friendsById: sortedList(mapValues(state.friendsById, (friend) => {
          return friend.id === action.id ?
              assign({}, friend, { starred: !friend.starred }) :
              friend
        }))
      }

    case types.EDIT_FRIEND:
      var obj = mapValues(state.friendsById, (friend) => {
        return friend.id === action.id ?
            assign({}, friend, { name: action.name }) :
            friend
      })
      return {
        ...state,
        friendsById: sortedList(obj),
      }
    default:
      return state;
  }
}
