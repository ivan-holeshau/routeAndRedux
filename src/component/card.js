import React, { useState, useEffect } from "react";

function Card() {
  const [name, setName] = useState("no name");
  useEffect(() => {
    const status = document.getElementById("status");
    status.innerHTML = name;
  });

  const ref = React.createRef();
  return (
    <div style={{ border: "1px solid black" }}>
      {name}
      <input
        ref={ref}
        type="text"
        onChange={() => setName(ref.current.value)}
        value={name}
      ></input>
    </div>
  );
}

export default Card;
