import Users from "./User";
import ClassName from "./ClassName";
import { Component } from "react";
import UserContext from "./utilis/userContext";

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
      <div className="aboutUs m-3 p-3">
        <div className="container">
          <h1 className="text-xl my-3">About Us</h1>
          <p>User</p>
          <UserContext.Consumer>
            {({loggedUser})=> <div>{loggedUser}</div> }
          </UserContext.Consumer>
          <p>Hello this is about Us page</p>
          <ClassName name = {"Sana Class"} loc = {"sana-loc"}/>
        </div>
      </div>
    );
  }
}

export default About;
