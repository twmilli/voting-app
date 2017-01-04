import React from 'react';
import {
    List,
    Map,
    fromJS
} from 'immutable';
import {
    topics,
    graphView,
    user
} from '../src/reducers/index';
import {
    expect
} from 'chai';

describe('topicsReducer', () => {
    it('handles SET_STATE correctly', () => {
        const defaultState = [{
            title: "Favorite Color",
            choices: ['red', 'blue', 'yellow', 'green'],
            tally: {
                red: 1
            }
        }];
        const action = {
            type: 'SET_STATE',
            state: defaultState
        };
        const nextState = topics(defaultState, action);
        expect(nextState).to.equal(fromJS([{
            title: "Favorite Color",
            choices: ['red', 'blue', 'yellow', 'green'],
            tally: {
                red: 1
            }
        }]));
    });

    it('handles ADD_TOPIC correctly', () => {
        const state = fromJS([{
            creator: 'twm013@bucknell.edu',
            title: "Favorite Color",
            choices: ['red', 'blue', 'yellow', 'green'],
            tally: {
                red: 1
            }
        }]);
        const action = {
            type: 'ADD_TOPIC',
            creator: 'twm013@bucknell.edu',
            title: 'Favorite Movie',
            choices: ['Toy Story', 'Mulan', 'Inception']
        };
        const nextState = topics(state, action);
        expect(nextState).to.equal(fromJS([{
            creator: 'twm013@bucknell.edu',
            title: "Favorite Color",
            choices: ['red', 'blue', 'yellow', 'green'],
            tally: {
                red: 1
            }
        }, {
            creator: 'twm013@bucknell.edu',
            title: 'Favorite Movie',
            choices: ['Toy Story', 'Mulan', 'Inception'],
            tally: {}
        }]));
    });

    it('initializes tally correctly when VOTE is dispatched', () => {
        const state = fromJS([{
            title: "Favorite Color",
            choices: ['red', 'blue', 'yellow', 'green'],
            tally: {}
        }]);
        const action = {
            type: 'VOTE',
            index: 0,
            choice: 'red'
        }
        const nextState = topics(state, action);
        expect(nextState).to.equal(fromJS([{
            title: 'Favorite Color',
            choices: ['red', 'blue', 'yellow', 'green'],
            tally: {
                red: 1
            }
        }]));

    });

    it('correctly adds to tally when VOTE is dispatched', () => {
        const state = fromJS([{
            title: "Favorite Color",
            choices: ['red', 'blue', 'yellow', 'green'],
            tally: {
                'red': 5,
                'yellow': 3,
                'green': 2
            }
        }]);
        const action = {
            type: 'VOTE',
            index: 0,
            choice: 'green'
        };
        const nextState = topics(state, action);
        expect(nextState).to.equal(fromJS([{
            title: "Favorite Color",
            choices: ['red', 'blue', 'yellow', 'green'],
            tally: {
                'red': 5,
                'yellow': 3,
                'green': 3
            }
        }]));
    })

    it('deletes topics appropriately', () => {
        const state = fromJS([{
            creator: 'twm013@bucknell.edu',
            title: "Favorite Color",
            choices: ['red', 'blue', 'yellow', 'green'],
            tally: {
                'red': 5,
                'yellow': 3,
                'green': 2
            }
        }, {
            creator: 'twm013@bucknell.edu',
            title: 'Favorite Movie',
            choices: ['Toy Story', 'Mulan', 'Inception'],
            tally: {}
        }]);
        const action = {
            type: 'DELETE',
            i: 0
        };
        const nextState = topics(state, action);
        expect(nextState).to.equal(fromJS([{
            creator: 'twm013@bucknell.edu',
            title: 'Favorite Movie',
            choices: ['Toy Story', 'Mulan', 'Inception'],
            tally: {}
        }]));
    });

  it('adds options to a topics appropriately', ()=>{
    const state = fromJS([{
        creator: 'twm013@bucknell.edu',
        title: "Favorite Color",
        choices: ['red', 'blue', 'yellow', 'green'],
        tally: {
            'red': 5,
            'yellow': 3,
            'green': 2
        }
    }]);

    const action = {
        type: 'ADD_CHOICE',
        i: 0,
        choice: 'purple'
    };
    const nextState = topics(state, action);
    expect(nextState).to.equal(fromJS([{
        creator: 'twm013@bucknell.edu',
        title: "Favorite Color",
        choices: ['red', 'blue', 'yellow', 'green', 'purple'],
        tally: {
            'red': 5,
            'yellow': 3,
            'green': 2
        }
    }]));
  });

});

describe('graphView reducer', () => {
    it('gets initial state correctly', () => {
        const state = graphView(undefined, 'SET_STATE');
        expect(state).to.equal("PIE")
    })

    it('changes views correctly', () => {
        const state = 'PIE';
        const action = {
            type: 'CHANGE_GRAPH',
            view: 'BAR'
        };
        const nextState = graphView(state, action);
        expect(nextState).to.equal('BAR');
    });
});

describe('user reducer', () => {
    it('sets initial state correctly', () => {
        const state = user(undefined, 'SET_STATE');
        expect(state).to.equal(fromJS({
            name: "",
            logged_in: false
        }));
    });

    it('correctly handles SET_NAME', () => {
        const action = {
            type: 'SET_NAME',
            name: 'twmilli'
        };
        const state = user(undefined, action);
        expect(state).to.equal(fromJS({
            name: 'twmilli',
            logged_in: false
        }));
    });
});
