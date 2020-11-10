import React, { useState } from 'react';

function AddFriend(props) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const friend = {
      name,
      age,
      email,
    };
    this.props.AddFriend(friend);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Age:
        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button> Add Friend</button>
    </form>
  );
}
export default AddFriend;
