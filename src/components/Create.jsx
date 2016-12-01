import React from 'react';
const MAX_CHOICES = 5;
const PropTypes = React.PropTypes;
export default React.createClass({

  contextTypes:{
    router: PropTypes.object.isRequired
  },

  handleSubmit(e){
    e.preventDefault();
    var choices = [];
    var val;
    for (var i = 0; i <MAX_CHOICES; i++){
      val = this.refs["choice" + i.toString()].value;
      if (val != undefined){
        choices.push(val);
      }
    }
    this.props.addTopic(this.refs.title.value,choices);
    this.context.router.push({
      pathname: '/'
    });
  },
  render(){
    var choices = [];
    for (var i=0; i < MAX_CHOICES; i++){
      choices.push(<input type="text" ref={"choice" + i.toString()} key={i} placeholder="choice"/>)
    }
    return(
      <div className='create'>
        <div className="create-heading">Provide information for the new poll</div>
        <form action="" ref="createPoll" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder="title"/>
          {choices}
          <input type="submit"/>
        </form>
      </div>
    )
  }
})
