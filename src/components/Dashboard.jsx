import React from 'react';
import {Link} from 'react-router';
export default React.createClass({
  renderTopic(topic, i){
    return(
      <div className="topic" key={i}>
        <Link to={`/vote/${i}`} className='link'>
          {topic.title}
        </Link>
      </div>
    )
  },
  render(){
    console.log(this.props);
    return(
      <div>
        {this.props.topics.map(this.renderTopic)}
      </div>
    );
  }
});
