import React from 'react';
import Dropdown from 'react-select';
export default React.createClass({

  onChange(val){
      this.setState({
        value: val.label
      });
    },
  getValue(){
    if (this.state){
    return ({
      label: this.state.value,
      value: this.state.value
    });
  }
  },
    render() {
        const options = this.props.choices.map((choice, i) => {
            return (
              {
                value: choice,
                label: choice.charAt(0).toUpperCase() + choice.slice(1)
              }
            )
        }).toArray();
        return (
            <div>
                <h1>Question: {this.props.title}</h1>
                <h3>I'd like to vote for...</h3>
                <Dropdown ref='dropdown'
                value = {this.getValue()}
                options={options}
                name="Select an option"
                onChange={this.onChange}/>
            </div>
        );
    }
});
