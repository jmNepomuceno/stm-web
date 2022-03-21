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
                choose_day_display : "none", //block
                no_tasks_display : "none",
                days_div_border : "none",
                main_aside_display : "block", // none
                icons_div_top : "40%", //40%
                goal_icon_background : "#eee",
                reminder_icon_background : "#eee",
                task_icon_background : "#eee",
                event_icon_background : "#eee",
                goal_div_display : "none",
                reminder_div_display : "none",
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

    handleIconClick = (icon) => {
        var styles = {...this.state.styles}

        styles.icons_div_top = "1%"

        if(icon === "goal"){
            styles.goal_icon_background = "#9ECEE6"
            styles.goal_div_display = "block"
        }else if(icon === "reminder"){
            styles.reminder_icon_background = "#9ECEE6"
            styles.reminder_div_display = "block"
        }else if(icon === "task"){
            styles.task_icon_background = "#9ECEE6"
        }else if(icon === "event"){
            styles.event_icon_background = "#9ECEE6"
        }
       
        
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

                        <label 
                            className="choose-date-lbl"
                            style={{display : this.state.styles.choose_day_display}}
                        >
                            Choose a date</label>

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
                            <div 
                                className="icons-div"
                                style={{top : this.state.styles.icons_div_top}}
                            >
                                <div 
                                    className="icon goal-icon"
                                    onClick={() => this.handleIconClick("goal")}
                                    style={{background : this.state.styles.goal_icon_background}}
                                >
                                    <img src={require('../imgs/main_imgs/goal_icon.png')} alt="img" />
                                </div>

                                <div 
                                    className="icon reminder-icon"
                                    onClick={() => this.handleIconClick("reminder")}
                                    style={{background : this.state.styles.reminder_icon_background}}
                                >
                                    <img src={require('../imgs/main_imgs/reminder_icon.png')} alt="img" />
                                </div>

                                <div 
                                    className="icon task-icon"
                                    onClick={() => this.handleIconClick("task")}
                                    style={{background : this.state.styles.task_icon_background}}
                                >
                                    <img src={require('../imgs/main_imgs/task_icon.png')} alt="img" />
                                </div>

                                <div 
                                    className="icon event-icon"
                                    onClick={() => this.handleIconClick("event")}
                                    style={{background : this.state.styles.event_icon_background}}
                                >
                                    <img src={require('../imgs/main_imgs/event_icon.png')} alt="img" />
                                </div>

                                <label className="label goal-lbl">Goal</label>
                                <label className="label reminder-lbl">Reminder</label>
                                <label className="label task-lbl">Task</label>
                                <label className="label event-lbl">Event</label>
                            </div>

                            {/* GOAL DIVISION */}
                            <div 
                                className="goal-div"
                                style={{display : this.state.styles.goal_div_display}}
                            >
                                <div className="goal goal-exercise">
                                    <label className="label goal-exericse-lbl">
                                        Exercise <br /> <span>Run, do yoga, get your body moving</span>
                                    </label>
                                </div>

                                <div className="goal goal-skill">
                                    <label className="label goal-skill-lbl">
                                        Build a skill <br /> <span>Learn a language, practice an instrument</span>
                                    </label>
                                </div>

                                <div className="goal goal-fam-friends">
                                    <label className="label goal-fam-friends-lbl">
                                        Family & friends <br /> <span>Make time for those who matter most</span>
                                    </label>
                                </div>

                                <div className="goal goal-me-time">
                                    <label className="label goal-me-time-lbl">
                                        Me time <br /> <span>Read, meditate, take care of yourself</span>
                                    </label>
                                </div>

                                <div className="goal goal-organize">
                                    <label className="label goal-organize-lbl">
                                        Organize my life <br /> <span>Stay on top of things</span>
                                    </label>
                                </div>
                                
                            </div>

                            {/* REMINDER DIVISION */}
                            <div 
                                className="reminder-div"
                                style={{display : this.state.styles.reminder_div_display}}
                            >

                                <input type="text" className="remind-me-txt" placeholder="Remind me to..."/>
                                
                                <select name="time" className="time-select">
                                    <option value="" disabled selected>On what time...</option>
                                    <option value="1:00">1:00</option>
                                    <option value="2:00">2:00</option>
                                    <option value="3:00">3:00</option>
                                    <option value="4:00">4:00</option>
                                    <option value="5:00">5:00</option>
                                    <option value="6:00">6:00</option>
                                    <option value="7:00">7:00</option>
                                    <option value="8:00">8:00</option>
                                    <option value="9:00">9:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="21:00">21:00</option>
                                    <option value="22:00">22:00</option>
                                    <option value="23:00">23:00</option>
                                    <option value="24:00">24:00</option>
                                    
                                </select>

                                <select name="time" className="repeat-select">
                                    <option value="" disabled selected>Repeat every...</option>
                                    <option value="Every day">Every day</option>
                                    <option value="Every week">Every week</option>
                                    <option value="Every month">Every month</option>
                                    <option value="Every year">Every year</option>
                                </select>
                            </div>

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