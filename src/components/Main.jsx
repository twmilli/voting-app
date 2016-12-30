import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

export const Main = React.createClass({
  render(){
    const user = this.props.user;
    var login_label = (<Link to ='/login' className="sign-in">Login</Link>)
    if (user){
      login_label = (<div className="user-in">Hello {user}!</div>)
    }
    return(
      <div>
        <h1 className="menu-bar">
          <Link to ='/' className='menu-title'>Voting App</Link>
          {login_label}
          <Link className='add-poll' to='/new'>+</Link>
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
