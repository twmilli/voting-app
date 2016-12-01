export function setState(state){
  return({
    type: 'SET_STATE', state
  });
}

export function addTopic(name, choices){
  return({
    type: 'ADD_TOPIC', name, choices
  });
}

export function vote(index,choice){
  return({
    type: 'VOTE', index, choice
  });
}
