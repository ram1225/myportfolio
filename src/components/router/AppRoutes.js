import React, { Component } from "react";
import { Route } from 'react-router-dom';

import About from "./../About";
import Portfolio from "./../Portfolio";
import Contact from "./../Contact";
import Home from "./../Home";

export default class AppRoutes extends Component{
    constructor(props) {
        super(props);
        this.routes = [
          {
            path: "/",
            exact: true,
            component: Home
          },
          /* {
            path: "/Home",
            component: Home
          }, */
          {
            path: "/Portfolio",
            component: Portfolio
          },
          {
            path: "/About",
            component: About
          },
          {
            path: "/Contact",
            component: Contact
          }
        ];       
    }

    render(){
        return (
          <div style={{height: '100%'}}>
              {
                  this.routes.map((route, index)=>(
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        render={() => <Home handleToggleNavSelection={this.props.handleToggleNavSelection} />} 
                    />           
                  ))
              }  
              {/* below code is seperated for passing props from parent */}
               <Route
                key='8'
                path="/Home" 
                render={() => <Home handleToggleNavSelection={this.props.handleToggleNavSelection} />} 
            />
          </div>
          
          
        )
    }
}
