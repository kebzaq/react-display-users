import React from "react";

export default function User(props) {
  const {
    user: { firstName, lastName },
  } = props;
  return (
    <li>
      {firstName} {lastName}
    </li>
  );
}
