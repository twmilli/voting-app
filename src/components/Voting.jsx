import React from 'react';

export default React.createClass({
  render(){
    console.log(this.props.params);
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