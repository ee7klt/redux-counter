import expect, { createSpy, spyOn, isSpy } from 'expect';
import deepFreeze from 'deep-freeze';
import {createStore} from 'redux';


import {counterApp} from './counterApp.jsx';
import React from 'react';
import ReactDOM from 'react-dom';




const Buttons = () => (
  <div>
    <button>+</button>
    <span>0</span>
    <button>-</button>
  </div>

)

ReactDOM.render(<Buttons />,document.getElementById('app'));
