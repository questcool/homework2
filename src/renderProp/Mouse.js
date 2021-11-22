import React from "react";
import ShowCoordinates2 from "./ShowCoordinates2";
import ShowCoordinates1 from "./ShowCoordinates1";

export class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div
        style={{
          height: "100px",
          width: 500,
          backgroundColor: "grey",
          margin: 10,
        }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <a href="/">На главную</a>
        <h3>
          Перемещайте курсор мыши в прямоугольных областях, чтобы узнать
          координаты!
        </h3>
        <Mouse render={(mouse) => <ShowCoordinates1 mouse={mouse} />} />
        <Mouse render={(mouse) => <ShowCoordinates2 mouse={mouse} />} />
      </div>
    );
  }
}
