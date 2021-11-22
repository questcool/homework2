import React from "react";

export default class ShowCoordinates2 extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return <div>{`Положение курсора (2 компонент): ${mouse.x}, ${mouse.y}`}</div>;
  }
}
