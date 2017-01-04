import React from 'react';
import {Link} from 'react-router';
export default React.createClass({
  handleDelete(i){
    this.props.delete_topic(i);
  },
  renderTopic(topic, i){
    return(
      <div className="topic" key={i}>
        <Link to={`/vote/${topic.get('index')}`} className='link'>
          {topic.get('title')}
        </Link>
        <button className='delete-btn' onClick={this.handleDelete.bind(null,topic.get('index'))}>X</button>
      </div>
    )
  },
  render(){
    var my_topics = this.props.topics.map((topic, i)=>{
      return (topic.set('index', i));
    })
    my_topics = my_topics.filter((topic,i)=>{
      return (topic.get('creator') == this.props.user.get('name'));
    });
    return(
      <div>
        <h2 className='directions'>
          My Polls <br/>
          Click on a topic to vote or view the results. <br/>
        </h2>
        <div className='dashboard'>
          {my_topics.map(this.renderTopic)}
        </div>
      </div>
    )}
  });
