import React, {Component} from 'react';

class PotusQuoteBox extends Component{
  render(){
    return(
      <div>
        <p className="quoteText">{this.props.quote}</p>
        <p>Added To API: <i>{this.props.date}</i></p>
      </div>
    )
  }
}

export default PotusQuoteBox;
