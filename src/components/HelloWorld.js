import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

// const HelloWorld = ({ name }) => {
//   return <h1>Hello {name}</h1>;
// };

export default HelloWorld;
