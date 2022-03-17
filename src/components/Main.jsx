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

        // var get_today = new Date();
        // var get_day = String(get_today.getDate()).padStart(2, '0');
        // var get_month = String(get_today.getMonth() + 1).padStart(2, '0'); //January is 0!
        // var get_year = get_today.getFullYear();
        
        // let today_month = ""
        // switch (get_month){
        //     case 0
        // }

        const date = new Date()

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "January",
            "December   "
        ]

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
                        {/* <div className="month-div">

                            <div className="arrow-left"></div>
                            <label className="month-title">April</label>
                            <div className="arrow-right"></div>
                            
                        </div> */}


                        {/* HOW TO MAKE A FUCKING CALENDAR */}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" />
                        
                        <div className="container">
                            <div className="calendar">

                                <div className="month">
                                    <i className="i fas fa-angle-left prev"></i>
                                    <div className="date">
                                        <h1>March</h1>
                                        <p>Fri March 18, 2022</p>
                                    </div>
                                    <i className="fas fa-angle-right next"></i>
                                </div>

                                <div className="weekdays">
                                    <div>Sun</div>
                                    <div>Mon</div>
                                    <div>Tue</div>
                                    <div>Wed</div>
                                    <div>Thu</div>
                                    <div>Fri</div>
                                    <div>Sat</div>
                                </div>

                                <div className="days">
                                    <div className="prev-date">27</div>
                                    <div className="prev-date">28</div>

                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div>8</div>
                                    <div>9</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                    <div>13</div>
                                    <div>14</div>
                                    <div>15</div>
                                    <div>16</div>
                                    <div className="today">17</div>
                                    <div>18</div>
                                    <div>19</div>
                                    <div>20</div>
                                    <div>21</div>
                                    <div>22</div>
                                    <div>23</div>
                                    <div>24</div>
                                    <div>25</div>
                                    <div>26</div>
                                    <div>27</div>
                                    <div>28</div>
                                    <div>29</div>
                                    <div>30</div>
                                    <div>31</div>

                                    <div className="next-date">1</div>
                                    <div className="next-date">2</div>
                                    <div className="next-date">3</div>
                                    <div className="next-date">4</div>
                                    <div className="next-date">5</div>
                                    <div className="next-date">6</div>
                                    <div className="next-date">7</div>
                                    <div className="next-date">8</div>
                                    <div className="next-date">9</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
 
export default Main;