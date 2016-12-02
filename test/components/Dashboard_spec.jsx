import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  Simulate
} from 'react-addons-test-utils';
import {List,Map} from 'immutable';
import Dashboard from '../../src/components/Dashboard';
import {expect} from 'chai';
import {fromJS} from 'immutable';

describe('Dashboard', () =>{
  it('renders the topics individually', ()=>{
    const topics = fromJS([
        {
          title: "Favorite Color",
          choices:['red','blue','yellow','green'],
          tally:{
            red: 1
          }
        },
        {
          title: "Test",
          choices:['red','blue','yellow','green'],
          tally:{
            red: 1
          }
        }
      ]);

      const component = renderIntoDocument(
        <Dashboard topics = {topics}/>
      );
      const topic_elements = scryRenderedDOMComponentsWithClass(component, 'topic');
      const titles = topic_elements.map(e=>e.textContent);
      expect(topic_elements.length).to.equal(2);
      expect(titles[0]).to.contain('Favorite Color');
      expect(titles[1]).to.contain('Test');
    });
  });
