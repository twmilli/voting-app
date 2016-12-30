import React from 'react';
import {login} from '../utils/helpers';
import server from '../config/config';

export default React.createClass({
  handleSubmit(e){
    e.preventDefault();
    const email = this.refs.user.value;
    console.log('Submitting POST request');
    login(email).then(res=>{
      console.log("TEST");
      console.log(res);
    });
  },
  render(){
    return(
    <div className="login-container">
    <h2>Project Vote relies on passwordless authentication!</h2>

    <form onSubmit={this.handleSubmit}>
    <input name='user' ref='user' className='email' type='email' placeholder='Email' aria-required="true"/>
    <input type= "submit" value="Login / Register"/>
    </form>
    </div>
  )}
});
