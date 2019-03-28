import React, { Fragment, useState } from "react";
import "./App.css";

const App = () => {
  const [cardData, setCardData] = useState([
    { linkName: "my link", linkHref: "https://github.com" }
  ]);

  const [newCard, setNewCard] = useState({ linkName: "", linkHref: "" });

  const linkImageStyle = {
    background: "url('https://bit.ly/2CJMRoS')"
  };

  return (
    <Fragment>
      <nav className="navigation">
        <a>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://bit.ly/2CJMRoS"
            alt=""
          />
        </a>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <main>
        <div className="leftContent">
          <img src="https://bit.ly/2CJMRoS" alt="" />
          <form onSubmit={e => e.preventDefault()}>
            <h2 className="formTitle">Add a bookmark</h2>
            <div>
              <label htmlFor="linkTitle" className="formLabel">
                Enter a bookmark name
              </label>
              <input
                value={newCard.linkName}
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="25 charcter max"
              />
            </div>
            <div>
              <label htmlFor="linkHref" className="formLabel">
                Enter a bookmark name
              </label>
              <input
                value={newCard.linkHref}
                onChange={e => setNewCard}
                type="text"
                name="linkTitle"
                minLength="7"
                placeholder="https://example.com/"
              />
            </div>
            <button>Add</button>
          </form>
        </div>
        <div className="rightContent">
          <div className="linkCard">
            <div className="linkCardImage" style={{ linkImageStyle }} />
            <div className="linkCardLink">
              <h2>
                <a href="/#">My link</a>
              </h2>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
