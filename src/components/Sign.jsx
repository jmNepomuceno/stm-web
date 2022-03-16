import React from 'react'

const Sign = (props) => {
    //console.log(props)
    return(
        <main className="home-div">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossorigin="anonymous"
            />
            <img id="home-img" src={require('../imgs/index_bg_2.png')} alt="img" />

            <label id="title-div">
                Scheduling & Task Monitoring Website
            </label>

            <div className="login-div">
                <div id="login-icon-div"></div>

                <hr id="hr-1"/>
                <label id="hr-sign-in-lbl"> {props.args.signState.header_sign_txt} </label>
                <hr id="hr-2"/>

                <form>
                    <input type="text" name="user_name" id="user-name-input" placeholder="User Name" required />
                    <input type="password" name="password" id="password-input" placeholder="Password" required />
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        id="login-btn">
                        {props.args.signState.Log_in_btn_txt}
                    </button>
                </form>

                <label 
                    id="sign-up-lbl"
                    style={{visibility: props.args.signState.sign_up_visibility}}
                    onClick={props.args.onSignUpClick}
                >
                    Sign Up
                </label>
                
                <div 
                    id="back-btn" 
                    style={{visibility: props.args.signState.back_btn_visibility}}
                    onClick={props.args.onBackBtnClick}
                >

                </div>
                <div id="back-btn-mobile"></div>
            </div>

            

            <div className="btn-div-mobile">
                <button type="button" className="btn btn-primary" id="sign-in-btn-mobile">Sign In</button>
                <button type="button" className="btn btn-success" id="sign-up-btn-mobile">Sign Up</button>
            </div>
            

        </main>
    )
}

export default Sign