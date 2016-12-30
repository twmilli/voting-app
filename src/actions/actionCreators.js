export function setState(state){
  return({
    type: 'SET_STATE', state
  });
}

export function addTopic(title, choices){
  return({
    type: 'ADD_TOPIC', title, choices, meta:{remote: true}
  });
}

export function vote(index,choice){
  return({
    type: 'VOTE', index, choice, meta: {remote: true}
  });
}

export function changeGraph(view){
  return({
    type: 'CHANGE_GRAPH', view
  });
}

export function setUser(user){
  return({
    type: 'SET_USER', user, meta: {remote: false}
  });
}
