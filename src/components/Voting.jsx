import React from 'react';
const PropTypes = React.PropTypes;
export default React.createClass({
  propTypes:{
    topics: PropTypes.object.isRequired,
  },
  render(){
    const {index} = this.props.params;
    const topic = this.props.topics[index];
    return(
      <div className="voting">
        {topic.title}
        {topic.choices}
      </div>
    )
  }
})
