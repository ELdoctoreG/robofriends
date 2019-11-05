import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <Fragment>
      {/* We do a loop to all robots.js */
      robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </Fragment>
  );
};

export default CardList;
