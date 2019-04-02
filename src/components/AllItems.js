import React, { Component } from 'react';
import '../assets/AllItems.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'


export default class AllItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            AllItems:null
        }
    }

    componentDidMount = e =>{
        axios
        .get(`https://fortnite-public-api.theapinetwork.com/prod09/items/list`)
        .then((response)=> {
            let items = response.data
            this.setState({AllItems: items})
        })
        .catch((error)=> {
          console.log(error);
        });
    }

  render() {
    let items = this.state.AllItems;
    console.log('up', items)
    return (
      <div>
          <div>
              <h3>
                  All Items
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
                  return (
                      <div className='items'>
                          {value && value ?
                            <div>
                                <Card className='mainCards'>
                                    <Card.Img variant="top" className='cardImage' src={value.image} />
                                    <Card.Body>
                                        <Card.Title>{value.name}</Card.Title>
                                        <Card.Text>
                                        <span>rarity : <span className='span'> {value.rarity}</span> </span>
                                        <br />
                                        <span>description : <span className='span'> {value.description}</span></span>
                                        </Card.Text>
                                        <span className='imagesSpan'>
                                        {/* <img src={value.images.featured.transparent} className='itemImage'></img> */}
                                        <img src={value.images.background} className='itemImage'></img>
                                        <img src={value.images.transparent} className='itemImage'></img>
                                        </span>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted"> Cost : {value.cost}</small>
                                    </Card.Footer>
                                </Card>
                            </div>
                            :null}
                      </div> 
                  )
              })}
          </div>
          {/* <div>
              {items && items.map(value => {
                  return(
                      <div className='items' key={value.itemid}>
                          <Card className='mainCards'>
                            <Card.Img variant="top" className='cardImage' src={value.item.image} />
                            <Card.Body>
                                <Card.Title>{value.name}</Card.Title>
                                <Card.Text>
                                <span>captial : <span> {value.item.captial}</span> </span>
                                <br />
                                <span>description : <span> {value.item.description}</span></span>
                                </Card.Text>
                                <span className='imagesSpan'>
                                <img src={value.item.images.featured.transparent} className='itemImage'></img>
                                <img src={value.item.images.information} className='itemImage'></img>
                                <img src={value.item.images.transparent} className='itemImage'></img>
                                </span>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"> Cost : {value.cost}</small>
                            </Card.Footer>
                          </Card>
                      </div>    
                  )
              })}
          </div> */}

      </div>
    )
  }
}
