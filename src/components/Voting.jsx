import React from 'react';
import {PieTooltip} from 'react-d3-tooltip'
export default React.createClass({
  render(){
    const {index} = this.props.params;
    const topic = this.props.topics.get(index);
    const width = 600;
    const height = 600;
    const value = d => +d.votes;
    const name = d => d.choice;
    const dataIm = topic.get('choices').map((choice)=>{
      return({
        choice,
        votes: topic.getIn(['tally',choice], 0)
    })});
    const chartSeriesIm = topic.get('choices').map((choice)=>{
      return({
        "field": choice,
        "name": choice
      });
    });
    var chartSeries = chartSeriesIm.toArray();
    var data = dataIm.toArray();
    console.log(data);
    return(
      <div className="voting">
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
