import { Component, useEffect, useState } from "react";

import React from "react";

const App = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react');
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react');
  const fetchNews = () => {
    fetch(url)
      .then((result) => result.json())
      // .then((data)=>console.log(data))
      .then((data) => setNews(data?.hits))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    console.log('searchQuery :', searchQuery); // This will log already updated value but not with latest update ( to get update with latest value have to use useEffect as below)
  }
  
  useEffect(() => { // To check the log when update as it's 
    console.log('searchQuery ( Use effect) :', searchQuery);
  }, [searchQuery]);

const handleSubmit = (e) => {
  e.preventDefault()
  setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
}

  return (
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange}/>
        <button>Search</button>
      </form>
      {news.map((n, i) => {
        return <p key={i}>{n?.title}</p>;
      })}
    </div>
  );
};

export default App;

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Clicked ${count} times`;
//   });

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2>Counter App</h2>
//       <button onClick={increment}>Clicked {count} times</button>
//     </div>
//   );
// };

// export default App;

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
