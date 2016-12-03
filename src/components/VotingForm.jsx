import React from 'react';
export default React.createClass({
  render(){
    const options = this.props.choices.map((choice,i)=>{
      return(
        <option value={choice} key={i}>{choice}</option>
      )
    });
    return(
    <div className="vote">
    <h1>{this.props.title}</h1>
      <form action="" className="vote-form">
        <select name="dropdown" id="">
          {options}
        </select>
      </form>
    </div>
  );
}
});
