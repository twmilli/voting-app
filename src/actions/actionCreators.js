export function setState(state){
  return({
    type: 'SET_STATE', state
  });
}

export function addTopic(title, choices){
  return({
    type: 'ADD_TOPIC', title, choices
  });
}

export function vote(index,choice){
  return({
    type: 'VOTE', index, choice
  });
}

export function changeGraph(view){
  return({
    type: 'CHANGE_GRAPH', view
  });
}
