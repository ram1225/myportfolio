import React from 'react';
import './App.css';
import AppRoutes from './components/router/AppRoutes';
import Notfound from './components/not-found/Notfound';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

 class App extends React.Component {
  constructor(){
    super();
   
    this.state={
      popup: false,
      navlist:[
        {name:'Home',selected: true},
        {name:'About',selected:false},
        {name:'Portfolio',selected:false},
        {name:'Contact',selected:false}]
    }
  }
  

  menuFunction=(x)=>{
    x.target.parentElement.classList.toggle("change");
   
    this.togglePopup();
  }

  togglePopup=()=>{
    this.setState((pState)=>({
      popup: !pState.popup
    }))

   // document.querySelector('change').classList.toggle('change');
  }

  toggleNavSelection=(item)=>{
    let navList= this.state.navlist;
   let index = navList.findIndex((el)=>{
      return el.selected === true;
    });
    
    if(item.name !==  navList[index].name){
      navList[index].selected = false;

      let i = navList.findIndex((el)=>{
        return el.name === item.name;
      });

      navList[i].selected = true;

      this.setState({
        navlist: navList
      })
    }
  }

  render(){
    return (
      <Router>
          <div className="App">
            <section className="header-section">
            <div className="App-navbar">            
              <div className="menu-container" onClick={(event)=>this.menuFunction(event)}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
              </div>
                <span className="r-logo">R.</span>
                <ul className={`${!this.state.popup?'desktop-list':'d-none'}`}>
                  {
                  this.state.navlist.map((item,index)=>(
                    <Link to={`/${item.name}`} key={index} className={`${item.selected?'active':''}`}>
                    <li onClick={()=>this.toggleNavSelection(item)}>{item.name}</li>
                    </Link>
                  ))
                  }
                </ul>
            </div>
            <hr/>
            </section>
            <div className={`${this.state.popup?'popup':'d-none'}`} >
              <ul>
                  {
                  this.state.navlist.map((item,index)=>(
                    <Link to={`/${item.name}`} key={index} className={`${item.selected?'active':''}`}>
                    <li  onClick={()=>this.togglePopup()}>{item.name}</li>
                    </Link>
                  ))
                  }
                </ul>
            </div>
            <section className="app-margin">
            <Switch>
              <AppRoutes handleToggleNavSelection={this.toggleNavSelection}/>
              <Route component={Notfound} />
            </Switch>
            </section>            
          </div>
      </Router>   
    );
  }  
}

export default App;
