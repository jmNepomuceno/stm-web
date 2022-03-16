import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Sign from './components/Sign'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            window_width : window.innerWidth,
            // SIGN COMPONENT
            sign : {
                header_sign_txt : "Sign In",
                sign_up : "Sign Up",
                sign_up_display : (window.innerWidth <= 770) ? "none" : "block",
                Log_in_btn_txt : "Log In",
                back_btn_display : "none",
                back_btn_mobile_display : (window.innerWidth <= 770) ? "block" : "none",
                login_div_display : (window.innerWidth <= 770) ? "none" : "block",
                btn_div_mobile_display : (window.innerWidth <= 770) ? "block" : "none",
                title_div_txt_display : "block"
            }            
        }
    }

    // SIGN COMPONENTS
    handleSignUpClick = () => {
        if(!this.state.window_width <= 770){
            var sign = {...this.state.sign}
            sign.header_sign_txt = "Sign Up"
            sign.sign_up_display = "none"
            sign.Log_in_btn_txt = "Sign In"
            sign.back_btn_display = "block"
            this.setState({sign})
        }
        
    }

    handleBackBtnClick = () => {
        var sign = {...this.state.sign}
        sign.header_sign_txt = "Sign In"
        sign.sign_up_display = "block"
        sign.Log_in_btn_txt = "Log In"
        sign.back_btn_display = "none"
        this.setState({sign})
    }

    handleSignInMobileClick = () =>{
        var sign = {...this.state.sign}
        sign.title_div_txt_display = "none"
        sign.login_div_display = "block"
        sign.btn_div_mobile_display = "none"
        this.setState({sign})
    }

    handleSignUpMobileClick = () =>{
        var sign = {...this.state.sign}
        sign.title_div_txt_display = "none"
        sign.login_div_display = "block"
        sign.btn_div_mobile_display = "none"

        sign.header_sign_txt = "Sign Up"
        sign.sign_up_display = "none"
        sign.Log_in_btn_txt = "Sign In"
        sign.back_btn_display = "block"
        this.setState({sign})
    }

    handleBackBtnMobileClick = () =>{
        var sign = {...this.state.sign}
        sign.title_div_txt_display = "block"
        sign.login_div_display = "none"
        sign.btn_div_mobile_display = "block"
        this.setState({sign})
    }

    render() { 
        console.log(this.state.sign)
        return (
            <React.Fragment>

                <Sign 
                    args = {
                        {
                            windowWidth : this.state.window_width,
                            signState : this.state.sign,
                            onSignUpClick : this.handleSignUpClick,
                            onBackBtnClick : this.handleBackBtnClick,
                            onSignInMobileClick : this.handleSignInMobileClick,
                            onSignUpMobileClick : this.handleSignUpMobileClick,
                            onBackBtnMobileClick : this.handleBackBtnMobileClick
                        }
                    }
                />

            </React.Fragment>
            
        );
    }
}
 
export default App;