import React from 'react';
import {login} from '../utils/helpers';
import server from '../config/config';
const PropTypes = React.PropTypes;

export default React.createClass({
  contextTypes:{
    router: PropTypes.object.isRequired
  },

  handleSubmit(e){
    e.preventDefault();
    const email = this.refs.user.value;
    this.props.setName(email);
    localStorage.setItem("name", email);
    console.log(localStorage.getItem("name"));
    this.context.router.push({
      pathname: '/sent'
    });
    login(email).then(res=>{
    });
  },
  render(){
    return(
    <div className="login-container">
    <h2>Project vote relies on passwordless authentication to improve security.</h2>
    <p>You can read more about that here: <a href="https://medium.com/@ninjudd/passwords-are-obsolete-9ed56d483eb#.f8rwes61t">Passwords are obsolete</a>. </p>

    <form onSubmit={this.handleSubmit}>
    <input name='user' ref='user' className='email' type='email' placeholder='Email' aria-required="true"/>
    <input type= "submit" value="Login / Register"/>
    </form>
    </div>
  )}
});
