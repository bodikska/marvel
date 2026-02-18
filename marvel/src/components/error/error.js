import { Component } from "react";
import img from './error.gif'


class Error extends Component {
   render() {
    return(
        <img src={img} style={{display:"block", width:'250px', height:'250px', objectFit:'contain', margin:'0 auto'}} alt="" />
    )
   }
}

export default Error;