import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Sign from './components/Sign'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            // SIGN COMPONENT
            sign : {
                header_sign_txt : "Sign In",
                sign_up : "Sign Up",
                sign_up_visibility : "visible",
                Log_in_btn_txt : "Log In",
                back_btn_visibility : "hidden"
            }            
        }
    }

    handleSignUpClick = () => {
        this.setState(prevState =>({
            ...prevState,
            sign : {
                header_sign_txt : "Sign Up",
                sign_up : "Sign Up",
                sign_up_visibility : "hidden",
                Log_in_btn_txt : "Sign In",
                back_btn_visibility : "visible"
            }
        }))
    }

    handleBackBtnClick = () => {
        this.setState(prevState =>({
            ...prevState,
            sign : {
                header_sign_txt : "Sign In",
                sign_up : "Sign Up",
                sign_up_visibility : "visible",
                Log_in_btn_txt : "Log In",
                back_btn_visibility : "hidden"
            }
        }))
    }

    render() { 
        console.log(this.state.sign)
        return (
            <React.Fragment>

                <Sign 
                    args = {
                        {
                            signState : this.state.sign,
                            onSignUpClick : this.handleSignUpClick,
                            onBackBtnClick : this.handleBackBtnClick
                        }
                    }
                />

            </React.Fragment>
            
        );
    }
}
 
export default App;