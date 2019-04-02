import React, { Component } from 'react'
import axios from 'axios';
import '../assets/PopularItems.css';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'

export default class PopularItems extends Component {
    constructor(props){
        super(props);
        this.state={
         items:null,
         active:false
        }
      }


componentDidMount = e =>{
    axios
    .get(`https://fortnite-public-api.theapinetwork.com/prod09/items/popular`)
    .then((response)=> {
        let items = response.data.data
        this.setState({items : items});
      

    })
    .catch((error)=> {
      console.log(error);
    });
}

btnClicked = e => {
    e.preventDefault();
   
    let currentState = this.state.active;
    this.setState({ active: !currentState });
}

  render() {
    let items = this.state.items;
    console.log('item', items)
    return (
      <div>
        <div>
          <h3>
            Popular Items
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
          <div>
            { items && items.map(value => {
              return (
                <div className='cardDiv' key={value.type}>
                    <div>
                        <h4><span>{value.name}</span></h4>
                        <h5><span>type : </span><span>{value.type}</span></h5>
                        <button onClick={this.btnClicked} name={value.type}>see More ..</button>
                    </div>
                    <span>
                        {value.entries && value.entries.map(val => {
                            return(
                                <div key={val.identifier} className={this.state.active ? 'itemsDivClicked': 'itemsDiv'}>
                                    <Card className='mainCards'>
                                        <Card.Img variant="top" className='cardImage' src={val.images.background} />
                                        <Card.Body>
                                            <Card.Title>{val.name}</Card.Title>
                                            <Card.Text>
                                            <span>captial : <span> {val.captial}</span> </span>
                                            <br />
                                            <span>description : <span> {val.description}</span></span>
                                            </Card.Text>
                                            <span className='imagesSpan'>
                                            {/* <img src={val.images.featured.transparent} className='itemImage' alt='item'></img> */}
                                            <img src={val.images.information} className='itemImage' alt='item'></img>
                                            <img src={val.images.transparent} className='itemImage' alt='item'></img>
                                            </span>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted"> Cost : {val.cost}</small>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            )
                        })}
                    </span>    
                </div>  
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
