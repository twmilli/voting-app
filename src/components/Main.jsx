import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

export const Main = React.createClass({
  render(){
    if (this.props.params.user){
      this.props.setUser(this.props.params.user);
    }
    const user = this.props.user;
    var myPolls;
    var add;
    var login_label = (<Link to ='/login' className="sign-in">Login</Link>)
    if (user.get('logged_in')){
      const email = user.get('name');
      const index = email.search('@');
      const name = email.slice(0,index);
      myPolls = <Link className='my-polls' to='/mypolls'>My Polls</Link>
      login_label = (<div className="user-in">Hello {name}!</div>);
      add = <Link className='add-poll' to='/new'>+</Link>
    }
    return(
      <div>
        <h1 className="menu-bar">
          <Link to ='/' className='menu-title'>Voting App</Link>
          {myPolls}
          {login_label}
          {add}
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

function mapStateToProps(state){
  return {
    topics: state.get('topics'),
    graphView: state.get('graphView'),
    user: state.get('user')
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
