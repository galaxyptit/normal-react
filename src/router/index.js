import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useParams, useRouteMatch } from 'react-router-dom';

function RouterPage() {
  return (
    <>
      <Switch>
          <Route path="/about" exact={true} component={About} />
          <Route path="/users" exact={true} exact={true} component={Users} />
          <Route path="/users/:id" exact={true} component={UsersId} />
          <Route path="/" exact={true} component={Home} />
          <Route> not match </Route>
        </Switch>
    </>
    )
}
export default RouterPage;

function Home() { return <div> Home </div>};
function About() {return <div> About </div>};
function Users() {
  return <div>
    Usersasdasd
  </div>
};
function UsersId() {
  let { id } = useParams();
  console.log("id ", id)
  return <div> UsersId : {id}</div>
};