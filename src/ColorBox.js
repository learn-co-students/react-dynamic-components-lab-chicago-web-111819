import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  

  render() {

    // const recursiveVar= (
    // <div className="color-box" style={{opacity: 2}}>
    //   {this.props.opacity >= 0.2 ? <div className="color-box" style={{opacity: (this.props.opacity - .1)}}></div> : null}
    // </div>
    // )


    // {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - .1} />: null}

    // function recursiveFun (ope) {
    //   let realOpe = ope - .1
      
    //   if (realOpe >= 0.2){
        
    //     return (
    //       <div className="color-box" style={{opacity: (realOpe)}}>{recursiveFun(realOpe)}</div>
    //     ) 
    //   }
    // };
    

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
          {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - .1} />: null}
      </div>
    )
  }

}

// isMember ? '$2.00' : '$10.00')