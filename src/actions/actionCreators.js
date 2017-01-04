export function setState(state){
  return({
    type: 'SET_STATE', state
  });
}

export function addTopic(title, choices, creator){
  return({
    type: 'ADD_TOPIC', title, choices, creator, meta:{remote: true}
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

export function setName(name){
  return({
    type: 'SET_NAME', name, meta: {remote: false}
  });
}

export function login(){
  return({
    type: 'LOGIN', meta: {remote: false}
  });
}

export function delete_topic(i){
  return ({
    type: 'DELETE', i, meta: {remote: true}
  })
}

export function addChoice(i, choice){
  return({
    type: 'ADD_CHOICE', i, choice, meta: {remote: true}
  });
}
