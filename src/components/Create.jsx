import React from 'react';
const MAX_CHOICES = 8;
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
      if (val != ""){
        choices.push(val);
      }
    }
    console.log(choices);
    this.props.addTopic(this.refs.title.value,choices);
    this.context.router.push({
      pathname: '/'
    });
  },
  render(){
    var choices = [];
    for (var i=0; i < MAX_CHOICES; i++){
      if (i < 2){
        choices.push(<input type="text" ref={"choice" + i.toString()} key={i} placeholder="choice" required/>)
      }else{
        choices.push(<input type="text" ref={"choice" + i.toString()} key={i} placeholder="choice"/>)
      }
    }
    return(
      <div className='create'>
        <h2 className="create-heading">Provide information for the new poll</h2>
        <form action="" ref="createPoll" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder="question" required/>
          {choices}
          <input type="submit"/>
        </form>
      </div>
    )
  }
})
