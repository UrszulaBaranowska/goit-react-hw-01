// src/components/FriendList/FriendListItem.jsx
import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={styles.item}>
      <img src={avatar} alt={`${name}'s avatar`} width="60" />
      <p className={styles.name}>{name}</p>
      <div
        className={styles.status}
        style={{ color: isOnline ? "green" : "red" }}
      >
        {isOnline ? "Online" : "Offline"}
      </div>
    </li>
  );
};

export default FriendListItem;
