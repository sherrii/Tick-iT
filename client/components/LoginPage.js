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
          <div>
            <form onSubmit={this.handleSubmit}>
              <label for='username'> username: </label>
              <input type = 'text' id = 'username' name = 'username'></input>
              <label for='password'> password: </label>
              <input type = 'password' id = 'password' name = 'password'></input>
              <button type="submit" >login</button>
              <button type="button">sign up</button>
            </form>                
          </div>
      )
  }
}

export default LoginPage; 