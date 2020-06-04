import React, { useState } from "react";
import { IncrementCountAction } from "./Action/action";
import "./App.css";
import { connect } from "react-redux";

function App({ myincrement, mycount }) {
  return (
    <div className="App">
      <button onClick={() => myincrement()}>{mycount}</button>
    </div>
  );
}
const mapStateToprops = (state) => ({
  mycount: state.count,
});
const mapsDispatchToProps = {
  myincrement: IncrementCountAction,
};

export default connect(mapStateToprops, mapsDispatchToProps)(App);
