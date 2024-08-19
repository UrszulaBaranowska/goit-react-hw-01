// src/App.jsx
import React from "react";
import Profile from "./Profile/Profile";
import user from "./Profile/userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friendListData.json";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React homework 1</h1>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "red" }}>
        Part 1 - User profile
      </h2>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px",
          color: "red"
        }}
      >
        Part 2 - User Friends List
      </h2>
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
