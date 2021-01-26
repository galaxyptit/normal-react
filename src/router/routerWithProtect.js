import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

const routes = [
    {
        name: 'home',
        path: '/',
        protected: true,
        exact: true,
        component: Home,
    },
    {
        name: 'about',
        path: '/about',
        protected: true,
        component: About,
    },
    {
        name: 'users',
        path: '/users',
        protected: true,
        exact: true,
        component: Users,
    },
    {
        name: 'usersId',
        path: '/users/:id',
        protected: true,
        component: UsersId,
    }
];
  
function RouterWithProtect() {

    return (
        <>
            <Switch>
                    {routes.map((route, key) => {
                        return <Route key={key} path={route.path} exact={route.exact} component={route.component} />
                    })}
                    <Route> not match </Route>
            </Switch>
        </>
    )
}

export default RouterWithProtect;

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