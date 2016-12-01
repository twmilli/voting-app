export function setState(state){
  return({
    type: 'SET_STATE', state
  });
}

export function addTopic(name){
  return({
    type: 'ADD_TOPIC', name
  });
}
