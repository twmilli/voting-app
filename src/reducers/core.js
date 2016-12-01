import {fromJS} from 'immutable';
export function vote(state,index,choice){
  return state.updateIn(['topics', index, 'tally', choice], 0, tally =>tally+1);
}

export function addTopic(state,title,choices){
  return(
  state.updateIn(['topics'], topics => topics.push(fromJS({
    title: title,
    choices: choices,
    tally:{}
  })))
);
}
