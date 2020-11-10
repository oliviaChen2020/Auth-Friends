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
      .get('/friends')
      .then((res) => {
        console.log(res.data);
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
        <AddFriend addFriend={addFriend} />
        {this.state.friends.map((friend) => {
          return (
            <div className="friends" key={friend.id}>
              <p>Name: {friend.name}</p>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default FriendsList;
