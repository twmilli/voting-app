import React from 'react';
import {List,Map, fromJS} from 'immutable';
import {mainReducer} from '../src/reducers/index';
import {expect} from 'chai';

describe('rootReducer', ()=>{
  it('handles SET_STATE correctly', ()=>{
    const defaultState = {
      topics:[
        {
          title: "Favorite Color",
          choices:['red','blue','yellow','green'],
          tally:{
            red: 1
          }
        }
      ]
    };
    const action = {type: 'SET_STATE', state: defaultState};
    const nextState = mainReducer(defaultState, action);
    expect(nextState).to.equal(fromJS({
      topics:[
        {
          title: "Favorite Color",
          choices:['red','blue','yellow','green'],
          tally:{
            red: 1
          }
        }
      ]
    }
  ));
});
});
