import React, { useContext } from "react";
import { SecretContext } from "../App";

function MyContext() {
  const context = useContext(SecretContext);
  return (
    <div>
      <p><a href="/">На главную</a></p>
      Из глобального контекста передана фраза:{" "}
      <span style={{ fontWeight: "bold" }}>{context}</span>
    </div>
  );
}

export default MyContext;
