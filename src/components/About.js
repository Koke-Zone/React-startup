import Users from "./User";
import ClassName from "./ClassName";
import { Component } from "react";

// most of people extends Compnent instead of React.component 
class About extends Component {
  constructor(props){
    super(props);
  // console.log("parent constructor is called");

  }

  componentDidMount(){
  // console.log("parent mount is called");

  }

  render(){
  // console.log("parent render is called");

    return (
      <div className="aboutUs">
        <div className="container">
          <h1>About Us</h1>
          <p>Hello this is about Us page</p>
          <ClassName name = {"Sana Class"} loc = {"sana-loc"}/>
        </div>
      </div>
    );
  }
}

export default About;
