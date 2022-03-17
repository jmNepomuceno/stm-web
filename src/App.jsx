import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Sign from './components/Sign'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            users_accounts_counter : 0,
            users_accounts : [],   
        }
    }

    handleLogInClick = (obj) => {
        this.setState({ users_accounts: [...this.state.users_accounts, obj ] })
        this.setState({users_accounts_counter : this.state.users_accounts_counter + 1})
    }

    render() { 
        console.log(this.state)
        return (
            <React.Fragment>

                <Sign 
                    args = {
                        {
                            onLogInClick : this.handleLogInClick
                        }
                    }
                />

            </React.Fragment>
            
        );
    }
}
 
export default App;