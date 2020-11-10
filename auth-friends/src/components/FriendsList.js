import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import AddFriend from './AddFriend';

class FriendsList extends React.Component {
  state = {
    friends: [],
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then((res) => {
        console.log(res);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const addFriend = (friend) => {
      axiosWithAuth()
        .post('http://localhost:5000/api/friends', friend)
        .then((res) => {
          console.log(res.data);
          this.setState({
            friends: [...this.state.friends, friend],
          });
        });
    };
    return (
      <div>
        {this.state.friends.map((friend) => {
          return (
            <div>{(friend.name, friend.age, friend.email, friend.id)}</div>
          );
        })}
        <AddFriend addFriend={addFriend} />
      </div>
    );
  }
}
export default FriendsList;
