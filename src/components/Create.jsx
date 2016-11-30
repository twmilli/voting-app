import React from 'react';
const MAX_CHOICES = 5;

export default React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },

  handleSubmit(e){
    console.log('test');
    e.preventDefault();
    var choices = [];
    var val;
    for (var i = 0; i <MAX_CHOICES; i++){
      val = this.refs["choice" + i.toString()].value;
      if (val != undefined){
        choices.push(val);
      }
    }
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
        <form action="" ref="createPoll" onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder="title"/>
          {choices}
          <input type="submit"/>
        </form>
      </div>
    )
  }
})
