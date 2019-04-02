import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";
import UserInfo from './components/UserInfo';
import Index from './components/Index';
import DailyStore from './components/DailyStore';
import UpcomingItems from './components/UpcomingItems';
import AllItems from './components/AllItems';
import PopularItems from './components/PopularItems';
import Weapons from './components/Weapons';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Index}></Route>
            <Route exact path='/user_status' component={UserInfo}></Route>
            <Route exact path='/daily_store' component={DailyStore}></Route>
            <Route exact path='/upcoming_items' component={UpcomingItems}></Route>
            <Route exact path='/all_items' component={AllItems}></Route>
            <Route exact path='/popular_items' component={PopularItems}></Route>
            <Route exact path='/weapons' component={Weapons}></Route>

          </div>
        </BrowserRouter>
      </div>
    )
  }
}
