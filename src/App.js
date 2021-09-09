import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Sidemenu from './components/Sidemenu';
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  let pageSize = 15;
  let apptitle = "InstaNews";
  let apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <Router>
        <Sidemenu apptitle={apptitle} />
        <div className="position-absolute w-100">
          <Navbar apptitle={apptitle} />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <Switch>
            <Route exact path="/"><News setprogress={setProgress} apiKey={apiKey} apptitle={apptitle} key="general" pagesize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"><News setprogress={setProgress} apiKey={apiKey} apptitle={apptitle} key="business" pagesize={pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News setprogress={setProgress} apiKey={apiKey} apptitle={apptitle} key="entertainment" pagesize={pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/health"><News setprogress={setProgress} apiKey={apiKey} apptitle={apptitle} key="health" pagesize={pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News setprogress={setProgress} apiKey={apiKey} apptitle={apptitle} key="science" pagesize={pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News setprogress={setProgress} apiKey={apiKey} apptitle={apptitle} key="sports" pagesize={pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News setprogress={setProgress} apiKey={apiKey} apptitle={apptitle} key="technology" pagesize={pageSize} country="in" category="technology" /></Route>
          </Switch>
        </div>
      </Router>
    )
}

export default App