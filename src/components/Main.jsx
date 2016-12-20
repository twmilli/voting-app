import React from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

export const Main = React.createClass({
  render(){
    return(
      <div>
        <h1 className="menu-bar">
          <Link to ='/' className='menu-title'>Voting App</Link>
          <Link to ='/login' className="sign-in">Login</Link>
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
    graphView: state.get('graphView')
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
