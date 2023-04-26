import React, {Component} from 'react';

class LoginPage extends Component {
  render(){
      return(
          <div>
            <form>
              <label for='username'> username: </label>
              <input type = 'text' id = 'username' name = 'username'></input>
              <label for='password'> password: </label>
              <input type = 'text' id = 'password' name = 'password'></input>
              <button type="button">login</button>
              <button type="button">sign up!!!!</button>
            </form>                
          </div>
          
      )
  }
}

export default LoginPage; 