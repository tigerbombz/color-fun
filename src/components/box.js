import React, {Component} from 'react';

class Box extends Component{
  render(){
    return(
      <div className='wrapper'>
        <div className="box">
          <button>Click me to change color!</button>
        </div>
      </div>
    )
  }
}

export default Box;
