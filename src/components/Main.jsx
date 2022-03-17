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
        date.setDate(1)

        // date.setMonth(4)
        // date.setYear(2020)

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

        let days_forloop = []
        
        const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();
        
        const prevlastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

        const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();
        
        const nextDays = 9

        const firstDayIndex = date.getDay()
        
        for(let x = firstDayIndex; x > 0; x--){
            days_forloop.push({cn:"prev-date", num : prevlastDay - x + 1})
        }

        for(let i = 1; i <= lastDay; i++){
            days_forloop.push({cn:"", num : i})
        }
        
        for(let j = 1; j <= nextDays; j++){
            days_forloop.push({cn:"next-date", num : j})
            console.log(j)
        }

        const days = days_forloop.map((val) => (
            <div className={val.cn}>{val.num}</div>
        ));

        

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
                                        <h1> {months[date.getMonth()]} </h1>
                                        <p> {date.toDateString()} </p>
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
                                    {days}
                                    
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