import React, { Fragment, useState } from "react";
import "./App.css";
import LinkCard from "./components/LinkCard";

const App = () => {
  const [cardData, setCardData] = useState([
    { linkName: "my link", linkHref: "https://github.com" }
  ]);

  const [newCard, setNewCard] = useState({ linkName: "", linkHref: "" });

  const dispatchCardSet = payload => {
    let oldArray = cardData;
    let newArray = [...oldArray, payload];
    setCardData(newArray);
    setNewCard({ linkHref: "", linkName: "" });
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
                onChange={e =>
                  setNewCard({ ...newCard, linkName: e.currentTarget.value })
                }
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
                onChange={e =>
                  setNewCard({ ...newCard, linkHref: e.currentTarget.value })
                }
                type="text"
                name="linkTitle"
                minLength="7"
                placeholder="https://example.com/"
              />
            </div>
            <button onClick={() => dispatchCardSet(newCard)}>Add</button>
          </form>
        </div>
        <div className="rightContent">
          <LinkCard />
        </div>
      </main>
    </Fragment>
  );
};

export default App;
