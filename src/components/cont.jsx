import React from 'react';

class cont extends Component {
    state = {  } 
    render() { 
        for(let i = 0; i <= user_scheds.length - 1; i++){
            let new_Date = this.state.date
            new_Date.setDate(this.state.day_clicked)
            let day_index = new_Date.getDay()

            // let same = 0
            // for(let elem of click_index_val){
            //     if(elem === this.state.day_clicked){
            //         same += 1
            //     }
            // }

            // if(same > 1){
            //     schedsComponents = []
            // }else{
            //     schedsComponents = schedsComponents_thrice
            // }

            if(day_index === 0 && schedsComponents_once.length !== 0){
                if(schedsComponents_thrice.length === 0 && schedsComponents_five.length === 0 && schedsComponents_every.length === 0){
                    schedsComponents = schedsComponents_once 
                }
                else if(schedsComponents_thrice.length !== 0 && schedsComponents_five.length === 0 && schedsComponents_every.length === 0){
                    if(click_index_val.includes(this.state.day_clicked)){
                        if(this.props.args.onOftenDone === "Once a week"){
                            schedsComponents = schedsComponents_thrice
                        }
                        if(this.props.args.onOftenDone === "3 times a week"){
                            schedsComponents = schedsComponents_once
                        }
                    }else{
                        schedsComponents = schedsComponents_once.concat(schedsComponents_thrice)
                    }
                }
                else if(schedsComponents_thrice.length === 0 && schedsComponents_five.length !== 0 && schedsComponents_every.length === 0){
                    if(click_index_val.includes(this.state.day_clicked)){
                        if(this.props.args.onOftenDone === "Once a week"){
                            schedsComponents = schedsComponents_five
                        }
                        if(this.props.args.onOftenDone === "5 times a week"){
                            schedsComponents = schedsComponents_once
                        }
                    }else{
                        schedsComponents = schedsComponents_once.concat(schedsComponents_five)
                    }
                }
                else if(schedsComponents_thrice.length === 0 && schedsComponents_five.length === 0 && schedsComponents_every.length !== 0){
                    if(click_index_val.includes(this.state.day_clicked)){
                        if(this.props.args.onOftenDone === "Once a week"){
                            schedsComponents = schedsComponents_every
                        }
                        if(this.props.args.onOftenDone === "Every day"){
                            schedsComponents = schedsComponents_once
                        }
                    }else{
                        schedsComponents = schedsComponents_once.concat(schedsComponents_every)
                    }
                }
                else if(schedsComponents_thrice.length !== 0 && schedsComponents_five.length !== 0 && schedsComponents_every.length === 0){
                    if(click_index_val.includes(this.state.day_clicked)){
                        schedsComponents = schedsComponents_thrice.concat(schedsComponents_five)
                    }else{
                        schedsComponents = schedsComponents_once.concat(schedsComponents_thrice,schedsComponents_five)
                    }
                }
                else if(schedsComponents_thrice.length !== 0 && schedsComponents_five.length === 0 && schedsComponents_every.length !== 0){
                    if(click_index_val.includes(this.state.day_clicked)){
                        schedsComponents = schedsComponents_thrice.concat(schedsComponents_every)
                    }else{
                        schedsComponents = schedsComponents_once.concat(schedsComponents_thrice,schedsComponents_every)
                    }
                }
                else if(schedsComponents_thrice.length === 0 && schedsComponents_five.length !== 0 && schedsComponents_every.length !== 0){
                    if(click_index_val.includes(this.state.day_clicked)){
                        schedsComponents = schedsComponents_five.concat(schedsComponents_every)
                    }else{
                        schedsComponents = schedsComponents_once.concat(schedsComponents_five,schedsComponents_every)
                    }
                }
                else if(schedsComponents_thrice.length !== 0 && schedsComponents_five.length !== 0 && schedsComponents_every.length !== 0){
                    if(click_index_val.includes(this.state.day_clicked)){
                        schedsComponents = schedsComponents_thrice.concat(schedsComponents_five,schedsComponents_every)
                    }else{
                        schedsComponents = schedsComponents_once.concat(schedsComponents_thrice,schedsComponents_five,schedsComponents_every)
                    }
                }
                //else if()
            }
            else if((day_index === 0 || day_index === 2 || day_index === 4) && schedsComponents_thrice.length !== 0){
                if(schedsComponents_five.length === 0 && schedsComponents_every.length === 0){
                    schedsComponents = schedsComponents_thrice 
                }
                else if(schedsComponents_five.length !== 0 && schedsComponents_every.length === 0){
                    if(click_index_val.includes(this.state.day_clicked)){
                        schedsComponents = schedsComponents_five
                    }else{
                        schedsComponents = schedsComponents_thrice.concat(schedsComponents_five)
                    }
                }
                else if(schedsComponents_five.length === 0 && schedsComponents_every.length !== 0){
                    if(click_index_val.includes(this.state.day_clicked)){
                        schedsComponents = schedsComponents_every
                    }else{
                        schedsComponents = schedsComponents_thrice.concat(schedsComponents_every)
                    }
                }
                else if(schedsComponents_five.length !== 0 && schedsComponents_every.length !== 0){
                    if(click_index_val.includes(this.state.day_clicked)){
                        schedsComponents = schedsComponents_five.concat(schedsComponents_every)
                    }else{
                        schedsComponents = schedsComponents_thrice.concat(schedsComponents_five,schedsComponents_every)
                    }
                }   
            }
            else if((day_index === 0 || day_index === 2 || day_index === 4 || day_index === 5 || day_index === 6) && schedsComponents_five.length !== 0){
                if(schedsComponents_every.length === 0){
                    schedsComponents = schedsComponents_five
                }else{
                    if(click_index_val.includes(this.state.day_clicked)){
                        schedsComponents = schedsComponents_every
                    }else{
                        schedsComponents = schedsComponents_five.concat(schedsComponents_every)
                    }  
                }
            }
            else if(day_index === 0 || day_index === 1 || day_index === 2 || day_index === 3 || day_index === 4 || day_index === 5 || day_index === 6) {
                schedsComponents = schedsComponents_every
            }
        }
    }
}
 
export default cont;