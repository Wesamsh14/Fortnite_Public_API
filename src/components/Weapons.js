import React, { Component } from 'react';
import '../assets/Weapons.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'

export default class Weapons extends Component {
    constructor(props){
        super(props);
        this.state = {
            weapons:null
        }
    }

    componentDidMount = e =>{
        axios 
        .get(`https://fortnite-public-api.theapinetwork.com/prod09/weapons/get`)
        .then((response)=> {
            let weapon = response.data.weapons
            this.setState({weapons: weapon})
            console.log(weapon)
        })
        .catch((error)=> {
          console.log(error);
        });
    }
  render() {
      let wp = this.state.weapons
    return (
      <div>
        <div>
          <h3>
            Weapons
          </h3>
        </div>
        <div className='back'>
            <Link to='/'>
            <Button variant="primary" size="lg" active>
                Back
              </Button>
            </Link>
        </div>
        <br />
        <div>
            {wp && wp.map(val => {
                return(
                    <div key={val.hash} className='mainCards'>
                        <Card>
                                        <Card.Img variant="top" className='cardsimages' src={val.images.background} />
                                        <Card.Body>
                                            <Card.Title>{val.name}</Card.Title>
                                            <Card.Text>
                                            <span>rarity : <span></span>{val.rarity} </span>
                                            </Card.Text>
                                            <span className='imagesSpan'>
                                            <img src={val.images.image} className='itemImage' alt='item'></img>
                                            </span>
                                        </Card.Body>
                                      
                        </Card>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}
