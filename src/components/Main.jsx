import React from 'react'

class Main extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render() { 

        // let acc_counter = this.props.args.userAcc_counter
        let acc_username = this.props.args.users_account[0].username
        return (
            <React.Fragment>
                <main className="home-main-div">

                    <header className="home-header">
                        <label>Log out</label>
                    </header>

                    <aside className="side-header">
                        <label> Hi, {acc_username}! </label>
                    </aside>

                    <aside className="aside-div">

                    </aside>

                    <div className="home-div-body">
                        <div className="month-div">
                            <div className="arrow-left"></div>
                            <label className="month-title">April</label>
                            <div className="arrow-right"></div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
 
export default Main;