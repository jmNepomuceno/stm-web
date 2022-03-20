import React from 'react'
import  {Link} from 'react-router-dom'
class Main extends React.Component {
    
    constructor(){
        super()
        this.state = {
            date : new Date(),
            days_forloop : [],
            styles : {
                log_out_display : "block",
                nav_bar_display : (window.innerWidth <= 770) ? "block" : "none",
                nav_bar_left : "2%",
                side_header_display : (window.innerWidth <= 770) ? "none" : "flex",
                aside_div_display : (window.innerWidth <= 770) ? "none" : "block",
                home_div_opacity : "1",
                choose_day_display : "block",
                main_aside_display : "none",
                no_tasks_display : "none",
                days_div_border : "none"
            },
            tasks_per_date : [],
        }
    }

    componentDidMount() {
        this.renderCalendar()
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

    handleNavBarClick = () => {
        var styles = {...this.state.styles}

        if(this.state.styles.nav_bar_left === "2%"){
            styles.log_out_display = "none"
            styles.nav_bar_left = "86%"

            styles.home_div_opacity = "0.2"

            styles.side_header_display = "flex"
            styles.aside_div_display = "block"

        }else{
            styles.log_out_display = "block"
            styles.nav_bar_left = "2%"

            styles.home_div_opacity = "1"

            styles.side_header_display = "none"
            styles.aside_div_display = "none"

        }

        
        this.setState({styles})
    }

    handleNoTasksClick = () => {
        var styles = {...this.state.styles}
        styles.no_tasks_display = "none"
        styles.main_aside_display = "block"

        this.setState({styles})
    }

    handleDateClick = (num, cn) => {
        var styles = {...this.state.styles}

        styles.choose_day_display = "none"
        styles.days_div_border = "1px solid #275EA3"
        // if no tasks on that date.
        styles.no_tasks_display = "block"

        this.setState({styles})
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
            <div 
                className={val.cn} 
                key={val.key}
                onClick={() => this.handleDateClick(val.num , val.cn)}
            >{val.num}
            </div>
        ));

        const nav_styles = {
            display : this.state.styles.nav_bar_display,
            left: this.state.styles.nav_bar_left
        }

        return (
            <React.Fragment>
                <main className="home-main-div">

                    <header className="home-header">
                        <Link to={'/home'}>
                            <label style={{display : this.state.styles.log_out_display}}>Log out</label>
                        </Link>
                        <img 
                            src={require('../imgs/main_imgs/nav_bar.png')} 
                            alt="img" 
                            style={nav_styles}
                            onClick={this.handleNavBarClick}
                        />
                    </header>

                    <aside 
                        className="side-header"
                        style={{display: this.state.styles.side_header_display}}
                    >
                        <label> Hi, {acc_username}! </label>
                    </aside>

                    <aside 
                        className="aside-div"
                        style={{display : this.state.styles.aside_div_display}}
                    >

                        <label style={{display : this.state.styles.choose_day_display}}>Choose a date</label>

                        <div 
                            className="no-tasks-div"
                            style={{display : this.state.styles.no_tasks_display}}
                        >
                            <label>No Information for this day yet</label>
                            <img 
                                src={require('../imgs/main_imgs/add_lists.png')} 
                                alt="img" 
                                onClick={this.handleNoTasksClick}
                            />
                        </div>
                        
                        <div 
                            className="main-aside"
                            style={{display : this.state.styles.main_aside_display}}
                        >

                        </div>

                        

                    </aside>

                    <div 
                        className="home-div-body"
                        style={{opacity : this.state.styles.home_div_opacity}}
                    >
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