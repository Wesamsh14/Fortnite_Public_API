import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/UserInfo.css'
import { Button } from 'react-bootstrap'


class UserInfo extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',

      userid:null,
      platforms:null,
      info:null,
      checkbox:'',
      err:null
    }
  }

  textChange=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  formSubmit=(e)=>{
    e.preventDefault();
    this.state.platforms=null;
    this.state.info=null;
    axios
    .get(`https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${this.state.username}`)
    .then((response)=> {
      this.setState({err:null})
      this.setState({userid :response.data.uid});
      const platform = response.data.platforms;
      const l = platform.toString();
      console.log(response.data)
        
      
      this.setState({platforms: platform});
    })
    .catch((error)=> {
      this.setState({err:'username is not correct'})
      console.log(error);
    });

  }
  
  getInfo = infos =>{
    infos.preventDefault();
    const Pl = this.state.checkbox;
    
    const id = this.state.userid;
    const api = `https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=${id}&platform=${Pl}`
    axios
    .get(api)
    .then((response)=> {
      this.setState({platforms : null})
      this.setState({info : response.data.stats })
      console.log(response.data)
    })
    .catch((error)=> {
      console.log(error);
    }); 
  }

  render() {
    let info = this.state.info;
    let pl = this.state.platforms
    let err = this.state.err
    return (
    <div className="UserInfo">
        <div>
          <h3>
            User Info
          </h3>
        </div>
        <div className='back'>
            <Link to='/'>
            <Button variant="primary" size="lg" active>
                Back
              </Button>
            </Link>
        </div>
        <div className='UserINfoForm'>
                <form onSubmit={this.formSubmit}>
                <input type='text' name='username' placeholder='UserName' autoComplete='off'
                    value={this.userName}
                    onChange={this.textChange}
                    />
                <input type='submit' value='Search' /> 
                </form>
                <div>
                  <h4>{err && err}</h4>
                </div>
                <div>
                {pl && pl.map( val => {
                    return(
                    <div className='status'>
                    {val}
                    <input type='checkbox' name='checkbox' value={val} onChange={this.textChange} />
                    </div>
                    )
                    
                }) }
                </div>
                
                <div>
                    { pl && pl ?
                        <div>
                           
                            <form onSubmit={this.getInfo}>
                            <br />
                            <input type='submit' value='Get Info'  />
                            </form>
                        </div>
                    : null }
                </div>
        </div>    
        <div classNam='UserINfoStatus'>
                {info && info ? 
                    <div>
                        <h3>
                        kills duo : 
                        {info.kills_duo}
                        </h3>
                        <h3>
                        kills solo : 
                        {info.kills_solo}
                        </h3>
                        <h3>
                        kills squad : 
                        {info.kills_squad}
                        </h3>
                        
                        <hr />

                        <h3>
                        matches played duo : 
                        {info.matchesplayed_duo}
                        </h3>
                        <h3>
                        matches played solo : 
                        {info.matchesplayed_solo}
                        </h3>
                        <h3>
                        matches played squad : 
                        {info.matchesplayed_squad}
                        </h3>

                        <hr />

                        <h3>
                        place top1 solo : 
                        {info.placetop1_solo}
                        </h3>
                        <h3>
                        place top1 duo : 
                        {info.placetop1_duo}
                        </h3>
                        <h3>
                        place top1 squad : 
                        {info.placetop1_squad}
                        </h3>
                        <h3>
                        place top3 squad : 
                        {info.placetop3_squad}
                        </h3>
                        <h3>
                        place top5 duo : 
                        {info.placetop5_duo}
                        </h3>
                        <h3>
                        place top6 squad : 
                        {info.placetop6_squad}
                        </h3>
                        <h3>
                        place top10 solo : 
                        {info.placetop10_solo}
                        </h3>
                        <h3>
                        placE top12 duo : 
                        {info.placetop12_duo}
                        </h3>
                        <h3>
                        place top25 solo : 
                        {info.placetop25_solo}
                        </h3>

                        <hr />

                        <h3>
                        score duo : 
                        {info.score_duo}
                        </h3>
                        <h3>
                        score solo : 
                        {info.score_solo}
                        </h3>
                        <h3>
                        score squad : 
                        {info.score_squad}
                        </h3>

                        <hr />

                        <h3>
                        winrate duo : 
                        {info.winrate_duo}
                        </h3>
                        <h3>
                        winrate solo : 
                        {info.winrate_solo}
                        </h3>
                        <h3>
                        winrate squad : 
                        {info.winrate_squad}
                        </h3>

                        <hr />

                    </div>
                : null }     
        </div>
    </div>
      
    );
  }
}

export default UserInfo;
