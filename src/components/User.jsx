import React from 'react';
const PropTypes = React.PropTypes;

export default React.createClass({
  contextTypes:{
    router: PropTypes.object.isRequired
  },
  render(){
    this.props.setUser(this.props.params.user);
    this.context.router.push({
      path: '/'
    });
    return (
      <h1>{this.props.user}</h1>
    )
  }
})
