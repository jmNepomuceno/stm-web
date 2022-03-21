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
            users_goals : [
                {
                    year : [],
                    month : [],
                    day : [],
                    time : []
                }
            ]
        }
    }

    handleLogInClick = (obj) => {
        this.setState({ users_accounts: [...this.state.users_accounts, obj ] })
        this.setState({users_accounts_counter : this.state.users_accounts_counter + 1})
    }

    handleGoalConfirmClick = (obj) => {
        console.log(obj)
    }

    render() { 
        // console.log(this.state)
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