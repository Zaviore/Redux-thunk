import React, { useState } from "react";

import "./App.css";
import { connect } from "react-redux";

function App({ dispatch, mycount }) {
  return (
    <div className="App">
      <button onClick={() => null}>{mycount}</button>
    </div>
  );
}
const mapStateToprops = (state) => ({
  mycount: state.count,
});

export default connect(mapStateToprops)(App);
