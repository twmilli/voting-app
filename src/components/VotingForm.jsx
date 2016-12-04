import React from 'react';
import Dropdown from 'react-select';
export default React.createClass({

    onChange(val) {
        if (val) {
            this.setState({value: val.label});
        }else{
          this.setState({
            value: undefined
          });
        }
    },
    getValue() {
        if (this.state && this.state.value !== undefined) {
            return ({label: this.state.value, value: this.state.value});
        }
    },
    handleSubmit(e){
      if (this.state && this.state.value !== undefined){
        this.props.vote(this.props.index, this.state.value);
      }
    },
    render() {
        const options = this.props.choices.map((choice, i) => {
            return ({
                value: choice,
                label: choice
            })
        }).toArray();
        return (
            <div className = 'dropdown-wrapper'>
                <h1>Question: {this.props.title}</h1>
                <h3>I'd like to vote for...</h3>
                <Dropdown ref='dropdown' value={this.getValue()} options={options} name="Select an option" onChange={this.onChange} clearable={true}/>
                <button className="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
});
