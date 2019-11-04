import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import EachProject from "./components/Project/EachProject";
import main from "../src/components/Project/main"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact path="/main" component={main}/>
                    <Route exact path="/Dashboard" component={Dashboard}/><Route exact path="/AddProject" component={AddProject}/>
                    <Switch>
                        <Route exact path="/eachProject/:name/:name2/:content/:progress/:mentorname/:mentorcomment/:img/:mimg" component={EachProject}/>
                        <Route path="/eachProject" component={EachProject}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;