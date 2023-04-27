import React, {Component} from 'react';
import LoginPage from './LoginPage';
import DashBoard from './DashBoard';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isVerified : false,
        }
    }

    handleLogin = (username, password) => {
        
        console.log('handleLogin',username,password)

        fetch ('/api/user/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({username:username, password:password}),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({isVerified: data});
        })
        .catch(err => console.log("fetch error",err))
    }

    render(){

        if(this.state.isVerified) {
            return(
                <div>
                    <DashBoard />
                </div>
            )
        } 

        return(
            <div>
               <LoginPage handleLogin = {this.handleLogin}/>
            </div>
        )
    }
}

export default App;