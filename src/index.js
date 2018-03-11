import React from 'react';
import ReactDOM from 'react-dom';
import { Title } from "./Title";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Clock } from './clock';


ReactDOM.render(
  <div>
    <Title className="title" />
    <Clock />
  </div>,
  document.getElementById('root')
)