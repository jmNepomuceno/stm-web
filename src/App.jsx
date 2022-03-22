import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Sign from './components/Sign'
import Main from './components/Main'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            users_accounts_counter : 0,
            users_accounts : [
                {
                    username : "Kyla"
                }
            ],   
            user_goals_counter : 0,
            users_goals : [
                {
                    year : "",
                    month : "",
                    day : "",
                    time : "",
                    often : "",
                    title : ""
                }
            ]
        }
    }

    handleLogInClick = (obj) => {
        this.setState({ users_accounts: [...this.state.users_accounts, obj ] })
        this.setState({users_accounts_counter : this.state.users_accounts_counter + 1})
    }

    handleGoalConfirmClick = (obj) => {
        this.setState({users_goals : [...this.state.users_goals, obj]})
        this.setState({user_goals_counter : this.state.user_goals_counter + 1})
    }

    render() { 
        console.log(this.state.users_goals)
        return (
            <Router basename='stm-web'>
                <React.Fragment>
                    <Routes>
                        <Route path="/home" exact element={
                            <React.Fragment>
                                <Sign 
                                    args = {
                                        {
                                            onLogInClick : this.handleLogInClick
                                        }
                                    }
                                />
                            </React.Fragment>
                        } />

                        <Route path="/" exact element={
                            <Main 
                                args = {
                                    {
                                        userAcc_counter : this.state.users_accounts_counter,
                                        users_account : this.state.users_accounts,
                                        user_goals_counter : this.state.user_goals_counter,
                                        user_goals : this.state.users_goals,
                                        onGoalConfirmClick : this.handleGoalConfirmClick
                                    }
                                }
                            />
                        } />

                    </Routes>
                </React.Fragment>
            </Router>
            
            
        );
    }
}
 
export default App;