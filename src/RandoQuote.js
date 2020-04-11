import React, {Component} from 'react';


import PotusQuoteBox from './PotusQuoteBox';



import axios from 'axios';





class RandoQuote extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
    this.axiosCall = this.axiosCall.bind(this);
  }

  axiosCall(){
    axios({
        "method":"GET",
        "url":"https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"matchilling-tronald-dump-v1.p.rapidapi.com",
        "x-rapidapi-key":"b07eca3e36mshcd899dde1f818ecp12e73cjsn772d397f9ee9",
        "accept":"application/hal+json"
        }
        })
        .then((response)=>{
          let data = response.data;
          this.setState({data})
        })
        .catch((error)=>{
          console.log(error)
        })
  }

  componentDidMount(){
    this.axiosCall();
  }


  render(){
    return(
      <div className="RandoQuote">
        <h1>POTUS Quotes</h1>
        <PotusQuoteBox
          quote={this.state.data.value}
          date={this.state.data.appeared_at}
        />
      <button onClick={this.axiosCall}>Get Another!</button>
      
      </div>
    )
  }
}

export default RandoQuote;
