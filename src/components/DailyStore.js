import React, { Component } from 'react'
import axios from 'axios';
import '../assets/UserInfo.css';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'

export default class DailyStore extends Component {
    constructor(props){
        super(props);
        this.state={
         date:null,
         items:null
        }
      }


componentDidMount = e =>{
    axios
    .get(`https://fortnite-public-api.theapinetwork.com/prod09/store/get`)
    .then((response)=> {
        let date = response.data.date
        let items = response.data.items
      this.setState({date: date});
      this.setState({items : items});

    })
    .catch((error)=> {
      console.log(error);
    });
}

  render() {
    let date = this.state;
    let items = this.state.items;
    console.log('item', items)
    return (
      <div className='userinfo'>
        <div>
          <h3>
            Daily Store
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
              { date && date ?
                  <h4><span className='date'>date : {this.state.date}</span></h4>
              : null }
          </div>  
          
          <div>
            { items && items.map(value => {
              return (
                <div className='userdiv' key={value.itemid}>
                    <Card className='mainCards'>
                      <Card.Img variant="top" className='Image' src={value.item.image} />
                      <Card.Body>
                        <Card.Title>{value.name}</Card.Title>
                        <Card.Text>
                          <span>captial : <span className='captial'> {value.item.captial}</span> </span>
                          <br />
                          <span>description : <span className='captial'> {value.item.description}</span></span>
                        </Card.Text>
                        <span className='imagesSpan'>
                          <img src={value.item.images.featured.transparent} className='itemImages' alt='item'></img>
                          <img src={value.item.images.information} className='itemImages' alt='item'></img>
                          <img src={value.item.images.transparent} className='itemImages' alt='item'></img>
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
      </div>
    )
  }
}
