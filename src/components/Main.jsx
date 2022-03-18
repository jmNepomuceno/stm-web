import React from 'react'

class Main extends React.Component {
    
    constructor(){
        super()
        this.state = {
            date : new Date(),
            days_forloop : []
        }
    }

    renderCalendar = () => {

        this.state.date.setDate(1)
        let days_forloop = []
        let key_val = 1
        const lastDay = new Date(this.state.date.getFullYear(),this.state.date.getMonth() + 1,0).getDate();
        const prevlastDay = new Date(this.state.date.getFullYear(),this.state.date.getMonth(),0).getDate();
        const firstDayIndex = this.state.date.getDay()

        for(let x = firstDayIndex; x > 0; x--){
            days_forloop.push({cn:"prev-date", num : prevlastDay - x + 1, key: key_val++})
        }
        
        for(let i = 1; i <= lastDay; i++){
            if(i === new Date().getDate() && this.state.date.getMonth() === new Date().getMonth()){
                days_forloop.push({cn:"today", num : i, key: key_val++})
            }else{
                days_forloop.push({cn:"", num : i, key: key_val++})
            }                
        }

        //this.setState({days_forloop : days_forloop})


        const nextDays = 42 - days_forloop.length
        
        for(let j = 1; j <= nextDays; j++){
            days_forloop.push({cn:"next-date", num : j, key: key_val++})
        }

        this.setState(prevState => ({
            days_forloop : days_forloop
        }))


    }

    handleNextMonth = () => {
        this.state.date.setMonth(this.state.date.getMonth() + 1)
        this.renderCalendar()
    }

    handlePrevMonth = () => {
        this.state.date.setMonth(this.state.date.getMonth() - 1)
        this.renderCalendar()
    }

    componentDidMount() {
        this.renderCalendar()
    }

    render() { 
        let acc_username = this.props.args.users_account[0].username
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
            "November",
            "December   "
        ]
        
        const days = this.state.days_forloop.map((val) => (
            <div className={val.cn} key={val.key}>{val.num}</div>
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
                                    <i 
                                        className="i fas fa-angle-left prev"
                                        onClick={this.handlePrevMonth}
                                    >

                                    </i>

                                    <div className="date">
                                        <h1> {months[this.state.date.getMonth()]} </h1>
                                        <p> {this.state.date.toDateString()} </p>
                                    </div>
                                    <i 
                                        className="fas fa-angle-right next"
                                        onClick={this.handleNextMonth}
                                    >

                                    </i>
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