import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { Title } from "./Title";
import { Clock } from './clock';


ReactDOM.render(
  <div className="container">
    <div className="row justify-content-center">
      <div className="col col-md-5 text-center card card1">
        <Title className="title" />
        <Clock />
      </div>
    </div>
  </div>,
  document.getElementById('root')
)