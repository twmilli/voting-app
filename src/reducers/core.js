import {fromJS} from 'immutable';
export function vote(state,index,choice){
  return state.updateIn([index, 'tally', choice], 0, tally =>tally+1);
}

export function addTopic(state,title,choices){
  return(
  state.push(fromJS({
    title: title,
    choices: choices,
    tally:{}
  })
));
}
