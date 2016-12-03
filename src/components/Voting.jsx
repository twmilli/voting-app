import React from 'react';
import {PieTooltip} from 'react-d3-tooltip';
import VotingForm from './VotingForm';
export default React.createClass({
  render(){
    const {index} = this.props.params;
    const topic = this.props.topics.get(index);
    const width = 600;
    const height = 600;
    const value = d => +d.votes;
    const name = d => d.choice;
    const choices = topic.get('choices').filter((choice)=>{
      return topic.hasIn(['tally', choice])
    })
    const data = choices.map((choice)=>{
      return({
        choice,
        votes: topic.getIn(['tally',choice], 0)
    })}).toArray();
    const chartSeries = choices.map((choice)=>{
      return({
        "field": choice,
        "name": choice
      });
    }).toArray();
    return(
      <div className="voting">
      <VotingForm choices = {topic.get('choices')} title = {topic.get('title')}/>
      <PieTooltip
      title = {topic.get('title')}
      width = {width}
      height = {height}
      value = {value}
      name = {name}
      chartSeries = {chartSeries}
      data = {data}>
      </PieTooltip>
      </div>
    )
  }
})
