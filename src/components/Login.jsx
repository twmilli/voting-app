import React from 'react';
import {login} from '../utils/helpers';

export default React.createClass({
  handleSubmit(e){
    e.preventDefault();
    const email = this.refs.email.value;
    console.log(email);
    login(email).then(res=>{
      console.log(res);
    });
  },
  render(){
    return(
    <div className="login-container">
    <h2>Project Vote relies on passwordless authentication!</h2>

    <form action="" onSubmit={this.handleSubmit}>
    <input ref='email' className='email' type='email' placeholder='Email' aria-required="true"/>
    <input type= "submit" value="Login / Register"/>
    </form>
    </div>
  )}
});
