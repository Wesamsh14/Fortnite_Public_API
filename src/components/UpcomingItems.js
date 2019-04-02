import React, { Component } from 'react';
import '../assets/UpcomingItems.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'


export default class UpcomingItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            UpcomingItems:null
        }
    }

    componentDidMount = e =>{
        axios
        .get(`https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get`)
        .then((response)=> {
            let items = response.data.items
            this.setState({UpcomingItems: items})
        })
        .catch((error)=> {
          console.log(error);
        });
    }

  render() {
    let items = this.state.UpcomingItems;
    console.log('up', items)
    return (
      <div>
          <div>
            <h3>
              Upcoming Items
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
              {items && items.map(value => {
                  return(
                      <div className='items' key={value.itemid}>
                          <Card className='mainCards'>
                            <Card.Img variant="top" className='cardImage' src={value.item.image} />
                            <Card.Body>
                                <Card.Title>{value.name}</Card.Title>
                                <Card.Text>
                                <span>captial : <span className='captiaal'> {value.item.captial}</span> </span>
                                <br />
                                <span>rarity : <span className='captiaal'> {value.item.rarity}</span></span>
                                </Card.Text>
                                <span className='imagesSpan'>
                                <img src={value.item.images.featured.transparent} className='itemImage' alt='item'></img>
                                <img src={value.item.images.information} className='itemImage' alt='item'></img>
                                <img src={value.item.images.transparent} className='itemImage' alt='item'></img>
                                </span>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"> Cost : {value.cost}</small>
                            </Card.Footer>
                          </Card>
                      </div>    
                  )
              })}
          </div>
      </div>
    )
  }
}
