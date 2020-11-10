import React from 'react';
import axiosWithAuth from 'axios';

class AddAfriend extends React.Component {
  state = {
    newFriend: {
      name: '',
      age: '',
      email: '',
    },
  };

  handleChanges = (e) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value,
      },
    });
  };

  AddFriend = () => {
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', this.state.newFriend, {
        headers: { Authorization: localStorage.getItem('token') },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.newFriend);
    return (
      <div>
        <form onSubmit={this.AddFriend}>
          <input
            type="text"
            name="name"
            value={this.state.newFriend.name}
            onChange={this.handleChanges}
            placeholder="Add Name"
          />
          <input
            type="text"
            name="age"
            value={this.state.newFriend.age}
            onChange={this.handleChanges}
            placeholder="Add Age"
          />
          <input
            type="text"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.handleChanges}
            placeholder="Add Email"
          />

          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddAfriend;
