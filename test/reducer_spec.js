import React from 'react';
import {List,Map, fromJS} from 'immutable';
import {topics, graphView} from '../src/reducers/index';
import {expect} from 'chai';

describe('topicsReducer', ()=>{
  it('handles SET_STATE correctly', ()=>{
    const defaultState = [
        {
          title: "Favorite Color",
          choices:['red','blue','yellow','green'],
          tally:{
            red: 1
          }
        }
      ];
    const action = {type: 'SET_STATE', state: defaultState};
    const nextState = topics(defaultState, action);
    expect(nextState).to.equal(fromJS([
        {
          title: "Favorite Color",
          choices:['red','blue','yellow','green'],
          tally:{
            red: 1
          }
        }
      ]
  ));
});

  it('handles ADD_TOPIC correctly', ()=>{
    const state = fromJS([
        {
          title: "Favorite Color",
          choices:['red','blue','yellow','green'],
          tally:{
            red: 1
          }
        }
      ]);
    const action = {type: 'ADD_TOPIC',
    title: 'Favorite Movie',
    choices:['Toy Story', 'Mulan', 'Inception']};
    const nextState = topics(state,action);
    expect(nextState).to.equal(fromJS([
        {
          title: "Favorite Color",
          choices:['red','blue','yellow','green'],
          tally:{
            red: 1
          }
        },
        {
          title: 'Favorite Movie',
          choices:['Toy Story', 'Mulan', 'Inception'],
          tally:{}
        }
      ]
    ));
  });

  it('initializes tally correctly when VOTE is dispatched', ()=>{
    const state = fromJS([
      {
        title: "Favorite Color",
        choices:['red','blue','yellow','green'],
        tally:{}
      }
    ]
  );
  const action = {type: 'VOTE', index: 0, choice: 'red'}
  const nextState = topics(state,action);
  expect(nextState).to.equal(fromJS([
      {
        title: 'Favorite Color',
        choices: ['red','blue','yellow','green'],
        tally:{
          red: 1
        }
      }
    ]
  ));

});

  it('correctly adds to tally when VOTE is dispatched', ()=>{
    const state = fromJS([
      {
        title: "Favorite Color",
        choices:['red','blue','yellow','green'],
        tally:{
          'red': 5,
          'yellow': 3,
          'green':2
        }
      }
    ]
  );
  const action = {type:'VOTE', index: 0, choice: 'green'};
  const nextState = topics(state,action);
  expect(nextState).to.equal(fromJS([
      {
        title: "Favorite Color",
        choices:['red','blue','yellow','green'],
        tally:{
          'red': 5,
          'yellow': 3,
          'green':3
        }
      }
    ]
  ));
  })
});

describe('graphView reducer', ()=>{
  it('gets initial state correctly', ()=>{
    const state = graphView(undefined, 'SET_STATE');
    expect(state).to.equal("PIE")
  })

  it('changes views correctly', ()=>{
    const state = 'PIE';
    const action = {type: 'CHANGE_GRAPH', view:'BAR'};
    const nextState = graphView(state,action);
    expect(nextState).to.equal('BAR');
  });
});
