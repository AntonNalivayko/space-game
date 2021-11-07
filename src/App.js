import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StartPage, LevelOne, LevelTwo, LevelThree } from './components';



const App = () => {

    return (

        <>
            <Router>
                    <Switch>
                        <Route exact path='/' component={StartPage} /> 
                        <Route exact path='/levelone' component={LevelOne} />
                        <Route exact path='/leveltwo' component={LevelTwo} />
                        <Route exact path='/levelthree' component={LevelThree} />
                    </Switch>
            </Router>
        </>
    )
};

export default App;

































{/* <Route exact path='/signup' component={Signup} />
                    <Route exact path='/facebook' component={Facebook} />
                    <Route exact path='/google' component={Google} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} /> */}