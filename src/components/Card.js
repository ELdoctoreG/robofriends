import React, { Fragment } from "react";

const Card = ({ name, position, email, id }) => {
  return (
    <div className="card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      {/* Fragment is used to eliminate the div, this will grouped the elements in react but in DOM will disappear */}
      <Fragment>
        <h2>{name}</h2>
        <h3>{position}</h3>
        <p>{email}</p>
      </Fragment>
    </div>
  );
};

export default Card;
