import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import { ButtonToolbar, Button  } from 'react-bootstrap'

export default class Index extends Component {
  
   
    render() {
        
    return (
      <div className='App'>
        <div>
          <h1>
          Fortnite Public API
          </h1>
        </div>
        <br /><br />
        <ButtonToolbar>
            <Link to='/user_status'><Button variant="secondary">User status</Button></Link>
            <Link to='/daily_store'><Button variant="secondary">Daily Store</Button></Link>
            <Link to='/upcoming_items'><Button variant="secondary">Upcoming items</Button></Link>
            <Link to='/all_items'><Button variant="secondary">All items</Button></Link>
            <Link to='/popular_items'><Button variant="secondary">Popular items</Button></Link>
            <Link to='/weapons'><Button variant="secondary">Weapons</Button></Link>
        </ButtonToolbar>
      </div>
    )
  }
}
