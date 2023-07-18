import React, {Component} from 'react';


class LoginPage extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log('user,psw :',username,password)
    this.props.handleLogin(username,password)
  }

  render(){
      return(
          <div id='loginPage'>
            <img src='https://s3-us-west-1.amazonaws.com/files.delesign/assets/remote-team-1.svg' width="450px" />
            <form id = "loginForm" onSubmit={this.handleSubmit}>
              <h2>Parking Ticket Finder</h2>
              <div>
                <label for='username'> username: </label>
                <input type = 'text' id = 'username' name = 'username'></input>
              </div>

              <div>
                <label for='password'> password: </label>
                <input type = 'password' id = 'password' name = 'password'></input>
              </div>

              <div id = "loginBtn">
                <button id="btn1" type="submit" >login</button>
                <button id ='btn2' type="button">sign up</button>
              </div>
            </form>                
          </div>
      )
  }
}

export default LoginPage; 