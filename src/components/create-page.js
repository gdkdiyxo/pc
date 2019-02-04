import React from "react";
import "./create-page.css";

import DesignWindow from "./design-window";

export default function CreatePage() {
  return (
    <div>
      <main role="main">
        <div className="search-form-wrapper">
          <h3>1) Find an image!</h3>
          <form>
            <label htmlFor="search">Search for anything</label>
            <input id="search" />
            <button type="submit">Search</button>
            <button>Or, upload one of your images</button>
          </form>
        </div>

        <div className="message-form-wrapper">
          <h3>2) Add your message!</h3>
          <textarea defaultValue="Drop somebody a line!" />
        </div>
        <DesignWindow />
        <div className="recipient-form-wrapper">
          <h3>3) Address your postcard!</h3>
          <form>
            <label htmlFor="recipient-list">Send your postcard!</label>
            <input
              id="recipient-list"
              type="email"
              defaultValue="add emails here"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </main>
    </div>
  );
}
