import React, { Fragment } from "react";

const LinkCard = props => {
  const linkImageStyle = {
    background: "url('https://bit.ly/2CJMRoS')"
  };
  return (
    <Fragment>
      <div className="linkCard">
        <div className="linkCardImage" style={linkImageStyle} />
        <div className="linkCardLink">
          <h2>
            <a href="/#">My link</a>
          </h2>
        </div>
      </div>
    </Fragment>
  );
};
export default LinkCard;
