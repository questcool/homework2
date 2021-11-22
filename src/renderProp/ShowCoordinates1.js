import React from "react";

export default class ShowCoordinates1 extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return <div>{`Положение курсора (1 компонент): ${mouse.x}, ${mouse.y}`}</div>;
  }
}
