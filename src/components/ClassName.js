import React from "react";
class ClassName extends React.Component {
  constructor(props) {
    super(props);
//   console.log("child constructor is called");

    this.state = {
    //   abc: 0,
    userInfo: {
        login: 'dummy',
        created_at: "12:01"
    }
    };
  }

  async componentDidMount(){

    const data = await fetch('https://api.github.com/users/suny');
    const json = await data.json();

// console.log(json);

    this.setState({
        userInfo : json,
    })
//   console.log("parent mount is called");
// console.log(json);

  }

  componentDidUpdate(){
    // console.log("component did update");
  }
  componentWillUnmount(){
    console.log("component will unmount");
  }
  
  render() {
    // console.log("child render is called");
    // const { name, loc } = this.props;
    // const { abc } = this.state;
    const {login, created_at} = this.state.userInfo;
    return (
      <div className="userDetails">
        <h1>My name is: {login}</h1>
        <p>Value of abc is: {created_at} </p>
        {/* <button
          onClick={() => {
            this.setState({
              abc: this.state.abc + 1,
            });
          }}
        >
          Increase Counter
        </button>
        <br></br> */}
        <span>My Location is {created_at}</span>
      </div>
    );
  }
}
export default ClassName;
