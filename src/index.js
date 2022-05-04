import React from 'react';
import { Link, useLocation } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

/*
ReactDOM.render(<App login="philippan" />, 
  document.getElementById("root")
);
*/

// ReactDOM (create element method, place by ID method)
// createElement (element, style property, text)