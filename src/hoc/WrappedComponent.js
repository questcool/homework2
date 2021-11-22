import React from "react";
import MyHoc from "./MyHoc";

const DisplayTheWrapped = (props) => (
  <div>
    <p>
      <a href="/">На главную</a>
    </p>
    <p>Жирным выделен проп, добавленный с помощью hoc.</p>
    This is <span style={{ fontWeight: "bold" }}>{props.personalProp}</span>.
  </div>
);

const MyWrappedComponent = MyHoc(DisplayTheWrapped);

export default MyWrappedComponent;
