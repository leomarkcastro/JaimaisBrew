// Import Swiper styles
import 'swiper/swiper-bundle.min.css'

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CacheBuster from 'react-cache-buster';
import { version } from '../package.json';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const isProduction = process.env.NODE_ENV === 'production';

ReactDOM.render(
  <React.StrictMode>
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      loadingComponent={<p>Loading</p>} //If not pass, nothing appears at the time of new version check.
    >
      <Router>
        <App />
      </Router>
    </CacheBuster>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
