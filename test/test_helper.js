import jqeury from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';

// Set up testing environment to run like a browser in node environment
// global in node is equivalent to window in browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
// Direct jquery to our fake window object instaed of browser window
const $ = jqeury(global.window);

// Build 'renderComponent' helper that should render a given react class
// props will be passed to component
// state will be passed to Provider
function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(rootReducer, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  // return a component wrapped in jquery
  // findDOMNode gives us access to native browser DOM element (html)
  return $(ReactDOM.findDOMNode(componentInstance));
}

// Build helper for simulating events
// fn is just an alias for prototype property
// $.fn === $.prototype
$.fn.simulate = function(eventName, value) {
  // 'this' is the selected html element (e.g. textarea)
  if (value) {
    // val() is a jqeury method that sets a value of html element
    this.val(value);
  }
  // we are getting an array from find method
  TestUtils.Simulate[eventName](this[0]);
};

// Set up chai-jquery
//
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
