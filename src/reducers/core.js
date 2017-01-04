import {fromJS} from 'immutable';
export function vote(state,index,choice){
  return state.updateIn([index, 'tally', choice], 0, tally =>tally+1);
}

export function addTopic(state, title, choices, creator){
  return(
  state.push(fromJS({
    creator,
    title,
    choices,
    tally:{}
  })
));
}

export function delete_topic(state, i){
  return (state.delete(i));
}

export function addChoice(state, index, choice){
  console.log(state.getIn([index, 'choices']));
  return (state.updateIn([index, 'choices'], choices=>choices.push(choice)));
}
