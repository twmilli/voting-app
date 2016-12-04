import React from 'react';
import {PieTooltip} from 'react-d3-tooltip';
var SimpleTooltipStyle = require('react-d3-tooltip').SimpleTooltip;
import VotingForm from './VotingForm';
export default React.createClass({
    validTextColour(stringToTest) {
        //Alter the following conditions according to your need.
        if (stringToTest === "") {
            return false;
        }
        if (stringToTest === "inherit") {
            return false;
        }
        if (stringToTest === "transparent") {
            return false;
        }

        var image = document.createElement("img");
        image.style.color = "rgb(0, 0, 0)";
        image.style.color = stringToTest;
        if (image.style.color !== "rgb(0, 0, 0)") {
            return true;
        }
        image.style.color = "rgb(255, 255, 255)";
        image.style.color = stringToTest;
        return image.style.color !== "rgb(255, 255, 255)";
    },
    render() {
        const {index} = this.props.params;
        const topic = this.props.topics.get(index);
        const width = 500;
        const height = 500;
        const value = d => + d.votes;
        const name = d => d.choice;
        const choices = topic.get('choices').filter((choice) => {
            return topic.hasIn(['tally', choice])
        })
        const data = choices.map((choice) => {
            return ({
                choice,
                votes: topic.getIn([
                    'tally', choice
                ], 0)
            })
        }).toArray();
        const chartSeries = choices.map((choice) => {
          if (this.validTextColour(choice)){
            return ({"field": choice, "name": choice, color:choice});
          }
          return ({"field": choice, "name": choice});
        }).toArray();
        return (
            <div className="voting">
                <VotingForm choices={topic.get('choices')} title={topic.get('title')} vote={this.props.vote} index={index}/>
                <div className="graph">
                    <PieTooltip title={topic.get('title')} width={width} height={height} value={value} name={name} chartSeries={chartSeries} data={data}>
                        <SimpleTooltipStyle/>
                    </PieTooltip>
                </div>
            </div>
        )
    }
})
