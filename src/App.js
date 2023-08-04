import { Component, useEffect, useState } from "react";

import React from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={increment}>Clicked {count} times</button>
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   componentDidMount() { //works when page renders
//     document.title = `Clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() { //works when page update
//     document.title = `Clicked ${this.state.count} times`;
//   }
//   render() {
//     return (
//       <div>
//         <h2>Counter App</h2>
//         <button onClick={this.increment}>
//           Clicked {this.state.count} times
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
