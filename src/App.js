import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, useParams, useRouteMatch } from 'react-router-dom';
import RouterPage from './router';
import RouterPageWithProtect from './router/routerWithProtect';

const { REACT_APP_TARGET } = process.env;

function App() {
  const [user, setUser] = useState('')
  useEffect(() => {
    //test 
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setUser(json.title);
      })
      .catch(error => console.log(error));

  }, []);
  return (
    <main>
      <h1>Create React App {user}</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <RouterPage /> */}
        <RouterPageWithProtect />
      </Router>

    </main>
  );
}

export default App;