import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
const ref = React.createRef();
let isAdd = true;
function Card(props) {
  const [name, setName] = useState("");
  const addItem = (
    <Fragment>
      <h1>new add</h1>
      <div id="newAdd"></div>
    </Fragment>
  );

  return (
    <div style={{ border: "1px solid black" }}>
      <input
        ref={ref}
        type="text"
        onChange={() => setName(ref.current.value)}
        value={name}
        placeholder="menu item"
      ></input>
      <button onClick={props.add}>add</button>
      {isAdd ? addItem : <span></span>}
    </div>
  );
}

function newAdd(text) {
  const div = document.getElementById("newAdd");
  const p = document.createElement("p");
  const element = document.createElement("div");
  element.innerText = text;
  p.append(element);
  div.append(p);
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    add: () => {
      newAdd(ref.current.value);
      return dispatch({ type: "add", payload: { ref } });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
