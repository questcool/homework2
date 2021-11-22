import React from "react";

const MyHoc = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} personalProp={'my personal prop made by hoc'} />
        </div>
      );
    }
  }

  return HOC;
};

export default MyHoc;
