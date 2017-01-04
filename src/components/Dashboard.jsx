import React from 'react';
import {Link} from 'react-router';
import server from '../config/config';
import axios from 'axios';
const Dashboard = React.createClass({
  renderTopic(topic, i){
    return(
      <div className="topic" key={i}>
        <Link to={`/vote/${i}`} className='link'>
          {topic.get('title')}
        </Link>
      </div>
    )
  },
  render(){
    const {user} = this.props;
    if (!user.get("name") && localStorage.getItem("name")){
      this.props.setName(localStorage.getItem("name"));
    }
    if (user && user.get('name')){
      axios.get(server + 'logged_in/' + user.get('name')).then(res=>{
        if (res.data){
          this.props.login();
        }
      });
    }
    return(
      <div>
        <h2 className='directions'>
          Welcome to my voting app! <br/>
          Click on a topic to vote or view the results. <br/>
          Click the plus symbol to at a new topic.
        </h2>
        <div className='dashboard'>
          {this.props.topics.map(this.renderTopic)}
        </div>
      </div>
    );
  }
});
export default Dashboard;
